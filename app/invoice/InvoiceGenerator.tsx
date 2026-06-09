"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

interface InvoiceData {
  number: string;
  date: string;
  clientName: string;
  clientEmail: string;
  clientCountry: string;
  serviceDesc: string;
  serviceDate: string;
  passengers: string;
  total: number;
  deposit: number;
  balance: number;
  pct: number;
  cardNumber: string;
  notes: string;
}

function fmt(num: number) {
  return "$" + (num || 0).toFixed(2);
}

function fmtDate(dateStr: string) {
  if (!dateStr) return "—";
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function InvoiceGenerator() {
  const today = new Date().toISOString().split("T")[0];

  const [invNumber, setInvNumber] = useState("001");
  const [invDate, setInvDate] = useState(today);
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientCountry, setClientCountry] = useState("");
  const [serviceDesc, setServiceDesc] = useState("");
  const [serviceDate, setServiceDate] = useState("");
  const [passengers, setPassengers] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [depositPct, setDepositPct] = useState(20);
  const [cardNumber, setCardNumber] = useState("");
  const [notes, setNotes] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const total = parseFloat(totalAmount) || 0;
  const deposit = total * depositPct / 100;
  const balance = total - deposit;

  function downloadPDF() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const jspdf = (window as any).jspdf;
    if (!jspdf) return;
    const { jsPDF } = jspdf;
    const doc = new jsPDF({ unit: "mm", format: "a4" });

    const inv: InvoiceData = {
      number: invNumber || "001",
      date: fmtDate(invDate),
      clientName: clientName || "—",
      clientEmail,
      clientCountry: clientCountry || "—",
      serviceDesc: serviceDesc || "—",
      serviceDate: fmtDate(serviceDate),
      passengers: passengers || "—",
      total,
      deposit,
      balance,
      pct: depositPct,
      cardNumber: cardNumber || "—",
      notes,
    };

    const W = 210, pad = 18;
    let y = 0;

    // Header bar
    doc.setFillColor(28, 26, 22);
    doc.rect(0, 0, W, 28, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("NOMAD TRANSFER", pad, 13);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(160, 150, 135);
    doc.text("TOURS & PRIVATE TRANSFERS · KYRGYZSTAN", pad, 20);

    doc.setFillColor(200, 150, 42);
    doc.roundedRect(W - pad - 28, 8, 28, 11, 2, 2, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text("INVOICE", W - pad - 14, 15.5, { align: "center" });

    y = 38;

    // Meta row
    const cols = [pad, 70, 120, 160];
    const labels = ["INVOICE NO.", "DATE", "BILL TO", "COUNTRY"];
    const vals = [`#${inv.number}`, inv.date, inv.clientName, inv.clientCountry];

    labels.forEach((l, i) => {
      doc.setTextColor(138, 130, 120);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.5);
      doc.text(l, cols[i], y);
      doc.setTextColor(28, 26, 22);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.text(vals[i], cols[i], y + 6);
    });

    if (inv.clientEmail) {
      doc.setFont("helvetica", "normal");
      doc.setTextColor(138, 130, 120);
      doc.setFontSize(7.5);
      doc.text(inv.clientEmail, cols[2], y + 12);
    }

    y += 22;

    doc.setDrawColor(228, 223, 214);
    doc.setLineWidth(0.3);
    doc.line(pad, y, W - pad, y);
    y += 8;

    // Table header
    doc.setFillColor(247, 245, 240);
    doc.rect(pad, y - 3, W - pad * 2, 9, "F");
    doc.setTextColor(138, 130, 120);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.text("DESCRIPTION", pad + 2, y + 3);
    doc.text("DATE OF SERVICE", 108, y + 3);
    doc.text("PAX", 148, y + 3);
    doc.text("AMOUNT", W - pad - 2, y + 3, { align: "right" });
    y += 12;

    // Table row
    doc.setTextColor(28, 26, 22);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    const descLines = doc.splitTextToSize(inv.serviceDesc, 80);
    doc.text(descLines, pad + 2, y);
    doc.text(inv.serviceDate, 108, y);
    doc.text(inv.passengers, 148, y);
    doc.setFont("helvetica", "bold");
    doc.text(fmt(inv.total), W - pad - 2, y, { align: "right" });
    y += descLines.length * 5 + 6;

    doc.setDrawColor(228, 223, 214);
    doc.line(pad, y, W - pad, y);
    y += 8;

    // Totals
    const totalsX = 130;
    const amtX = W - pad - 2;

    function totalRow(
      label: string,
      value: string,
      color: number[],
      bold = false,
      size = 9
    ) {
      doc.setFontSize(size);
      doc.setFont("helvetica", bold ? "bold" : "normal");
      doc.setTextColor(...color);
      doc.text(label, totalsX, y);
      doc.text(value, amtX, y, { align: "right" });
      y += 6;
    }

    totalRow("Subtotal", fmt(inv.total), [138, 130, 120]);
    totalRow(`Deposit due now (${inv.pct}%)`, fmt(inv.deposit), [42, 122, 75], true);
    totalRow("Balance due on arrival", fmt(inv.balance), [138, 130, 120]);

    y += 2;
    doc.setDrawColor(28, 26, 22);
    doc.setLineWidth(0.5);
    doc.line(totalsX, y, W - pad, y);
    y += 5;
    totalRow("TOTAL", fmt(inv.total), [28, 26, 22], true, 11);

    y += 6;

    // Payment box
    doc.setFillColor(253, 246, 232);
    doc.setDrawColor(232, 201, 122);
    doc.setLineWidth(0.3);
    doc.roundedRect(pad, y, W - pad * 2, 38, 3, 3, "FD");

    doc.setFontSize(7.5);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(200, 150, 42);
    doc.text("HOW TO PAY DEPOSIT", pad + 6, y + 7);

    const payRows: [string, string][] = [
      ["Method", "Remitly (card transfer)"],
      ["Send to card", inv.cardNumber],
      ["Recipient", "Nomad Transfer"],
      ["After payment", "Send screenshot via WhatsApp to confirm booking"],
    ];

    let py = y + 14;
    payRows.forEach(([l, v]) => {
      doc.setFont("helvetica", "normal");
      doc.setTextColor(138, 130, 120);
      doc.setFontSize(8);
      doc.text(l, pad + 6, py);
      doc.setTextColor(28, 26, 22);
      doc.setFont("helvetica", "bold");
      doc.text(v, pad + 42, py);
      py += 6;
    });

    y += 44;

    // Notes
    if (inv.notes) {
      y += 4;
      doc.setFillColor(247, 245, 240);
      const noteLines = doc.splitTextToSize(inv.notes, W - pad * 2 - 12);
      doc.roundedRect(pad, y, W - pad * 2, noteLines.length * 5 + 14, 3, 3, "F");
      doc.setFontSize(7.5);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(138, 130, 120);
      doc.text("NOTES", pad + 6, y + 7);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(28, 26, 22);
      doc.setFontSize(8.5);
      doc.text(noteLines, pad + 6, y + 13);
    }

    // Footer
    const footerY = 280;
    doc.setDrawColor(228, 223, 214);
    doc.setLineWidth(0.3);
    doc.line(pad, footerY - 4, W - pad, footerY - 4);
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(138, 130, 120);
    doc.text(
      "Nomad Transfer · Bishkek, Kyrgyzstan · nomadtransfer.kg",
      W / 2,
      footerY + 2,
      { align: "center" }
    );
    doc.text(
      "Thank you for choosing us. We look forward to serving you!",
      W / 2,
      footerY + 8,
      { align: "center" }
    );

    doc.save(`NomadTransfer-Invoice-${inv.number}.pdf`);

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  }

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"
        strategy="beforeInteractive"
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --bg: #f7f5f0; --card: #ffffff; --border: #e4dfd6;
          --text: #1c1a16; --muted: #8a8278; --accent: #c8962a;
          --accent-light: #fdf6e8; --green: #2a7a4b;
        }
        .inv-body { font-family: 'DM Sans', sans-serif; background: var(--bg); color: var(--text); min-height: 100vh; }
        header { background: var(--text); padding: 18px 32px; display: flex; align-items: center; justify-content: space-between; }
        .logo { display: flex; align-items: center; gap: 10px; color: #fff; font-size: 17px; font-weight: 600; letter-spacing: -0.3px; }
        .logo-mark { width: 32px; height: 32px; background: var(--accent); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 16px; }
        .header-tag { font-size: 12px; color: rgba(255,255,255,0.45); font-family: 'DM Mono', monospace; letter-spacing: 1px; }
        .layout { display: grid; grid-template-columns: 1fr 1fr; gap: 0; max-width: 1100px; margin: 40px auto; padding: 0 24px; }
        .form-panel { background: var(--card); border: 1px solid var(--border); border-radius: 20px 0 0 20px; padding: 36px 32px; }
        .panel-title { font-size: 13px; font-family: 'DM Mono', monospace; letter-spacing: 2px; text-transform: uppercase; color: var(--muted); margin-bottom: 28px; }
        .field-group { margin-bottom: 20px; }
        .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 20px; }
        .inv-label-text { display: block; font-size: 12px; font-weight: 500; color: var(--muted); text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 6px; }
        .inv-input { width: 100%; background: var(--bg); border: 1px solid var(--border); border-radius: 10px; padding: 10px 14px; font-size: 14px; font-family: 'DM Sans', sans-serif; color: var(--text); outline: none; transition: border-color 0.15s; }
        .inv-input:focus { border-color: var(--accent); background: #fff; }
        .inv-textarea { resize: vertical; min-height: 72px; }
        .section-divider { height: 1px; background: var(--border); margin: 24px 0; }
        .section-sub { font-size: 13px; font-weight: 600; color: var(--text); margin-bottom: 16px; }
        .amount-row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-bottom: 20px; }
        .amount-display { background: var(--accent-light); border: 1px solid #e8c97a; border-radius: 10px; padding: 10px 14px; }
        .amount-display .inv-label-text { color: var(--accent); }
        .amount-display .val { font-size: 16px; font-weight: 600; color: var(--accent); font-family: 'DM Mono', monospace; }
        .generate-btn { width: 100%; background: var(--text); color: #fff; border: none; border-radius: 12px; padding: 16px; font-size: 15px; font-weight: 600; font-family: 'DM Sans', sans-serif; cursor: pointer; margin-top: 8px; display: flex; align-items: center; justify-content: center; gap: 8px; transition: opacity 0.15s, transform 0.1s; }
        .generate-btn:hover { opacity: 0.88; transform: translateY(-1px); }
        .generate-btn:active { transform: translateY(0); }
        .preview-panel { background: #e8e4dc; border: 1px solid var(--border); border-left: none; border-radius: 0 20px 20px 0; padding: 36px 32px; display: flex; flex-direction: column; }
        .preview-label { font-size: 13px; font-family: 'DM Mono', monospace; letter-spacing: 2px; text-transform: uppercase; color: var(--muted); margin-bottom: 20px; }
        .invoice-preview { background: #fff; border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.1); padding: 32px 28px; flex: 1; font-size: 12px; line-height: 1.6; overflow: hidden; }
        .inv-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px; padding-bottom: 20px; border-bottom: 2px solid var(--text); }
        .inv-company-name { font-size: 18px; font-weight: 700; color: var(--text); letter-spacing: -0.5px; }
        .inv-company-sub { font-size: 10px; color: var(--muted); margin-top: 2px; text-transform: uppercase; letter-spacing: 1px; }
        .inv-badge { background: var(--text); color: #fff; font-size: 10px; font-weight: 600; padding: 4px 12px; border-radius: 100px; letter-spacing: 1.5px; text-transform: uppercase; }
        .inv-meta { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px; }
        .inv-meta-block .inv-meta-label { font-size: 9px; text-transform: uppercase; letter-spacing: 1px; color: var(--muted); margin-bottom: 3px; }
        .inv-meta-block .inv-meta-val { font-size: 12px; font-weight: 500; color: var(--text); }
        .inv-divider { height: 1px; background: var(--border); margin: 16px 0; }
        .inv-table { width: 100%; border-collapse: collapse; margin-bottom: 16px; }
        .inv-table th { font-size: 9px; text-transform: uppercase; letter-spacing: 1px; color: var(--muted); text-align: left; padding: 6px 0; border-bottom: 1px solid var(--border); }
        .inv-table td { font-size: 11px; color: var(--text); padding: 8px 0; border-bottom: 1px solid #f0ede8; vertical-align: top; }
        .inv-table td:last-child { text-align: right; font-family: 'DM Mono', monospace; }
        .inv-totals { margin-top: 8px; }
        .inv-total-row { display: flex; justify-content: space-between; font-size: 11px; color: var(--muted); padding: 3px 0; }
        .inv-total-row.main { font-size: 14px; font-weight: 700; color: var(--text); padding-top: 8px; margin-top: 4px; border-top: 2px solid var(--text); }
        .inv-total-row.deposit-row { color: var(--green); font-weight: 600; }
        .inv-payment { background: var(--accent-light); border: 1px solid #e8c97a; border-radius: 8px; padding: 12px 14px; margin-top: 16px; }
        .inv-payment-title { font-size: 10px; text-transform: uppercase; letter-spacing: 1px; color: var(--accent); font-weight: 600; margin-bottom: 8px; }
        .inv-payment-row { display: flex; justify-content: space-between; font-size: 10px; color: var(--text); padding: 2px 0; }
        .inv-payment-row span:first-child { color: var(--muted); }
        .card-num { font-family: 'DM Mono', monospace; font-weight: 500; }
        .inv-footer { margin-top: 16px; padding-top: 12px; border-top: 1px solid var(--border); font-size: 9px; color: var(--muted); text-align: center; line-height: 1.7; }
        .success-msg { background: #edf7f1; border: 1px solid #a8dab5; border-radius: 10px; padding: 12px 16px; font-size: 13px; color: var(--green); font-weight: 500; margin-top: 12px; text-align: center; }
        .notes-block { margin-top: 12px; background: #f7f5f0; border-radius: 8px; padding: 10px 12px; font-size: 10px; color: #8a8278; }
        .notes-title { color: #1c1a16; display: block; margin-bottom: 4px; font-size: 9px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; }
        @media (max-width: 768px) {
          .layout { grid-template-columns: 1fr; padding: 0 16px; }
          .form-panel { border-radius: 20px 20px 0 0; }
          .preview-panel { border-left: 1px solid var(--border); border-top: none; border-radius: 0 0 20px 20px; }
          .field-row, .amount-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="inv-body">
        <header>
          <div className="logo">
            <div className="logo-mark">🏔</div>
            Nomad Transfer
          </div>
          <div className="header-tag">INVOICE GENERATOR</div>
        </header>

        <div className="layout">
          {/* FORM */}
          <div className="form-panel">
            <div className="panel-title">Fill in details</div>

            <div className="field-row">
              <div>
                <label className="inv-label-text">Invoice #</label>
                <input className="inv-input" type="text" value={invNumber} onChange={e => setInvNumber(e.target.value)} />
              </div>
              <div>
                <label className="inv-label-text">Date</label>
                <input className="inv-input" type="date" value={invDate} onChange={e => setInvDate(e.target.value)} />
              </div>
            </div>

            <div className="section-divider" />
            <div className="section-sub">Client details</div>

            <div className="field-group">
              <label className="inv-label-text">Client name</label>
              <input className="inv-input" type="text" placeholder="John Smith" value={clientName} onChange={e => setClientName(e.target.value)} />
            </div>
            <div className="field-row">
              <div>
                <label className="inv-label-text">Email</label>
                <input className="inv-input" type="email" placeholder="john@email.com" value={clientEmail} onChange={e => setClientEmail(e.target.value)} />
              </div>
              <div>
                <label className="inv-label-text">Country</label>
                <input className="inv-input" type="text" placeholder="USA" value={clientCountry} onChange={e => setClientCountry(e.target.value)} />
              </div>
            </div>

            <div className="section-divider" />
            <div className="section-sub">Service</div>

            <div className="field-group">
              <label className="inv-label-text">Service description</label>
              <input className="inv-input" type="text" placeholder="Private transfer Bishkek → Osh" value={serviceDesc} onChange={e => setServiceDesc(e.target.value)} />
            </div>
            <div className="field-row">
              <div>
                <label className="inv-label-text">Date of service</label>
                <input className="inv-input" type="date" value={serviceDate} onChange={e => setServiceDate(e.target.value)} />
              </div>
              <div>
                <label className="inv-label-text">Passengers</label>
                <input className="inv-input" type="text" placeholder="2 pax" value={passengers} onChange={e => setPassengers(e.target.value)} />
              </div>
            </div>

            <div className="section-divider" />
            <div className="section-sub">Payment</div>

            <div className="amount-row">
              <div>
                <label className="inv-label-text">Total (USD)</label>
                <input className="inv-input" type="number" placeholder="250" min="0" value={totalAmount} onChange={e => setTotalAmount(e.target.value)} />
              </div>
              <div>
                <label className="inv-label-text">Deposit %</label>
                <select className="inv-input" value={depositPct} onChange={e => setDepositPct(parseInt(e.target.value))}>
                  <option value={10}>10%</option>
                  <option value={20}>20%</option>
                  <option value={30}>30%</option>
                  <option value={50}>50%</option>
                  <option value={100}>100%</option>
                </select>
              </div>
              <div className="amount-display">
                <label className="inv-label-text">Deposit due</label>
                <div className="val">{fmt(deposit)}</div>
              </div>
            </div>

            <div className="field-group">
              <label className="inv-label-text">Card number (for payment)</label>
              <input className="inv-input" type="text" placeholder="4169 XXXX XXXX XXXX" value={cardNumber} onChange={e => setCardNumber(e.target.value)} />
            </div>

            <div className="field-group">
              <label className="inv-label-text">Notes (optional)</label>
              <textarea className="inv-input inv-textarea" placeholder="e.g. Meeting point: Hyatt Regency lobby, 08:00 AM" value={notes} onChange={e => setNotes(e.target.value)} />
            </div>

            <button className="generate-btn" onClick={downloadPDF}>
              ↓ &nbsp; Download Invoice PDF
            </button>
            {showSuccess && (
              <div className="success-msg">✓ Invoice downloaded successfully!</div>
            )}
          </div>

          {/* PREVIEW */}
          <div className="preview-panel">
            <div className="preview-label">Live preview</div>
            <div className="invoice-preview">

              <div className="inv-header">
                <div>
                  <div className="inv-company-name">Nomad Transfer</div>
                  <div className="inv-company-sub">Tours & Private Transfers · Kyrgyzstan</div>
                </div>
                <div className="inv-badge">Invoice</div>
              </div>

              <div className="inv-meta">
                <div className="inv-meta-block">
                  <div className="inv-meta-label">Invoice No.</div>
                  <div className="inv-meta-val">#{invNumber || "001"}</div>
                </div>
                <div className="inv-meta-block">
                  <div className="inv-meta-label">Date</div>
                  <div className="inv-meta-val">{fmtDate(invDate) || "—"}</div>
                </div>
                <div className="inv-meta-block">
                  <div className="inv-meta-label">Bill to</div>
                  <div className="inv-meta-val">{clientName || "—"}</div>
                </div>
                <div className="inv-meta-block">
                  <div className="inv-meta-label">Country</div>
                  <div className="inv-meta-val">{clientCountry || "—"}</div>
                </div>
              </div>

              <div className="inv-divider" />

              <table className="inv-table">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Pax</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{serviceDesc || "—"}</td>
                    <td>{fmtDate(serviceDate) || "—"}</td>
                    <td>{passengers || "—"}</td>
                    <td>{fmt(total)}</td>
                  </tr>
                </tbody>
              </table>

              <div className="inv-totals">
                <div className="inv-total-row">
                  <span>Subtotal</span>
                  <span>{fmt(total)}</span>
                </div>
                <div className="inv-total-row deposit-row">
                  <span>Deposit due now ({depositPct}%)</span>
                  <span>{fmt(deposit)}</span>
                </div>
                <div className="inv-total-row">
                  <span>Balance due on arrival</span>
                  <span>{fmt(balance)}</span>
                </div>
                <div className="inv-total-row main">
                  <span>Total</span>
                  <span>{fmt(total)}</span>
                </div>
              </div>

              <div className="inv-payment">
                <div className="inv-payment-title">How to pay deposit</div>
                <div className="inv-payment-row">
                  <span>Method</span>
                  <span>Remitly (card transfer)</span>
                </div>
                <div className="inv-payment-row">
                  <span>Send to card</span>
                  <span className="card-num">{cardNumber || "—"}</span>
                </div>
                <div className="inv-payment-row">
                  <span>Recipient</span>
                  <span>Nomad Transfer</span>
                </div>
                <div className="inv-payment-row">
                  <span>After payment</span>
                  <span>Send screenshot via WhatsApp</span>
                </div>
              </div>

              {notes.trim() && (
                <div className="notes-block">
                  <strong className="notes-title">Notes</strong>
                  <span>{notes}</span>
                </div>
              )}

              <div className="inv-footer">
                Nomad Transfer · Bishkek, Kyrgyzstan · nomadtransfer.kg<br />
                Thank you for choosing us. We look forward to serving you!
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
