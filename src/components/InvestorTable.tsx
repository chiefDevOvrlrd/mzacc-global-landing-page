import React from "react";
import "../styles/components/_investor-table.scss";

const investors = [
    {
        name: "Mavizion",
        domain: "Academy, Talent, Training",
        USD: "$1.5K – $1M",
        GBP: "£1.2K – £780K",
        EUR: "€1.3K – €900K",
        NGN: "₦1.5M – ₦1.3B",
    },
    {
        name: "Zentrovia",
        domain: "Software, Engineering, OilTech",
        USD: "$20K – $10M",
        GBP: "£15.5K – £7.8M",
        EUR: "€18K – €9M",
        NGN: "₦26M – ₦13B",
    },
    {
        name: "Trusteon",
        domain: "Cybersecurity, Identity, Protection",
        USD: "$20K – $5M",
        GBP: "£15.5K – £3.9M",
        EUR: "€18K – €4.5M",
        NGN: "₦26M – ₦6.5B",
    },
    {
        name: "Biznova",
        domain: "Business Strategy, Marketing",
        USD: "$1.5K – $2M",
        GBP: "£1.2K – £1.5M",
        EUR: "€1.3K – €1.8M",
        NGN: "₦1.5M – ₦2.6B",
    },
    {
        name: "Formora",
        domain: "UI/UX, Branding, Animation",
        USD: "$1.5K – $1M",
        GBP: "£1.2K – £780K",
        EUR: "€1.3K – €900K",
        NGN: "₦1.5M – ₦1.3B",
    },
    {
        name: "Ainova",
        domain: "AI, Automation, Smart Infrastructure",
        USD: "$20K – $20M",
        GBP: "£15.5K – £15.5M",
        EUR: "€18K – €18M",
        NGN: "₦26M – ₦26B",
    },
    {
        name: "Linkspire",
        domain: "Affiliate & Networking",
        USD: "$1.5K – $2M",
        GBP: "£1.2K – £1.5M",
        EUR: "€1.3K – €1.8M",
        NGN: "₦1.5M – ₦2.6B",
    },
    {
        name: "Finovia",
        domain: "FinTech, Crypto, AI Traders",
        USD: "$20K – $50M",
        GBP: "£15.5K – £38M",
        EUR: "€18K – €45M",
        NGN: "₦26M – ₦65B",
    },
    {
        name: "Greenova",
        domain: "Smart Real Estate & ClimateTech",
        USD: "$50K – $100M",
        GBP: "£39K – £78M",
        EUR: "€45K – €90M",
        NGN: "₦65M – ₦130B",
    },
    {
        name: "Enernova",
        domain: "OilTech, Energy Infrastructure",
        USD: "$100K – $500M",
        GBP: "£78K – £390M",
        EUR: "€90K – €450M",
        NGN: "₦130M – ₦650B",
    },
];

const InvestorTiers: React.FC = () => {
    return (
        <div className="investor-container">
        <h2>📊 Investor Tiers by Subcompany</h2>
        <div className="grid">
            <div className="header">
            <div>Subcompany</div>
            <div>Domain</div>
            <div>USD</div>
            <div>GBP</div>
            <div>EUR</div>
            <div>NGN</div>
            </div>
            {investors.map((inv) => (
            <div className="row" key={inv.name}>
                <div data-label="Subcompany">{inv.name}</div>
                <div data-label="Domain">{inv.domain}</div>
                <div data-label="USD">{inv.USD}</div>
                <div data-label="GBP">{inv.GBP}</div>
                <div data-label="EUR">{inv.EUR}</div>
                <div data-label="NGN">{inv.NGN}</div>
            </div>
            ))}
        </div>
        </div>
    );
};

export default InvestorTiers;
