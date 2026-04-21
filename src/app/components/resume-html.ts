/**
 * Christopher Kenreigh Resume HTML
 * This file contains the HTML resume that opens in a new tab
 */

export const resumeHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Christopher Kenreigh – VP, UX Creative Director</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=DM+Serif+Display&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --blue: #2563c7;
      --dark: #111111;
      --mid: #444444;
      --light: #666666;
      --rule: #dddddd;
      --bg: #ffffff;
      --sidebar-bg: #f7f8fa;
    }

    body {
      font-family: 'DM Sans', sans-serif;
      font-size: 10.5pt;
      color: var(--dark);
      background: #e8e8e8;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: 32px 16px;
      min-height: 100vh;
    }

    .page {
      background: var(--bg);
      width: 850px;
      max-width: 100%;
      box-shadow: 0 4px 40px rgba(0,0,0,0.18);
      display: grid;
      grid-template-rows: auto 1fr;
    }

    /* ── HEADER ── */
    header {
      padding: 28px 36px 18px;
      border-bottom: 2px solid var(--rule);
    }
    header h1 {
      font-family: 'DM Serif Display', serif;
      font-size: clamp(20pt, 5vw, 30pt);
      font-weight: 400;
      color: var(--dark);
      letter-spacing: -0.5px;
      line-height: 1.1;
    }
    header .title-line {
      font-size: clamp(9pt, 2.5vw, 11pt);
      font-weight: 700;
      color: var(--blue);
      margin: 3px 0 8px;
      letter-spacing: 0.2px;
    }
    header .contact {
      font-size: 9.5pt;
      color: var(--mid);
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      align-items: center;
    }
    header .contact a {
      color: var(--blue);
      text-decoration: none;
      font-weight: 500;
    }
    header .contact span { color: var(--rule); }

    /* ── BODY LAYOUT ── */
    .body {
      display: grid;
      grid-template-columns: 1fr 240px;
    }

    /* ── LEFT (Experience) ── */
    .main {
      padding: 24px 36px 32px;
      border-right: 1px solid var(--rule);
    }

    .section-title {
      font-family: 'DM Serif Display', serif;
      font-size: 14pt;
      font-weight: 400;
      color: var(--dark);
      border-bottom: 1.5px solid var(--dark);
      padding-bottom: 4px;
      margin-bottom: 14px;
    }

    .job { margin-bottom: 20px; }

    .job-title {
      font-size: 10.5pt;
      font-weight: 700;
      color: var(--dark);
    }
    .job-company {
      font-size: 10pt;
      font-weight: 500;
      color: var(--blue);
      text-decoration: none;
    }
    .job-company:hover { text-decoration: underline; }

    .job-meta {
      font-size: 8.5pt;
      color: var(--light);
      margin: 2px 0 6px;
      display: flex;
      align-items: center;
      gap: 6px;
      flex-wrap: wrap;
    }
    .job-meta .material-symbols-outlined {
      color: #00A000;
      font-size: 16px;
      vertical-align: middle;
    }

    .job ul {
      list-style: disc;
      padding-left: 16px;
    }
    .job ul li {
      font-size: 9.5pt;
      color: var(--mid);
      line-height: 1.5;
      margin-bottom: 3px;
    }

    /* ── RIGHT (Sidebar) ── */
    .sidebar {
      background: var(--sidebar-bg);
      padding: 24px 22px 32px;
    }

    .sidebar-section { margin-bottom: 22px; }

    .sidebar .section-title {
      font-size: 12pt;
      border-bottom-color: var(--mid);
    }

    .summary-quote {
      font-size: 9.5pt;
      font-style: italic;
      color: var(--mid);
      line-height: 1.6;
      margin-bottom: 10px;
    }

    .summary-bullets {
      list-style: disc;
      padding-left: 14px;
    }
    .summary-bullets li {
      font-size: 8.8pt;
      color: var(--mid);
      line-height: 1.55;
      margin-bottom: 3px;
    }

    .tag-list {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      margin-top: 6px;
    }
    .tag {
      font-size: 8pt;
      font-weight: 500;
      color: var(--blue);
      background: rgba(37,99,199,0.08);
      border-radius: 3px;
      padding: 2px 7px;
    }

    .dot-list {
      list-style: disc;
      padding-left: 14px;
    }
    .dot-list li {
      font-size: 9pt;
      color: var(--mid);
      line-height: 1.6;
      margin-bottom: 2px;
    }

    /* Education */
    .edu-degree {
      font-size: 9.5pt;
      font-weight: 700;
      color: var(--dark);
    }
    .edu-school {
      font-size: 9pt;
      color: var(--blue);
      font-weight: 500;
    }
    .edu-meta {
      font-size: 8.5pt;
      color: var(--light);
      margin-top: 4px;
      display: flex;
      align-items: center;
      gap: 5px;
      flex-wrap: wrap;
    }
    .edu-meta .material-symbols-outlined {
      color: #00A000;
      font-size: 15px;
      vertical-align: middle;
    }

    /* ── MOBILE RESPONSIVE ── */
    @media (max-width: 680px) {
      body {
        padding: 0;
        background: var(--bg);
        align-items: stretch;
      }
      .page {
        width: 100%;
        box-shadow: none;
        border-radius: 0;
      }
      header { padding: 20px 18px 14px; }
      header h1 { font-size: 22pt; }
      header .title-line { font-size: 9pt; }
      header .contact { font-size: 9pt; gap: 6px; row-gap: 4px; }
      .body {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
      }
      .main {
        padding: 18px 18px 24px;
        border-right: none;
        border-bottom: 1px solid var(--rule);
        order: 2;
      }
      .sidebar {
        padding: 18px 18px 20px;
        order: 1;
        border-bottom: 2px solid var(--rule);
      }
      .section-title { font-size: 13pt; }
      .sidebar .section-title { font-size: 11pt; }
      .job ul li { font-size: 9pt; }
      .job-meta { font-size: 8pt; gap: 4px; }
      .summary-quote { font-size: 9pt; }
      .tag { font-size: 7.5pt; }
    }

    @media (min-width: 681px) and (max-width: 900px) {
      body { padding: 16px 8px; }
      .page { width: 100%; }
      header { padding: 22px 24px 14px; }
      .main { padding: 20px 24px 28px; }
      .sidebar { padding: 20px 16px 28px; }
      .body { grid-template-columns: 1fr 200px; }
    }

    @media print {
      body { background: white; padding: 0; }
      .page { box-shadow: none; width: 100%; }
    }
  </style>
