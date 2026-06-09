"use client";

import Script from "next/script";
import { useRef, useState } from "react";

interface LineItem {
  id: number;
  description: string;
  route: string;
  date: string;
  qty: number;
  unitPrice: number;
}

function fmt(num: number) {
  return "$" + (num || 0).toFixed(2);
}

function fmtDate(dateStr: string) {
  if (!dateStr) return "—";
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
}

let nextId = 1;
function newItem(): LineItem {
  return { id: nextId++, description: "", route: "", date: "", qty: 1, unitPrice: 0 };
}

export default function InvoiceGenerator() {
  const today = new Date().toISOString().split("T")[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];
  const previewRef = useRef<HTMLDivElement>(null);

  const [invNumber, setInvNumber] = useState("NT-2025-001");
  const [invDate, setInvDate] = useState(today);
  const [dueDate, setDueDate] = useState(tomorrow);

  const [senderName, setSenderName] = useState("ZAMIRBEKOVA MADINA");
  const [senderEmail, setSenderEmail] = useState("info@nomad-transfer.com");

  const [clientName, setClientName] = useState("");
  const [clientAddr1, setClientAddr1] = useState("");
  const [clientAddr2, setClientAddr2] = useState("");

  const [items, setItems] = useState<LineItem[]>([newItem()]);

  const [accountHolder, setAccountHolder] = useState("ZAMIRBEKOVA MADINA");
  const [cardAccount, setCardAccount] = useState("");

  const [isGenerating, setIsGenerating] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const subtotal = items.reduce((s, it) => s + it.qty * it.unitPrice, 0);

  function updateItem(id: number, field: keyof LineItem, value: string | number) {
    setItems(prev => prev.map(it => it.id === id ? { ...it, [field]: value } : it));
  }

  function addItem() {
    setItems(prev => [...prev, newItem()]);
  }

  function removeItem(id: number) {
    setItems(prev => prev.length > 1 ? prev.filter(it => it.id !== id) : prev);
  }

  async function downloadPDF() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    if (!w.jspdf || !w.html2canvas || !previewRef.current) return;

    setIsGenerating(true);
    try {
      const { jsPDF } = w.jspdf;
      const clone = previewRef.current.cloneNode(true) as HTMLElement;
      Object.assign(clone.style, {
        position: "fixed",
        top: "-9999px",
        left: "0",
        width: "794px",
        maxHeight: "none",
        overflow: "visible",
        boxShadow: "none",
        background: "#fff",
        fontSize: "13px",
      });
      document.body.appendChild(clone);

      const canvas = await w.html2canvas(clone, {
        scale: 2,
        useCORS: true,
        logging: false,
        width: 794,
      });
      document.body.removeChild(clone);

      const imgData = canvas.toDataURL("image/png");
      const doc = new jsPDF({ unit: "mm", format: "a4" });
      const pdfWidth = 210;
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      doc.addImage(imgData, "PNG", 0, 0, pdfWidth, Math.min(pdfHeight, 297));
      doc.save(`NomadTransfer-Invoice-${invNumber}.pdf`);

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } finally {
      setIsGenerating(false);
    }
  }

  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js" strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js" strategy="beforeInteractive" />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --bg: #f4f4f4; --card: #fff; --border: #ddd;
          --text: #111; --muted: #666; --accent: #c8962a;
          --accent-light: #fdf6e8; --red: #c0392b; --blue: #2563eb;
        }
        .inv-page { font-family: 'DM Sans', sans-serif; background: var(--bg); color: var(--text); min-height: 100vh; }
        .page-header { background: #1c1a16; padding: 16px 32px; display: flex; align-items: center; justify-content: space-between; }
        .logo { display: flex; align-items: center; gap: 10px; color: #fff; font-size: 17px; font-weight: 600; }
        .logo-mark { width: 30px; height: 30px; background: var(--accent); border-radius: 7px; display: flex; align-items: center; justify-content: center; font-size: 15px; }
        .header-tag { font-size: 12px; color: rgba(255,255,255,0.4); font-family: 'DM Mono', monospace; letter-spacing: 1px; }
        .two-col { display: grid; grid-template-columns: 400px 1fr; gap: 24px; max-width: 1200px; margin: 32px auto; padding: 0 24px; align-items: start; }
        .form-card { background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 28px 24px; }
        .form-section-title { font-size: 11px; font-family: 'DM Mono', monospace; letter-spacing: 2px; text-transform: uppercase; color: var(--muted); margin: 0 0 14px; }
        .form-divider { height: 1px; background: var(--border); margin: 20px 0; }
        .frow { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .fgroup { margin-bottom: 12px; }
        .flabel { display: block; font-size: 11px; font-weight: 600; color: var(--muted); text-transform: uppercase; letter-spacing: 0.7px; margin-bottom: 5px; }
        .finput { width: 100%; background: #fafafa; border: 1px solid var(--border); border-radius: 8px; padding: 8px 12px; font-size: 13px; font-family: 'DM Sans', sans-serif; color: var(--text); outline: none; transition: border-color 0.15s; }
        .finput:focus { border-color: var(--accent); background: #fff; }
        .items-form { border: 1px solid var(--border); border-radius: 10px; overflow: hidden; margin-bottom: 12px; }
        .items-form-header { display: grid; grid-template-columns: 1fr 1fr 88px 36px 60px 24px; background: #f0ede8; padding: 6px 10px; font-size: 10px; font-weight: 600; color: var(--muted); text-transform: uppercase; letter-spacing: 0.6px; gap: 6px; }
        .item-row { display: grid; grid-template-columns: 1fr 1fr 88px 36px 60px 24px; padding: 6px 10px; border-top: 1px solid var(--border); align-items: center; gap: 6px; }
        .item-row input { background: transparent; border: none; outline: none; font-size: 12px; font-family: 'DM Sans', sans-serif; color: var(--text); padding: 3px 4px; width: 100%; border-radius: 4px; }
        .item-row input:focus { background: #fdf6e8; }
        .item-row input[type=number] { -moz-appearance: textfield; text-align: right; }
        .item-row input[type=number]::-webkit-outer-spin-button,
        .item-row input[type=number]::-webkit-inner-spin-button { -webkit-appearance: none; }
        .remove-btn { background: none; border: none; cursor: pointer; color: #ccc; font-size: 18px; padding: 0; line-height: 1; transition: color 0.15s; }
        .remove-btn:hover { color: var(--red); }
        .add-item-btn { width: 100%; background: #f7f5f0; border: 1px dashed #ccc; border-radius: 8px; padding: 8px; font-size: 13px; font-family: 'DM Sans', sans-serif; color: var(--muted); cursor: pointer; transition: background 0.15s, color 0.15s, border-color 0.15s; }
        .add-item-btn:hover { background: var(--accent-light); color: var(--accent); border-color: var(--accent); }
        .dl-btn { width: 100%; background: #1c1a16; color: #fff; border: none; border-radius: 10px; padding: 14px; font-size: 14px; font-weight: 600; font-family: 'DM Sans', sans-serif; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 16px; transition: opacity 0.15s; }
        .dl-btn:disabled { opacity: 0.55; cursor: not-allowed; }
        .dl-btn:not(:disabled):hover { opacity: 0.85; }
        .success-msg { background: #edf7f1; border: 1px solid #a8dab5; border-radius: 8px; padding: 10px 14px; font-size: 13px; color: #2a7a4b; font-weight: 500; margin-top: 10px; text-align: center; }
        .preview-wrap { position: sticky; top: 24px; }
        .preview-label { font-size: 11px; font-family: 'DM Mono', monospace; letter-spacing: 2px; text-transform: uppercase; color: var(--muted); margin-bottom: 12px; }
        /* === INVOICE DOCUMENT === */
        .inv-doc { background: #fff; box-shadow: 0 4px 24px rgba(0,0,0,0.12); color: #111; font-size: 12px; line-height: 1.5; }
        .inv-doc-inner { padding: 32px 36px; }
        .doc-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 28px; }
        .doc-brand { font-size: 20px; font-weight: 800; color: #111; letter-spacing: -0.5px; }
        .doc-brand-sub { font-size: 10px; color: var(--blue); margin-top: 2px; }
        .doc-invoice-title { font-size: 26px; font-weight: 800; color: #111; }
        .doc-meta { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-bottom: 24px; padding-bottom: 20px; border-bottom: 2px solid #111; }
        .doc-meta-label { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: var(--muted); margin-bottom: 6px; }
        .doc-meta-val { font-size: 11px; display: flex; flex-direction: column; gap: 1px; }
        .doc-meta-val strong { font-size: 12px; font-weight: 700; }
        .doc-meta-val .sub { color: var(--muted); font-size: 10px; }
        .doc-meta-val .lnk { color: var(--blue); font-size: 10px; }
        .doc-detail-row { display: flex; gap: 4px; font-size: 10px; margin-bottom: 2px; }
        .doc-detail-row .dk { color: var(--muted); min-width: 72px; }
        .doc-detail-row .dv { font-weight: 500; }
        .doc-table { width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 11px; }
        .doc-table thead tr { background: #222; color: #fff; }
        .doc-table thead th { padding: 8px 10px; text-align: left; font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; white-space: nowrap; }
        .doc-table thead th.tr { text-align: right; }
        .doc-table tbody tr { border-bottom: 1px solid #eee; }
        .doc-table tbody td { padding: 9px 10px; vertical-align: top; color: #111; word-break: break-word; }
        .doc-table tbody td.tr { text-align: right; white-space: nowrap; }
        .doc-table tbody td .lnk { color: var(--blue); }
        .doc-num-col { width: 24px; color: var(--muted); }
        .doc-totals { display: flex; flex-direction: column; align-items: flex-end; margin-bottom: 24px; }
        .doc-total-row { display: flex; font-size: 11px; min-width: 200px; padding: 2px 0; }
        .doc-total-row .tl { flex: 1; color: var(--muted); text-align: right; padding-right: 16px; }
        .doc-total-row .tv { min-width: 64px; text-align: right; }
        .doc-total-final { border-top: 2px solid #111; margin-top: 4px; padding-top: 6px; font-weight: 700; font-size: 13px; }
        .doc-total-final .tl, .doc-total-final .tv { color: #111; }
        .doc-payment { border: 1px solid #c8d6e8; border-radius: 6px; padding: 14px 16px; background: #f5f8fc; margin-bottom: 20px; }
        .doc-payment-title { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; color: #111; margin-bottom: 8px; }
        .doc-payment-row { font-size: 11px; color: #333; margin-bottom: 3px; }
        .doc-payment-row strong { color: #111; }
        .doc-footer { border-top: 1px solid #eee; padding-top: 14px; text-align: center; font-size: 10px; color: var(--muted); }
        @media (max-width: 900px) {
          .two-col { grid-template-columns: 1fr; padding: 0 16px; }
          .preview-wrap { position: static; }
          .frow { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="inv-page">
        <header className="page-header">
          <div className="logo">
            <div className="logo-mark">🏔</div>
            Nomad Transfer
          </div>
          <div className="header-tag">INVOICE GENERATOR</div>
        </header>

        <div className="two-col">

          {/* ── FORM ── */}
          <div className="form-card">

            <div className="form-section-title">Invoice info</div>
            <div className="frow">
              <div className="fgroup">
                <label className="flabel">Invoice #</label>
                <input className="finput" value={invNumber} onChange={e => setInvNumber(e.target.value)} />
              </div>
              <div className="fgroup">
                <label className="flabel">Date</label>
                <input className="finput" type="date" value={invDate} onChange={e => setInvDate(e.target.value)} />
              </div>
            </div>
            <div className="fgroup">
              <label className="flabel">Due Date</label>
              <input className="finput" type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
            </div>

            <div className="form-divider" />
            <div className="form-section-title">From (sender)</div>
            <div className="fgroup">
              <label className="flabel">Full name</label>
              <input className="finput" value={senderName} onChange={e => setSenderName(e.target.value)} />
            </div>
            <div className="fgroup">
              <label className="flabel">Email</label>
              <input className="finput" value={senderEmail} onChange={e => setSenderEmail(e.target.value)} />
            </div>

            <div className="form-divider" />
            <div className="form-section-title">To (client)</div>
            <div className="fgroup">
              <label className="flabel">Company / Name</label>
              <input className="finput" placeholder="Ocean Dunes Escapes FZE" value={clientName} onChange={e => setClientName(e.target.value)} />
            </div>
            <div className="fgroup">
              <label className="flabel">Address line 1</label>
              <input className="finput" placeholder="Business Center SPC" value={clientAddr1} onChange={e => setClientAddr1(e.target.value)} />
            </div>
            <div className="fgroup">
              <label className="flabel">Address line 2</label>
              <input className="finput" placeholder="Sharjah Freezone, UAE" value={clientAddr2} onChange={e => setClientAddr2(e.target.value)} />
            </div>

            <div className="form-divider" />
            <div className="form-section-title">Line items</div>
            <div className="items-form">
              <div className="items-form-header">
                <span>Description</span>
                <span>Route</span>
                <span>Date</span>
                <span style={{ textAlign: "right" }}>Qty</span>
                <span style={{ textAlign: "right" }}>Price</span>
                <span></span>
              </div>
              {items.map(it => (
                <div className="item-row" key={it.id}>
                  <input placeholder="Sedan Transfer" value={it.description} onChange={e => updateItem(it.id, "description", e.target.value)} />
                  <input placeholder="Manas – Bishkek" value={it.route} onChange={e => updateItem(it.id, "route", e.target.value)} />
                  <input type="date" value={it.date} onChange={e => updateItem(it.id, "date", e.target.value)} />
                  <input type="number" min="1" value={it.qty} onChange={e => updateItem(it.id, "qty", parseInt(e.target.value) || 1)} />
                  <input type="number" min="0" placeholder="0" value={it.unitPrice || ""} onChange={e => updateItem(it.id, "unitPrice", parseFloat(e.target.value) || 0)} />
                  <button className="remove-btn" onClick={() => removeItem(it.id)} title="Remove">×</button>
                </div>
              ))}
            </div>
            <button className="add-item-btn" onClick={addItem}>+ Add line item</button>

            <div className="form-divider" />
            <div className="form-section-title">Payment</div>
            <div className="fgroup">
              <label className="flabel">Account holder</label>
              <input className="finput" value={accountHolder} onChange={e => setAccountHolder(e.target.value)} />
            </div>
            <div className="fgroup">
              <label className="flabel">Card / Account number</label>
              <input className="finput" placeholder="4169 XXXX XXXX XXXX" value={cardAccount} onChange={e => setCardAccount(e.target.value)} />
            </div>

            <button className="dl-btn" onClick={downloadPDF} disabled={isGenerating}>
              {isGenerating ? "⏳  Generating…" : "↓  Download Invoice PDF"}
            </button>
            {showSuccess && <div className="success-msg">✓ Invoice downloaded!</div>}
          </div>

          {/* ── PREVIEW ── */}
          <div className="preview-wrap">
            <div className="preview-label">Live preview</div>
            <div className="inv-doc" ref={previewRef}>
              <div className="inv-doc-inner">

                <div className="doc-header">
                  <div>
                    <div className="doc-brand">NOMAD TRANSFER</div>
                    <div className="doc-brand-sub">Premium Transfer Services | Kyrgyzstan</div>
                  </div>
                  <div className="doc-invoice-title">INVOICE</div>
                </div>

                <div className="doc-meta">
                  <div>
                    <div className="doc-meta-label">From</div>
                    <div className="doc-meta-val">
                      <strong>{senderName || "—"}</strong>
                      <span className="sub">Nomad Transfer</span>
                      <span className="lnk">{senderEmail}</span>
                      <span className="sub">Bishkek, Kyrgyzstan</span>
                    </div>
                  </div>
                  <div>
                    <div className="doc-meta-label">To</div>
                    <div className="doc-meta-val">
                      <strong>{clientName || "—"}</strong>
                      {clientAddr1 && <span className="sub">{clientAddr1}</span>}
                      {clientAddr2 && <span className="sub">{clientAddr2}</span>}
                    </div>
                  </div>
                  <div>
                    <div className="doc-meta-label">Invoice Details</div>
                    <div className="doc-meta-val">
                      <div className="doc-detail-row"><span className="dk">Invoice No:</span><span className="dv">{invNumber}</span></div>
                      <div className="doc-detail-row"><span className="dk">Date:</span><span className="dv">{fmtDate(invDate)}</span></div>
                      <div className="doc-detail-row"><span className="dk">Due Date:</span><span className="dv">{fmtDate(dueDate)}</span></div>
                      <div className="doc-detail-row"><span className="dk">Currency:</span><span className="dv">USD</span></div>
                    </div>
                  </div>
                </div>

                <table className="doc-table">
                  <thead>
                    <tr>
                      <th className="doc-num-col">#</th>
                      <th>Description</th>
                      <th>Route</th>
                      <th>Date</th>
                      <th className="tr">Qty</th>
                      <th className="tr">Unit Price</th>
                      <th className="tr">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((it, i) => (
                      <tr key={it.id}>
                        <td className="doc-num-col">{i + 1}</td>
                        <td><span className="lnk">{it.description || "—"}</span></td>
                        <td><span className="lnk">{it.route || "—"}</span></td>
                        <td style={{ whiteSpace: "nowrap" }}>{fmtDate(it.date)}</td>
                        <td className="tr">{it.qty}</td>
                        <td className="tr">{fmt(it.unitPrice)}</td>
                        <td className="tr">{fmt(it.qty * it.unitPrice)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="doc-totals">
                  <div className="doc-total-row">
                    <span className="tl">Subtotal:</span>
                    <span className="tv">{fmt(subtotal)}</span>
                  </div>
                  <div className="doc-total-row">
                    <span className="tl">Tax / VAT:</span>
                    <span className="tv">-</span>
                  </div>
                  <div className="doc-total-row doc-total-final">
                    <span className="tl">TOTAL DUE:</span>
                    <span className="tv">{fmt(subtotal)}</span>
                  </div>
                </div>

                <div className="doc-payment">
                  <div className="doc-payment-title">Payment Instructions</div>
                  <div className="doc-payment-row" style={{ marginBottom: "6px" }}>
                    Please transfer the total amount of <strong>{fmt(subtotal)} USD</strong> via <span style={{ color: "var(--blue)" }}>Remitly</span> to:
                  </div>
                  <div className="doc-payment-row"><strong>Account Holder:&nbsp;&nbsp;{accountHolder || "—"}</strong></div>
                  <div className="doc-payment-row">Card / Account:&nbsp;&nbsp;{cardAccount || "—"}</div>
                  <div className="doc-payment-row">Reference:&nbsp;&nbsp;{invNumber}{clientName ? ` / ${clientName}` : ""}</div>
                </div>

                <div className="doc-footer">
                  Thank you for choosing Nomad Transfer | {senderEmail}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
