import * as React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Icon } from '@redocly/theme/markdoc/components/Icon/Icon';
import { Link } from '@redocly/theme/components/Link/Link';

export const frontmatter = {
  seo: {
    title: 'Marketplace API — Developer Documentation',
    description: 'Integrate with the Online Marketplace API. Manage inventory, listings, orders, and fulfillment.',
  },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const LISTINGS = [
  { id: 'prod_01J2', name: 'Vintage Camera', price: '$299.00', stock: 5, status: 'Active' },
  { id: 'prod_01J3', name: 'Mechanical Keyboard', price: '$149.00', stock: 3, status: 'Active' },
  { id: 'prod_01J4', name: 'Leather Satchel', price: '$89.00', stock: 0, status: 'Draft' },
];

const CODE_SAMPLE = `curl -X GET https://api.marketplace.example.com/v1/products \\
  -H "Authorization: Bearer YOUR_TOKEN"`;

const RESPONSE = `{
  "id": "prod_01J2",
  "name": "Vintage Camera",
  "price": 399.00,
  "currency": "USD",
  "stock": 5
}`;

const FEATURES = [
  { title: 'Manage Inventory', desc: 'Sync your catalog and manage SKU stock across multiple channels with real-time updates.' },
  { title: 'Order Fulfillment', desc: 'Automate tracking and fulfillment processing. Keep buyers informed with automated Webhooks.' },
  { title: 'Payout Control', desc: 'Reconcile balances and manage payouts with programmatic reporting and finance tools.' },
];

const ENDPOINTS = [
  {
    icon: 'cube',
    title: 'Products API',
    desc: 'Manage your product listings and inventory across your entire catalog.',
    method: 'GET',
    ep: '/v1/products',
    link: '/docs/api/products',
  },
  {
    icon: 'clipboard-document-list',
    title: 'Orders API',
    desc: 'Retrieve incoming orders and trigger order fulfillment sequences.',
    method: 'POST',
    ep: '/v1/orders/{id}/fulfill',
    link: '/docs/api/orders',
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <Wrapper>
      <Hero>
        <HeroInner>
          <HeroLeft>
            <HeroPill>API Version 1.0</HeroPill>
            <HeroTitle>
              The developer-first<br />
              <AccentSpan>marketplace API</AccentSpan>
            </HeroTitle>
            <HeroSub>
              A powerful platform designed for seamless integration with existing inventory systems. Manage listings, automate fulfillment, and scale your sales.
            </HeroSub>
            <HeroBtns>
              <PrimaryBtn as={Link} to="/docs/api/getting-started">Get API Keys →</PrimaryBtn>
              <OutlineBtn as={Link} to="/docs/ui/overview">Explore Dashboard</OutlineBtn>
            </HeroBtns>
          </HeroLeft>

          {/* Visual Signature */}
          <VisualWrap>
            <DashboardCard>
              <DashHeader>
                <DashTitle>Active Listings</DashTitle>
                <DashBadge>Seller Dashboard</DashBadge>
              </DashHeader>
              <DashTable>
                <DashRow isHeader>
                  <div>Item</div>
                  <div>Price</div>
                  <div>Stock</div>
                  <div>Status</div>
                </DashRow>
                {LISTINGS.map(l => (
                  <DashRow key={l.id}>
                    <div>
                      <DashName>{l.name}</DashName>
                      <DashId>{l.id}</DashId>
                    </div>
                    <DashPrice>{l.price}</DashPrice>
                    <DashStock $low={l.stock === 0}>{l.stock}</DashStock>
                    <div><StatusBadge $active={l.status === 'Active'}>{l.status}</StatusBadge></div>
                  </DashRow>
                ))}
              </DashTable>
            </DashboardCard>
            
            <TerminalCard>
              <TerminalHeader>
                <Dots>
                  <Dot style={{ background: '#ff5f57' }} />
                  <Dot style={{ background: '#ffbd2e' }} />
                  <Dot style={{ background: '#28c840' }} />
                </Dots>
                <TermTitle>GET /v1/products/prod_01J2</TermTitle>
              </TerminalHeader>
              <TerminalBody>
                {RESPONSE}
              </TerminalBody>
            </TerminalCard>
          </VisualWrap>
        </HeroInner>
      </Hero>

      <FeaturesSection>
        <Container>
          <SectionLabel>Core Capabilities</SectionLabel>
          <SectionTitle>Everthing you need to sell.</SectionTitle>
          <FeatureGrid>
            {FEATURES.map(f => (
              <FeatureCard key={f.title}>
                <FeatureTitle>{f.title}</FeatureTitle>
                <FeatureDesc>{f.desc}</FeatureDesc>
              </FeatureCard>
            ))}
          </FeatureGrid>
        </Container>
      </FeaturesSection>

      <IntegrationSection>
        <Container>
          <IntGrid>
            <div>
              <SectionLabel>Integration</SectionLabel>
              <SectionTitle>Connect in minutes.</SectionTitle>
              <SectionSub>
                Use simple REST interfaces and standard Bearer token authentication to instantly push products and fetch orders.
              </SectionSub>
              <EndpointsList>
                {ENDPOINTS.map(ep => (
                  <EpCard key={ep.title} as={Link} to={ep.link}>
                    <EpHeader>
                      <EpIcon>
                        <Icon name={ep.icon} size="1rem" color="currentColor" />
                      </EpIcon>
                      <EpTitle>{ep.title}</EpTitle>
                    </EpHeader>
                    <EpDesc>{ep.desc}</EpDesc>
                    <EpRoute>
                      <Method $method={ep.method}>{ep.method}</Method>
                      <span>{ep.ep}</span>
                    </EpRoute>
                  </EpCard>
                ))}
              </EndpointsList>
            </div>
            
            <CodeBox>
              <CodeBoxHeader>
                <span>Fetch products</span>
                <CodeBadge>cURL</CodeBadge>
              </CodeBoxHeader>
              <CodePre>{CODE_SAMPLE}</CodePre>
            </CodeBox>
          </IntGrid>
        </Container>
      </IntegrationSection>

      <CtaSection>
        <CtaTitle>Ready to start selling?</CtaTitle>
        <CtaSub>Access complete UI guides for buyers and sellers, or dive right into the developer documentation.</CtaSub>
        <CtaBtns>
          <CtaPrimary as={Link} to="/docs/api/getting-started">API Documentation</CtaPrimary>
          <CtaOutline as={Link} to="/docs/ui/seller-dashbord">Seller Guide</CtaOutline>
        </CtaBtns>
      </CtaSection>
    </Wrapper>
  );
}

// ─── Styled Components ───────────────────────────────────────────────────────

const Wrapper = styled.div`
  background: var(--landing-bg);
  color: var(--landing-text);
  min-height: 100vh;
  font-family: 'Inter', system-ui, sans-serif;
`;

const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 4rem 2.5rem;
`;

const Hero = styled.div`
  background: radial-gradient(ellipse 70% 80% at 20% -20%, color-mix(in srgb, var(--landing-accent) 15%, transparent) 0%, transparent 100%), var(--landing-bg);
  border-bottom: 1px solid var(--landing-border);
  overflow: hidden;
`;

const HeroInner = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 6rem 2.5rem 5rem;
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 4rem 1.5rem 3rem;
  }
`;

const HeroLeft = styled.div``;

const HeroPill = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 500;
  color: var(--landing-accent);
  background: color-mix(in srgb, var(--landing-accent) 10%, transparent);
  border: 1px solid color-mix(in srgb, var(--landing-accent) 20%, transparent);
  margin-bottom: 1.5rem;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--landing-text);
  margin-bottom: 1.5rem;
