import React from "react";
import "../styles/components/_pricing-table.scss";

const tiers = [
  {
    tier: "Starter",
    who: "Individuals, startups, small projects",
    USD: "$200+",
    GBP: "£150+",
    EUR: "€180+",
    NGN: "₦200K+",
  },
  {
    tier: "Standard",
    who: "Small businesses, local orgs",
    USD: "$2,500+",
    GBP: "£1,950+",
    EUR: "€2,300+",
    NGN: "₦3.2M+",
  },
  {
    tier: "Professional",
    who: "Growing companies, scale-ups",
    USD: "$10K+",
    GBP: "£7.8K+",
    EUR: "€9K+",
    NGN: "₦13M+",
  },
  {
    tier: "Advanced",
    who: "Corporates, multi-phase projects",
    USD: "$100K+",
    GBP: "£78K+",
    EUR: "€90K+",
    NGN: "₦130M+",
  },
  {
    tier: "Enterprise",
    who: "Large, long-term, multi-country rollouts",
    USD: "$500K+",
    GBP: "£390K+",
    EUR: "€450K+",
    NGN: "₦650M+",
  },
];

const subcompanies = [
  {
    name: "Mavizion",
    services: "Training, Certification, Academy",
    USD: "$200 – $50K",
    GBP: "£150 – £39K",
    EUR: "€180 – €45K",
    NGN: "₦200K – ₦65M",
  },
  {
    name: "Zentrovia",
    services: "Software & App Dev, OilTech Platforms",
    USD: "$10K – $1M+",
    GBP: "£7.8K – £780K",
    EUR: "€9K – €900K",
    NGN: "₦13M – ₦1.3B+",
  },
  {
    name: "Trusteon",
    services: "Cybersecurity, Risk Protection",
    USD: "$5K – $500K",
    GBP: "£3.9K – £390K",
    EUR: "€4.5K – €450K",
    NGN: "₦6.5M – ₦650M",
  },
  {
    name: "Biznova",
    services: "Marketing, PR, Strategy",
    USD: "$2K – $250K",
    GBP: "£1.5K – £195K",
    EUR: "€1.8K – €225K",
    NGN: "₦2.6M – ₦325M",
  },
  {
    name: "Formora",
    services: "UI/UX, Branding, Motion Graphics",
    USD: "$500 – $100K",
    GBP: "£390 – £78K",
    EUR: "€450 – €90K",
    NGN: "₦650K – ₦130M",
  },
  {
    name: "Ainova",
    services: "AI Systems, Automation, Smart Hardware",
    USD: "$10K – $5M",
    GBP: "£7.8K – £3.9M",
    EUR: "€9K – €4.5M",
    NGN: "₦13M – ₦6.5B",
  },
  {
    name: "Linkspire",
    services: "Affiliate Systems, Networks",
    USD: "$1K – $100K",
    GBP: "£780 – £78K",
    EUR: "€900 – €90K",
    NGN: "₦1.3M – ₦130M",
  },
  {
    name: "Finovia",
    services: "Wallets, Forex Tools, Crypto Systems",
    USD: "$2K – $1M+",
    GBP: "£1.5K – £780K",
    EUR: "€1.8K – €900K",
    NGN: "₦2.6M – ₦1.3B+",
  },
  {
    name: "Greenova",
    services: "Smart Real Estate, ClimateTech",
    USD: "$20K – $10M+",
    GBP: "£15.5K – £7.8M",
    EUR: "€18K – €9M",
    NGN: "₦26M – ₦13B+",
  },
  {
    name: "Enernova",
    services: "OilTech Hardware & Energy",
    USD: "$50K – $50M+",
    GBP: "£39K – £38M",
    EUR: "€45K – €45M",
    NGN: "₦65M – ₦65B+",
  },
];

const PricingTable: React.FC = () => {
return (
    <div className="pricing-container">
        <section className="tier-pricing">
            <div className="scroll-wrapper">
              <h2>Service Pricing Tiers (All Currencies)</h2>
              <div className="grid">
                <div className="header">
                    <div>Tier</div>
                    <div>Who it’s for</div>
                    <div>USD</div>
                    <div>GBP</div>
                    <div>EUR</div>
                    <div>NGN</div>
                </div>
                {tiers.map((tier) => (
                    <div className="row" key={tier.tier}>
                    <div>{tier.tier}</div>
                    <div>{tier.who}</div>
                    <div>{tier.USD}</div>
                    <div>{tier.GBP}</div>
                    <div>{tier.EUR}</div>
                    <div>{tier.NGN}</div>
                    </div>
                ))}
              </div>
            </div>
        </section>

        <section className="subcompany-services">
          <div className="scroll-wrapper">
            <h2>Services by Subcompany</h2>
            <div className="grid">
              <div className="header">
                  <div>Subcompany</div>
                  <div>Example Services</div>
                  <div>USD</div>
                  <div>GBP</div>
                  <div>EUR</div>
                  <div>NGN</div>
              </div>
              {subcompanies.map((company) => (
                  <div className="row" key={company.name}>
                  <div>{company.name}</div>
                  <div>{company.services}</div>
                  <div>{company.USD}</div>
                  <div>{company.GBP}</div>
                  <div>{company.EUR}</div>
                  <div>{company.NGN}</div>
                  </div>
              ))}
            </div>
          </div>
        </section>
    </div>
  );
};

export default PricingTable;
