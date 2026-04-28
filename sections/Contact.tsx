"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiMail, FiSend, FiCheck } from "react-icons/fi";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { personal } from "@/data/portfolio";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Contato pelo Portfólio – ${form.name}`);
    const body = encodeURIComponent(`Nome: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:${personal.email}?subject=${subject}&body=${body}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section id="contact" className="py-28 px-6" aria-label="Entre em contato">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-3">Contato</p>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight">Vamos conversar</h2>
          <p className="mt-4 text-muted text-lg max-w-xl leading-relaxed">
            Estou aberto a novas oportunidades, projetos freelance ou apenas uma boa conversa sobre tecnologia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="md:col-span-2 flex flex-col gap-5"
          >
            <a
              href={`mailto:${personal.email}`}
              className="glass glass-hover rounded-xl p-5 flex items-center gap-4 transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0">
                <FiMail className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-muted mb-0.5">Email</p>
                <p className="text-sm text-foreground font-medium">{personal.email}</p>
              </div>
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover rounded-xl p-5 flex items-center gap-4 transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="p-2.5 rounded-lg bg-white/5 text-foreground shrink-0">
                <SiGithub className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-muted mb-0.5">GitHub</p>
                <p className="text-sm text-foreground font-medium">Kinnitchi</p>
              </div>
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover rounded-xl p-5 flex items-center gap-4 transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
                <SiLinkedin className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-muted mb-0.5">LinkedIn</p>
                <p className="text-sm text-foreground font-medium">Igor Oliveira</p>
              </div>
            </a>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            onSubmit={handleSubmit}
            className="md:col-span-3 glass rounded-2xl p-7 flex flex-col gap-5"
            aria-label="Formulário de contato"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-semibold text-muted uppercase tracking-wider">
                  Nome
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200"
                  autoComplete="name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-email" className="text-xs font-semibold text-muted uppercase tracking-wider">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200"
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-semibold text-muted uppercase tracking-wider">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Como posso te ajudar?"
                rows={5}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              className="self-end inline-flex items-center gap-2 px-7 py-3 rounded-full bg-accent text-white font-semibold hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              {sent ? (
                <>
                  <FiCheck className="w-4 h-4" aria-hidden="true" />
                  Enviado!
                </>
              ) : (
                <>
                  Enviar mensagem
                  <FiSend className="w-4 h-4" aria-hidden="true" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