`;

const AccentSpan = styled.span`
  color: var(--landing-accent);
`;

const HeroSub = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: var(--landing-text-muted);
  max-width: 480px;
  margin-bottom: 2.5rem;
`;

const HeroBtns = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

const PrimaryBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: var(--landing-accent);
  color: #ffffff;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    background: var(--color-primary-hover);
    transform: translateY(-2px);
  }
`;

const OutlineBtn = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  background: transparent;
  color: var(--landing-text);
  border: 1px solid var(--landing-border);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    border-color: var(--landing-text-muted);
  }
`;

const VisualWrap = styled.div`
  position: relative;
  width: 100%;
  height: 400px;

  @media (max-width: 900px) {
    height: 450px;
  }
`;

const DashboardCard = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 15%;
  background: var(--landing-surface);
  border: 1px solid var(--landing-border);
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  overflow: hidden;
  z-index: 1;
`;

const DashHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid var(--landing-border);
  background: color-mix(in srgb, var(--landing-text-muted) 3%, var(--landing-surface));
`;

const DashTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: var(--landing-text);
`;

const DashBadge = styled.div`
  font-size: 11px;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 4px;
  background: color-mix(in srgb, var(--landing-accent) 10%, transparent);
  color: var(--landing-accent);
`;

const DashTable = styled.div`
  display: flex;
  flex-direction: column;
`;

const DashRow = styled.div<{ isHeader?: boolean }>`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  padding: 12px 20px;
  border-bottom: 1px solid var(--landing-border);
  align-items: center;

  ${({ isHeader }) => isHeader && css`
    font-size: 12px;
    font-weight: 600;
    color: var(--landing-text-muted);
    background: color-mix(in srgb, var(--landing-text-muted) 1%, var(--landing-surface));
  `}