</head>
<body>
<div class="page">

  <!-- HEADER -->
  <header>
    <h1>Christopher Kenreigh</h1>
    <div class="title-line">VP, UX Creative Director | Brand Strategy &amp; Visual Design | Enterprise Design Systems | Motion Design | ADA-Compliant Digital Experiences</div>
    <div class="contact">
      <span style="color: #212121; font-weight:700">480-206-2145</span>
      <span>|</span>
      <a href="mailto:c.kenreigh@gmail.com" style="font-weight:800;">c.kenreigh@gmail.com</a>
      <span>|</span>
      <a href="https://www.linkedin.com/in/kenreigh/" target="_blank">LinkedIn</a>
      <span>|</span>
      <a href="https://www.uxapex.com/portfolioa27" target="_blank">Portfolio</a>
    </div>
  </header>

  <!-- BODY -->
  <div class="body">

    <!-- MAIN EXPERIENCE -->
    <main class="main">
      <h2 class="section-title">Experience</h2>

      <div class="job">
        <div class="job-title">VP, UX Creative Director &amp; Design Systems Lead (Principal)</div>
        <a class="job-company" href="https://www.plexusworldwide.com" target="_blank">Plexus Worldwide</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          05/2024 – Present
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Office
        </div>
        <ul>
          <li>Directed visual and brand strategy across consumer eCommerce digital channels — defined typography, color systems, iconography, and motion design standards unifying brand identity across web, iOS, and Android</li>
          <li>Architected enterprise Figma-native Digital Design System consolidating 6 tools into a governed component library — achieved 60–90% org adoption, $370K annual labor savings, 3× delivery velocity improvement</li>
          <li>People-managed 5 UX/content designers; mentored on visual craft and brand standards; established quality review cycles enforcing design system adherence across agile teams</li>
          <li>Championed AI innovation — shipped LLM-powered persona agent platform reversing –17% operating margin to +2% in four months; increased sprint velocity 35% through AI-driven creative workflows</li>
          <li>Presented brand and creative strategy to C-suite; persuaded adoption of design system governance and UX as enterprise strategic function</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">Senior UX Creative Director — Regulated Digital Experiences</div>
        <a class="job-company" href="https://www.freeportmcmoran.com" target="_blank">Freeport-McMoRan</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          08/2022 – 10/2023
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Hybrid
        </div>
        <ul>
          <li>Directed visual design and UX creative strategy for regulated enterprise digital tools — brand-consistent responsive web and mobile interfaces improving operational efficiency 30%</li>
          <li>Built and governed scalable MUI React design system across web, iOS, and Android — component documentation, visual brand standards, and quality review guidelines enabling engineering autonomy</li>
          <li>Facilitated 10+ design thinking workshops translating compliance requirements into user-centered, visually coherent product requirements</li>
          <li>Presented UX creative roadmaps to C-suite; secured approval for 5 major product releases through outcome-driven visual design rationale</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">Senior UX Designer — Consumer Brand &amp; Digital Experience</div>
        <a class="job-company" href="https://www.opentechalliance.com" target="_blank">OpenTech Alliance</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          05/2021 – 08/2022
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Hybrid
        </div>
        <ul>
          <li>Directed brand identity and visual design for industry-wide white-label software — defined consumer-facing UI patterns, iconography, and interaction standards across a broad merchant network</li>
          <li>Designed ADA-compliant inclusive user data capture flows meeting regulatory requirements — 100% compliance while maintaining brand-consistent consumer-grade visual quality</li>
          <li>Redesigned Point of Sale kiosk UI with visual design best practices and motion-informed interaction patterns — boosting task completion 75%</li>
          <li>Evangelized user-centered design and brand standards to C-suite — secured budget for 3 UX initiatives and elevated design maturity org-wide</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">UX Design Lead — Enterprise Brand &amp; Design Systems</div>
        <a class="job-company" href="https://www.siemens.com" target="_blank">Siemens</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          07/2020 – 05/2021
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Remote
        </div>
        <ul>
          <li>Led creative direction and design system unification across 4 simultaneous product initiatives in regulated industrial environment — visual standards, brand governance, component documentation adopted cross-functionally</li>
          <li>Produced comprehensive brand documentation reducing internal dissemination needs 50% — engineering teams building to visual spec without designer mediation</li>
          <li>Directed 3D and AutoCAD-integrated UI visual design for industrial application interfaces — spatial design and motion-informed interaction at hardware-software intersection</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">Senior UX Designer — Inclusive Design &amp; Visual Systems</div>
        <a class="job-company" href="https://www.glynlyon.com" target="_blank">Glynlyon Inc</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          02/2014 – 04/2019
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Office
        </div>
        <ul>
          <li>Designed WCAG 2.1 and ADA-compliant inclusive digital experiences — championing accessibility and inclusive design as non-negotiable visual and interaction standards across multi-platform products</li>
          <li>Drove data-informed visual design decisions through user research and usability testing — UI features increasing ease of use 65% through improved visual hierarchy and interaction clarity</li>
          <li>Led Design Thinking workshops aligning brand, product, and engineering on visual strategy and user-centered design principles</li>
        </ul>
      </div>
    </main>

    <!-- SIDEBAR -->
    <aside class="sidebar">

      <div class="sidebar-section">
        <h2 class="section-title">Summary</h2>
        <p class="summary-quote" style="color: #212121; font-weight:700">"VP-level UX Creative Director — 12+ years governing brand standards, architecting enterprise design systems, and directing visual design across consumer-facing digital channels in regulated, eCommerce, and financial services environments."</p>
        <ul class="summary-bullets">
          <li>Enterprise design system architect — Figma-native, 60–90% org adoption, $370K labor savings</li>
          <li>Brand governance &amp; visual standards enforcement across distributed agile teams</li>
          <li>Motion design, typography, iconography, color systems, asset creation</li>
          <li>People manager — led 5-person team; mentorship &amp; dotted-line creative direction</li>
          <li>ADA/WCAG 2.1 compliance &amp; inclusive design advocacy</li>
          <li>AI innovation champion — shipped LLM platform with documented commercial outcomes</li>
        </ul>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">Key Achievements</h2>
        <ul class="dot-list">
          <li>60–90% design system org adoption</li>
          <li>$370K annual labor savings</li>
          <li>–17% → +2% margin via AI platform</li>
          <li>43% checkout abandonment reduction</li>
          <li>10+ C-suite initiatives approved</li>
          <li>100% ADA compliance delivered</li>
        </ul>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">Skills &amp; Tools</h2>
        <div class="tag-list">
          <span class="tag">Creative Direction</span>
          <span class="tag">Visual Design</span>
          <span class="tag">Brand Strategy</span>
          <span class="tag">Brand Identity</span>
          <span class="tag">Design Systems</span>
          <span class="tag">Style Guides</span>
          <span class="tag">Figma</span>
          <span class="tag">After Effects</span>
          <span class="tag">Lottie</span>
          <span class="tag">Principle</span>
          <span class="tag">Motion Design</span>
          <span class="tag">Illustrator</span>
          <span class="tag">Typography</span>
          <span class="tag">Iconography</span>
          <span class="tag">Color Systems</span>
          <span class="tag">ADA Compliant</span>
          <span class="tag">WCAG 2.1</span>
          <span class="tag">Inclusive Design</span>
          <span class="tag">User Research</span>
          <span class="tag">Usability Testing</span>
          <span class="tag">Agile / SAFe</span>
          <span class="tag">MUI React</span>
          <span class="tag">Google MD3</span>
          <span class="tag">eCommerce UX</span>
          <span class="tag">Financial Services</span>
        </div>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">AI &amp; Innovation</h2>
        <div class="tag-list">
          <span class="tag">LLM Workflows</span>
          <span class="tag">Agentic AI</span>
          <span class="tag">RAG Systems</span>
          <span class="tag">AI-Driven Design</span>
          <span class="tag">Multimodal AI</span>
          <span class="tag">Responsible AI</span>
        </div>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">Education</h2>
        <div class="edu-degree">Bachelor of Arts</div>
        <div style="font-size:8.5pt; color:var(--mid); margin-bottom:2px;">Media Arts, Animation &amp; Visual Design</div>
        <div class="edu-school">The Art Institute of Phoenix</div>
        <div class="edu-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          09/2002 – 09/2005
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ
        </div>
        <div style="margin-top:8px; font-size:8pt; color:var(--mid); line-height:1.55;">
          NASBA Agile &amp; PM (891/1000) · Microsoft Data &amp; Dev (95%) · AI Test Automation (100%) · CompTIA A+ &amp; Network+
        </div>
      </div>

    </aside>
  </div><!-- /body -->
</div><!-- /page -->
</body>
</html><!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Untitled Document</title>
</head>

<body>
</body>
</html>`;

/**
 * Opens the resume HTML in a new browser tab using Blob URL
 */
export function openResumeInNewTab(): void {
  // Create a Blob from the HTML string
  const blob = new Blob([resumeHTML], { type: 'text/html' });
  
  // Generate a blob URL
  const blobURL = URL.createObjectURL(blob);
  
  // Open in new tab
  const newWindow = window.open(blobURL, '_blank');
  
  // Clean up the blob URL after a delay to ensure the page loads
  if (newWindow) {
    setTimeout(() => {
      URL.revokeObjectURL(blobURL);
    }, 1000);
  }
}
