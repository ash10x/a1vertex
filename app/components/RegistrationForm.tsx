"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type RegType = "single" | "group";
type Status = "idle" | "loading" | "success" | "error";
type Gender = "male" | "female" | "";

type AthleteEntry = {
  id: string;
  name: string;
  age: string;
  gender: Gender;
  event: string;
};

const INPUT =
  "w-full px-4 py-3 rounded-2xl bg-black/40 border border-white/10 text-white placeholder:text-white/30 outline-none focus:border-cyan-400/40 transition-colors text-sm";

function emptyAthlete(id: string): AthleteEntry {
  return { id, name: "", age: "", gender: "", event: "" };
}

export default function RegistrationForm() {
  const [regType, setRegType] = useState<RegType>("single");
  const [status, setStatus] = useState<Status>("idle");

  // ── Single ──────────────────────────────────────────
  const [single, setSingle] = useState({
    name: "",
    age: "",
    event: "",
    email: "",
    phone: "",
    experience: "",
  });

  // ── Group ───────────────────────────────────────────
  const [contact, setContact] = useState({
    contactName: "",
    contactEmail: "",
    contactPhone: "",
  });
  const nextId = useRef(2);
  const [athletes, setAthletes] = useState<AthleteEntry[]>([
    emptyAthlete("1"),
  ]);

  const boysCount = athletes.filter((a) => a.gender === "male").length;
  const girlsCount = athletes.filter((a) => a.gender === "female").length;
  const totalCount = athletes.length;

  function addAthlete() {
    if (totalCount >= 12) return;
    setAthletes((prev) => [
      ...prev,
      emptyAthlete(String(nextId.current++)),
    ]);
  }

  function removeAthlete(id: string) {
    if (athletes.length <= 1) return;
    setAthletes((prev) => prev.filter((a) => a.id !== id));
  }

  function updateAthlete(id: string, field: keyof AthleteEntry, value: string) {
    setAthletes((prev) =>
      prev.map((a) => (a.id === id ? { ...a, [field]: value } : a))
    );
  }

  function toggleGender(id: string, gender: "male" | "female") {
    const athlete = athletes.find((a) => a.id === id);
    if (!athlete) return;
    if (athlete.gender === gender) {
      updateAthlete(id, "gender", "");
      return;
    }
    if (gender === "male" && boysCount >= 6) return;
    if (gender === "female" && girlsCount >= 6) return;
    updateAthlete(id, "gender", gender);
  }

  function switchType(type: RegType) {
    setRegType(type);
    setStatus("idle");
  }

  // ── Submit ──────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const body =
        regType === "single"
          ? {
              type: "single",
              name: single.name,
              age: single.age,
              primaryEvent: single.event,
              email: single.email,
              phone: single.phone,
              experience: single.experience,
            }
          : {
              type: "group",
              ...contact,
              athletes: athletes.map(({ id: _id, ...rest }) => rest),
            };

      const res = await fetch("/api/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      setSingle({ name: "", age: "", event: "", email: "", phone: "", experience: "" });
      setContact({ contactName: "", contactEmail: "", contactPhone: "" });
      setAthletes([emptyAthlete(String(nextId.current++))]);
    } catch {
      setStatus("error");
    }
  };

  const capacityPct = Math.round((totalCount / 12) * 100);

  return (
    <div>
      {/* ── TYPE TOGGLE ── */}
      <div className="flex rounded-2xl border border-white/10 bg-black/30 p-1 mb-6">
        {(["single", "group"] as const).map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => switchType(type)}
            className={`flex-1 py-2.5 rounded-xl text-sm font-black transition-all ${
              regType === type
                ? "bg-gradient-to-r from-cyan-400 to-pink-400 text-black"
                : "text-white/50 hover:text-white/80"
            }`}
          >
            {type === "single" ? "Single Athlete" : "Group  (up to 12)"}
          </button>
        ))}
      </div>

      {/* ── STATUS BANNERS ── */}
      {status === "success" && (
        <div className="mb-4 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-300">
          {regType === "single"
            ? "Registration received! We'll contact you within 2–3 business days."
            : `Group registration received (${totalCount} athlete${totalCount !== 1 ? "s" : ""})! We'll be in touch shortly.`}
        </div>
      )}
      {status === "error" && (
        <div className="mb-4 rounded-2xl border border-pink-400/30 bg-pink-400/10 px-4 py-3 text-sm text-pink-300">
          Something went wrong. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <AnimatePresence mode="wait">
          {/* ── SINGLE ATHLETE ── */}
          {regType === "single" && (
            <motion.div
              key="single"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <input
                type="text"
                required
                placeholder="Full Name"
                value={single.name}
                onChange={(e) => setSingle({ ...single, name: e.target.value })}
                className={INPUT}
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="number"
                  required
                  placeholder="Age"
                  value={single.age}
                  onChange={(e) => setSingle({ ...single, age: e.target.value })}
                  className={INPUT}
                />
                <input
                  type="text"
                  required
                  placeholder="Primary Event"
                  value={single.event}
                  onChange={(e) => setSingle({ ...single, event: e.target.value })}
                  className={INPUT}
                />
              </div>
              <input
                type="email"
                required
                placeholder="Email Address"
                value={single.email}
                onChange={(e) => setSingle({ ...single, email: e.target.value })}
                className={INPUT}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={single.phone}
                onChange={(e) => setSingle({ ...single, phone: e.target.value })}
                className={INPUT}
              />
              <textarea
                rows={4}
                placeholder="Athletic Background / Experience"
                value={single.experience}
                onChange={(e) => setSingle({ ...single, experience: e.target.value })}
                className={INPUT + " resize-none"}
              />
            </motion.div>
          )}

          {/* ── GROUP REGISTRATION ── */}
          {regType === "group" && (
            <motion.div
              key="group"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {/* Contact */}
              <p className="text-[11px] uppercase tracking-[0.25em] text-pink-400 font-semibold">
                Group Contact
              </p>
              <input
                type="text"
                required
                placeholder="Contact Name (Coach / Parent / Guardian)"
                value={contact.contactName}
                onChange={(e) => setContact({ ...contact, contactName: e.target.value })}
                className={INPUT}
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="email"
                  required
                  placeholder="Contact Email"
                  value={contact.contactEmail}
                  onChange={(e) => setContact({ ...contact, contactEmail: e.target.value })}
                  className={INPUT}
                />
                <input
                  type="tel"
                  placeholder="Contact Phone"
                  value={contact.contactPhone}
                  onChange={(e) => setContact({ ...contact, contactPhone: e.target.value })}
                  className={INPUT}
                />
              </div>

              {/* Capacity tracker */}
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-white/40">
                    Group Capacity
                  </span>
                  <span className="text-sm font-black text-white">
                    {totalCount} / 12
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-white/10 overflow-hidden mb-3">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 transition-all duration-300"
                    style={{ width: `${capacityPct}%` }}
                  />
                </div>
                <div className="flex gap-5 text-xs font-semibold">
                  <span className={boysCount >= 6 ? "text-cyan-400" : "text-cyan-400/60"}>
                    Boys: {boysCount} / 6
                    {boysCount >= 6 && (
                      <span className="ml-1 text-[10px] bg-cyan-400/20 text-cyan-300 px-1.5 py-0.5 rounded-full">
                        Full
                      </span>
                    )}
                  </span>
                  <span className={girlsCount >= 6 ? "text-pink-400" : "text-pink-400/60"}>
                    Girls: {girlsCount} / 6
                    {girlsCount >= 6 && (
                      <span className="ml-1 text-[10px] bg-pink-400/20 text-pink-300 px-1.5 py-0.5 rounded-full">
                        Full
                      </span>
                    )}
                  </span>
                </div>
              </div>

              {/* Athletes */}
              <p className="text-[11px] uppercase tracking-[0.25em] text-cyan-400 font-semibold">
                Athletes
              </p>

              <div className="space-y-3">
                {athletes.map((athlete, i) => (
                  <div
                    key={athlete.id}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4 space-y-3"
                  >
                    {/* Header row */}
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] uppercase tracking-[0.15em] text-white/40">
                        Athlete {i + 1}
                      </span>
                      {athletes.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeAthlete(athlete.id)}
                          className="text-xs text-white/30 hover:text-pink-400 transition-colors"
                        >
                          Remove
                        </button>
                      )}
                    </div>

                    {/* Name + Age */}
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="Name"
                        value={athlete.name}
                        onChange={(e) => updateAthlete(athlete.id, "name", e.target.value)}
                        className={INPUT}
                      />
                      <input
                        type="number"
                        required
                        placeholder="Age"
                        value={athlete.age}
                        onChange={(e) => updateAthlete(athlete.id, "age", e.target.value)}
                        className={INPUT}
                      />
                    </div>

                    {/* Event */}
                    <input
                      type="text"
                      placeholder="Primary Event (e.g. 100m, Long Jump)"
                      value={athlete.event}
                      onChange={(e) => updateAthlete(athlete.id, "event", e.target.value)}
                      className={INPUT}
                    />

                    {/* Gender toggle */}
                    <div className="flex gap-2">
                      {(["male", "female"] as const).map((g) => {
                        const isSelected = athlete.gender === g;
                        const isFull =
                          g === "male" ? boysCount >= 6 : girlsCount >= 6;
                        const disabled = !isSelected && isFull;
                        return (
                          <button
                            key={g}
                            type="button"
                            disabled={disabled}
                            onClick={() => toggleGender(athlete.id, g)}
                            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all border ${
                              isSelected
                                ? g === "male"
                                  ? "bg-cyan-400/20 border-cyan-400/50 text-cyan-300"
                                  : "bg-pink-400/20 border-pink-400/50 text-pink-300"
                                : disabled
                                ? "border-white/5 text-white/20 cursor-not-allowed"
                                : "border-white/10 text-white/40 hover:border-white/25 hover:text-white/70"
                            }`}
                          >
                            {g === "male" ? "Boy" : "Girl"}
                            {disabled && !isSelected && " (full)"}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Add athlete button */}
              {totalCount < 12 && (
                <button
                  type="button"
                  onClick={addAthlete}
                  className="w-full py-3 rounded-2xl border border-dashed border-white/20 text-white/40 hover:border-cyan-400/40 hover:text-cyan-400 text-sm transition-all"
                >
                  + Add Athlete &nbsp;
                  <span className="text-white/25">
                    ({12 - totalCount} spot{12 - totalCount !== 1 ? "s" : ""} remaining)
                  </span>
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── SUBMIT ── */}
        <motion.button
          type="submit"
          disabled={status === "loading"}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 text-black font-black text-sm shadow-[0_0_30px_rgba(34,211,238,0.25)] disabled:opacity-60 transition-all"
        >
          {status === "loading"
            ? "Submitting..."
            : regType === "single"
            ? "Submit Athlete Application"
            : `Submit Group Registration (${totalCount} athlete${totalCount !== 1 ? "s" : ""})`}
        </motion.button>

        <p className="text-center text-xs text-white/30">
          Limited intake · 12 athletes maximum · 6 boys / 6 girls
        </p>
      </form>
    </div>
  );
}