`;

const DashName = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: var(--landing-text);
`;

const DashId = styled.div`
  font-size: 11px;
  color: var(--landing-text-muted);
  font-family: 'DM Mono', monospace;
  margin-top: 2px;
`;

const DashPrice = styled.div`
  font-size: 13px;
  color: var(--landing-text);
`;

const DashStock = styled.div<{ $low?: boolean }>`
  font-size: 13px;
  color: ${({ $low }) => $low ? '#ef4444' : 'var(--landing-text)'};
`;

const StatusBadge = styled.span<{ $active?: boolean }>`
  font-size: 11px;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 100px;
  
  ${({ $active }) => $active ? css`
    background: color-mix(in srgb, #22c55e 15%, transparent);
    color: #16a34a;
  ` : css`
    background: color-mix(in srgb, var(--landing-text-muted) 15%, transparent);
    color: var(--landing-text-muted);
  `}
`;

const TerminalCard = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 30%;
  background: #0f172a;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  overflow: hidden;
  z-index: 2;
`;

const TerminalHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background: #1e293b;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

const Dots = styled.div`
  display: flex;
  gap: 6px;
  margin-right: 16px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;

const TermTitle = styled.div`
  font-family: 'DM Mono', monospace;
  font-size: 12px;
  color: #94a3b8;
`;

const TerminalBody = styled.pre`
  padding: 20px;
  margin: 0;
  font-family: 'DM Mono', monospace;
  font-size: 13px;
  line-height: 1.5;
  color: #38bdf8;
  white-space: pre-wrap;
`;

// Features
const FeaturesSection = styled.div`
  background: var(--landing-surface);
  border-bottom: 1px solid var(--landing-border);
`;

const SectionLabel = styled.div`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--landing-accent);
  margin-bottom: 8px;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: var(--landing-text);
  margin-bottom: 16px;
`;

const SectionSub = styled.p`
  font-size: 16px;
  color: var(--landing-text-muted);
  max-width: 500px;
  line-height: 1.6;
  margin-bottom: 32px;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  padding: 24px;
  background: color-mix(in srgb, var(--landing-bg) 50%, var(--landing-surface));
  border: 1px solid var(--landing-border);
  border-radius: 12px;
`;

const FeatureTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: var(--landing-text);
  margin-bottom: 12px;
`;

const FeatureDesc = styled.p`
  font-size: 14px;
  color: var(--landing-text-muted);
  line-height: 1.6;
`;

// Integration
const IntegrationSection = styled.div`
  background: var(--landing-bg);
`;

const IntGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const EndpointsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const EpCard = styled.a`
  display: block;
  padding: 20px;
  background: var(--landing-surface);
  border: 1px solid var(--landing-border);
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    border-color: var(--landing-accent);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px color-mix(in srgb, var(--landing-accent) 10%, transparent);
  }
`;

const EpHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`;

const EpIcon = styled.div`
  color: var(--landing-accent);
`;

const EpTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: var(--landing-text);
`;

const EpDesc = styled.div`
  font-size: 14px;
  color: var(--landing-text-muted);
  margin-bottom: 16px;
  line-height: 1.5;
`;

const EpRoute = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: color-mix(in srgb, var(--landing-text-muted) 5%, transparent);
  border: 1px solid var(--landing-border);
  border-radius: 6px;
  font-family: 'DM Mono', monospace;
  font-size: 12px;
  color: var(--landing-text);
`;

const Method = styled.span<{ $method: string }>`
  font-weight: 700;
  color: ${({ $method }) => $method === 'GET' ? '#10b981' : '#8b5cf6'};
`;

const CodeBox = styled.div`
  background: #0f172a;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
`;

const CodeBoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background: #1e293b;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 13px;
  color: #cbd5e1;
`;

const CodeBadge = styled.div`
  font-size: 11px;
  font-weight: 600;
  padding: 4px 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
`;

const CodePre = styled.pre`
  padding: 24px;
  margin: 0;
  font-family: 'DM Mono', monospace;
  font-size: 13px;
  color: #f8fafc;
  line-height: 1.6;
  white-space: pre-wrap;
  overflow-x: auto;
`;

// CTA
const CtaSection = styled.div`
  padding: 80px 40px;
  text-align: center;
  background: linear-gradient(135deg, var(--landing-accent), var(--landing-accent-secondary));
  color: #ffffff;
`;

const CtaTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const CtaSub = styled.p`
  font-size: 16px;
  opacity: 0.9;
  max-width: 500px;
  margin: 0 auto 32px;
  line-height: 1.6;
`;

const CtaBtns = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
`;

const CtaPrimary = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  background: #ffffff;
  color: var(--landing-accent);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
`;

const CtaOutline = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;
