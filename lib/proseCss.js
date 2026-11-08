// Long-form styles for the legal pages and the blog (Costa palette). The guide bodies
// come from the old library as HTML, so their blocks are styled by class here.
export const PROSE_CSS = `
.kn-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
.kn-search{display:flex;align-items:center;gap:12px;max-width:640px;background:#FFFFFF;border:1px solid #E3D9D3;border-radius:999px;padding:0 20px;color:#5F707B;box-shadow:0 10px 30px rgba(14,42,59,0.06);transition:border-color .15s ease-out,box-shadow .2s ease-out}
.kn-search:focus-within{border-color:#18648A;box-shadow:0 10px 30px rgba(24,100,138,0.14)}
.kn-search input{flex:1;min-width:0;border:0;outline:0;background:transparent;font:inherit;font-size:16px;color:#0E2A3B;padding:16px 0}
.kn-search input::placeholder{color:#8A989F}
.kn-topics{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));gap:16px;margin-top:40px}
.kn-topic{display:flex;flex-direction:column;gap:8px;text-decoration:none;color:#0E2A3B;border-radius:22px;padding:22px;min-height:190px;border:1px solid rgba(14,42,59,0.06)}
.kn-topic-icon{display:inline-flex;align-self:flex-start;padding:11px;border-radius:14px;background:#FFFFFF;color:#18648A;box-shadow:0 6px 16px rgba(14,42,59,0.06)}
.kn-topic-title{margin-top:8px;font-size:19px;line-height:1.25;font-weight:600;letter-spacing:-0.01em}
.kn-topic-intro{font-size:14px;line-height:1.5;color:#33495A;flex:1}
.kn-topic-count{font-size:14px;font-weight:500;color:#18648A}
.kn-topic-count span{display:inline-block;transition:transform .2s cubic-bezier(.16,1,.3,1)}
.kn-topic:hover .kn-topic-count span{transform:translateX(3px)}
.kn-feature-grid{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,1fr);gap:20px}
@media (max-width:860px){.kn-feature-grid{grid-template-columns:minmax(0,1fr)}}
.kn-feature{position:relative;display:flex;flex-direction:column;gap:12px;text-decoration:none;color:#0E2A3B;border-radius:26px;padding:clamp(26px,3.4vw,40px);min-height:340px;overflow:hidden}
.kn-feature-tag{align-self:flex-start;font-size:13px;font-weight:500;color:#18648A;background:#FFFFFF;border-radius:999px;padding:6px 12px}
.kn-feature-icon{position:absolute;right:clamp(20px,3vw,36px);top:clamp(20px,3vw,36px);display:flex;padding:18px;border-radius:24px;background:#FFFFFF;color:#18648A;box-shadow:0 10px 24px rgba(14,42,59,0.08)}
.kn-feature-title{margin-top:auto;padding-top:56px;font-size:clamp(24px,2.8vw,34px);line-height:1.15;letter-spacing:-0.02em;font-weight:600;max-width:560px}
.kn-feature-sum{font-size:16px;line-height:1.6;color:#33495A;max-width:520px}
.kn-feature-cta{font-weight:500;color:#18648A}
.kn-feature:hover .kn-feature-title{color:#114E6C}
.kn-downloads{border-radius:26px;background:#0E2A3B;color:#DCE6EC;padding:clamp(24px,3vw,34px)}
.kn-downloads h2{margin:0;color:#FFFFFF;font-size:clamp(24px,2.6vw,30px);line-height:1.15;letter-spacing:-0.02em;font-weight:600}
.kn-downloads p{margin:10px 0 18px;font-size:15px;line-height:1.55}
.kn-downloads ul{list-style:none;margin:0;padding:0}
.kn-downloads li{border-top:1px solid rgba(255,255,255,0.12)}
.kn-downloads a{display:flex;justify-content:space-between;align-items:center;gap:14px;padding:12px 0;color:#FFFFFF;text-decoration:none;font-size:15px}
.kn-downloads a:hover>span:first-child{text-decoration:underline;text-underline-offset:3px}
.kn-fmt{flex:none;font-size:12px;font-weight:500;color:#0E2A3B;background:#F2CDB9;border-radius:999px;padding:3px 10px}
.kn-tabs{display:flex;gap:8px;margin-top:20px;overflow-x:auto;padding-bottom:4px;scrollbar-width:none}
.kn-tabs::-webkit-scrollbar{display:none}
.kn-tab{flex:none;font:inherit;font-size:15px;cursor:pointer;color:#0E2A3B;background:#FFFFFF;border:1px solid #E8DFDA;border-radius:999px;padding:9px 16px;display:inline-flex;gap:8px;align-items:center;transition:background-color .15s ease-out,color .15s ease-out,border-color .15s ease-out}
.kn-tab span{font-size:13px;color:#5F707B}
.kn-tab:hover{background:#F2E9E5}
.kn-tab[aria-pressed="true"]{background:#0E2A3B;border-color:#0E2A3B;color:#FFFFFF}
.kn-tab[aria-pressed="true"] span{color:#9DB4C2}
.kn-group-h{display:flex;align-items:center;gap:10px;margin:0 0 14px;font-size:20px;font-weight:600;letter-spacing:-0.01em}
.kn-group-dot{display:inline-flex;padding:7px;border-radius:10px;background:#E3EEF4;color:#18648A}
.kn-rows{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,340px),1fr));gap:12px;margin:0;padding:0}
.kn-row{display:flex;gap:16px;align-items:flex-start;height:100%;box-sizing:border-box;text-decoration:none;color:#0E2A3B;background:#FFFFFF;border:1px solid #E8DFDA;border-radius:18px;padding:16px 18px}
.kn-row-icon{flex:none;width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;color:#18648A}
.kn-row-meta{display:flex;align-items:center;gap:8px;font-size:12.5px;color:#5F707B}
.kn-new{font-size:11.5px;font-weight:600;color:#8A3E1F;background:#F8DCCD;border-radius:999px;padding:2px 8px}
.kn-more{display:inline-block;margin-top:14px;line-height:1.5;font-size:15px;font-weight:500;color:#18648A;text-decoration:none}
.kn-more:hover{text-decoration:underline;text-underline-offset:3px}
.kn-row-title{font-size:16px;line-height:1.35;font-weight:600;transition:color .15s ease-out}
.kn-row:hover .kn-row-title{color:#18648A}
.kn-row-sum{font-size:14px;line-height:1.5;color:#4B5D69;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.kn-linkbtn{font:inherit;color:#18648A;background:none;border:0;padding:0;text-decoration:underline;text-underline-offset:3px;cursor:pointer}
.kn-for{border-radius:20px;background:#F2E9E5;padding:20px 24px;font-size:16px;line-height:1.6}
.kn-for p{margin:0}
.kn-for a{color:#18648A;text-underline-offset:3px}
@media (max-width:600px){.kn-topics{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin-top:28px}.kn-topic{min-height:0;padding:16px;gap:6px;border-radius:18px}.kn-topic-intro{display:none}.kn-topic-title{font-size:16px;margin-top:4px;flex:1}.kn-topic-icon{padding:8px;border-radius:11px}.kn-row-sum{display:none}.kn-row{padding:14px;gap:14px;align-items:center}.kn-row-icon{width:44px;height:44px}.kn-capped li:nth-child(n+5){display:none}.kn-feature{min-height:0}.kn-feature-title{padding-top:72px}}
@media (prefers-reduced-motion:reduce){.kn-topic:hover .kn-topic-count span{transform:none}}
.kn-faq details{border-bottom:1px solid #E8DFDA;padding:4px 0}
.kn-faq summary{cursor:pointer;list-style:none;display:flex;justify-content:space-between;gap:16px;padding:14px 0;font-weight:600;color:#0E2A3B;line-height:1.4}
.kn-faq summary::-webkit-details-marker{display:none}
.kn-faq summary::after{content:'+';color:#18648A;font-weight:500;font-size:22px;line-height:1}
.kn-faq details[open] summary::after{content:'\\2212'}
.kn-faq details p{margin:0 0 16px;color:#33495A}
.kn-article-grid{display:grid;grid-template-columns:240px minmax(0,1fr);gap:64px;align-items:start}
.kn-toc{position:sticky;top:32px;font-size:14px;line-height:1.45}
.kn-toc p{margin:0 0 12px;font-size:13px;font-weight:600;color:#5F707B}
.kn-toc nav{display:flex;flex-direction:column;border-left:1px solid #E3D9D3}
.kn-toc a{color:#4B5D69;text-decoration:none;padding:7px 0 7px 16px;margin-left:-1px;border-left:2px solid transparent}
.kn-toc a:hover{color:#0E2A3B;border-left-color:#18648A}
.kn-toc-sm{display:none}
@media (max-width:900px){.kn-article-grid{grid-template-columns:minmax(0,1fr);gap:0}.kn-toc{display:none}.kn-toc-sm{display:block;margin:0 0 32px;background:#FFFFFF;border:1px solid #E8DFDA;border-radius:16px;padding:14px 18px}.kn-toc-sm summary{cursor:pointer;font-weight:500}.kn-toc-sm nav{display:flex;flex-direction:column;gap:10px;margin-top:12px}.kn-toc-sm a{color:#18648A;font-size:15px}}
.kn-prose{max-width:720px;font-size:17px;line-height:1.75;color:#24394A}
.kn-prose>*:first-child{margin-top:0}
.kn-prose h2{font-size:clamp(23px,2.4vw,28px);line-height:1.2;letter-spacing:-0.02em;font-weight:600;color:#0E2A3B;margin:56px 0 14px}
.kn-prose h3{font-size:19px;line-height:1.3;font-weight:600;color:#0E2A3B;margin:32px 0 8px}
.kn-prose p{margin:0 0 16px}
.kn-prose a{color:#18648A;text-decoration:underline;text-underline-offset:3px;text-decoration-thickness:1px}
.kn-prose a:hover{color:#114E6C}
.kn-prose strong{font-weight:600;color:#0E2A3B}
.kn-prose ul,.kn-prose ol{margin:0 0 20px;padding-left:22px}
.kn-prose li{margin:0 0 8px;padding-left:4px}
.kn-prose li::marker{color:#18648A}
.kn-prose hr{border:0;border-top:1px solid #E8DFDA;margin:40px 0}
.kn-prose code{font-size:.9em;background:#F2E9E5;border-radius:6px;padding:2px 6px}
.kn-prose blockquote{margin:0 0 16px;padding:16px 18px;border-radius:16px;background:#F2E9E5;color:#0E2A3B}
.kn-prose figure{margin:32px 0}
.kn-prose figure img{display:block;width:100%;height:auto;border-radius:18px;border:1px solid #E6DCD6;background:radial-gradient(70% 80% at 0% 0%,#CFDDEB 0%,transparent 70%),radial-gradient(60% 70% at 100% 55%,#F2CDB9 0%,transparent 70%),#F8F4F1}
.kn-prose figcaption{margin-top:10px;font-size:13px;line-height:1.5;color:#5F707B}
.kn-prose table{width:100%;border-collapse:collapse;font-size:15px;line-height:1.5;margin:0 0 20px}
.kn-prose caption{text-align:left;font-size:14px;color:#5F707B;margin-bottom:8px}
.kn-prose th,.kn-prose td{text-align:left;vertical-align:top;padding:12px 14px;border-bottom:1px solid #E8DFDA}
.kn-prose thead th{background:#F2E9E5;font-weight:600;color:#0E2A3B;border-bottom:0}
.kn-prose thead th:first-child{border-radius:12px 0 0 12px}.kn-prose thead th:last-child{border-radius:0 12px 12px 0}
.kn-prose tbody th{font-weight:600;color:#0E2A3B}
.kn-prose .resource-table-scroll,.kn-prose .legal-table-wrap{overflow-x:auto;margin:0 0 24px;-webkit-overflow-scrolling:touch}
.kn-prose .resource-table-scroll table,.kn-prose .legal-table-wrap table{min-width:560px}
.kn-prose .button{display:inline-flex;align-items:center;gap:8px;background:#18648A;color:#FFFFFF;text-decoration:none;font-size:15px;font-weight:500;padding:12px 20px;border-radius:999px;transition:background-color .15s ease-out,transform .2s cubic-bezier(.16,1,.3,1)}
.kn-prose .button:hover{background:#114E6C;color:#FFFFFF;transform:translateY(-1px)}
.kn-prose .text-link{font-weight:500}
.kn-prose .resource-download{margin:0 0 40px;padding:26px;border-radius:24px;border:1px solid #E6DCD6;background:radial-gradient(70% 80% at 100% 0%,#F2D2C1 0%,transparent 70%),radial-gradient(70% 80% at 0% 100%,#CBDDEA 0%,transparent 70%),#F8F4F1;display:flex;flex-direction:column;gap:10px;align-items:flex-start}
.kn-prose .resource-download>strong,.kn-prose .resource-download__copy>strong{font-size:19px;line-height:1.3}
.kn-prose .resource-download p{margin:0;font-size:15px;color:#4B5D69}
.kn-prose .resource-download div,.kn-prose .resource-download__actions{display:flex;flex-wrap:wrap;align-items:center;gap:12px 18px;margin-top:6px}
.kn-prose .resource-download--preview{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,.7fr);gap:24px;align-items:center}
.kn-prose .resource-download--preview .resource-download__copy{display:flex;flex-direction:column;gap:10px;margin:0}
.kn-prose .resource-download--preview figure{margin:0}
.kn-prose .resource-download--preview figure img{max-height:300px;width:auto;margin:0 auto;box-shadow:0 18px 40px rgba(14,42,59,0.14);background:#FFFFFF}
@media (max-width:640px){.kn-prose .resource-download--preview{grid-template-columns:minmax(0,1fr)}}
.kn-prose .message-example{margin:0 0 18px;padding:20px;border-radius:20px;background:#FFFFFF;border:1px solid #E8DFDA}
.kn-prose .message-example h3{margin:0 0 12px;font-size:17px}
.kn-prose .message-example blockquote{background:#E3EEF4;border-radius:16px 16px 16px 4px;font-size:16px;line-height:1.6;margin:0 0 10px}
.kn-prose .message-example p{font-size:15px;color:#4B5D69;margin:10px 0 0}
.kn-copy{font:inherit;font-size:13px;font-weight:500;color:#18648A;background:#FFFFFF;border:1px solid #D6E3EB;border-radius:999px;padding:7px 14px;cursor:pointer}
.kn-copy:hover{background:#E3EEF4}
.kn-prose .message-jumps{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 28px}
.kn-prose .message-jumps a{text-decoration:none;font-size:14px;background:#FFFFFF;border:1px solid #E8DFDA;border-radius:999px;padding:6px 12px;color:#0E2A3B}
.kn-prose .article-callout{display:flex;gap:16px;align-items:flex-start;margin:28px 0;padding:20px 22px;border-radius:20px;background:#E3EEF4}
.kn-prose .article-callout__icon{flex:none;width:40px;height:40px;border-radius:12px;background:#18648A;color:#FFFFFF;display:flex;align-items:center;justify-content:center}
.kn-prose .article-callout__icon svg{width:20px;height:20px;stroke-width:2}
.kn-prose .article-callout p{margin:6px 0 0;font-size:15px;line-height:1.6}
.kn-prose .resource-summary{margin:0 0 32px;padding:26px 28px;border-radius:24px;background:#0E2A3B;color:#DCE6EC}
.kn-prose .resource-summary h2{margin:0 0 10px;color:#FFFFFF;font-size:22px}
.kn-prose .resource-summary p{margin:0 0 12px}
.kn-prose .resource-summary a{color:#FFFFFF}
.kn-prose .resource-workflow,.kn-prose .resource-example,.kn-prose .resource-audience,.kn-prose .resource-statuses,.kn-prose .resource-flow,.kn-prose .resource-next-step,.kn-prose .resource-companions{margin:32px 0;padding:24px;border-radius:22px;background:#FFFFFF;border:1px solid #E8DFDA}
.kn-prose .resource-workflow>h2,.kn-prose .resource-example>h2,.kn-prose .resource-flow>h2,.kn-prose .resource-next-step>h2{margin-top:0}
.kn-prose .resource-companions{display:flex;flex-direction:column;gap:8px}
.kn-prose .article-checklist{list-style:none;padding:0}
.kn-prose .article-checklist li{position:relative;padding-left:32px}
.kn-prose .article-checklist li::before{content:'';position:absolute;left:0;top:5px;width:20px;height:20px;border-radius:999px;background:#E3EEF4 url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2318648A' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 12 4 4 8-8'/%3E%3C/svg%3E") center/12px no-repeat}
.kn-prose dl{margin:0 0 20px}
.kn-prose dl>div{padding:10px 0;border-bottom:1px solid #E8DFDA}
.kn-prose dt{font-weight:600;color:#0E2A3B}
.kn-prose dd{margin:2px 0 0}
.kn-prose .comparison-sources{font-size:14px;line-height:1.6;color:#4B5D69}
.kn-prose .legal-placeholder{background:#FBE9DF;color:#9E4A29;border-radius:6px;padding:1px 6px;font-size:.92em;font-weight:500}
.kn-prose .legal-caps{font-size:15px;letter-spacing:.01em}
.kn-draft{display:flex;gap:14px;align-items:flex-start;padding:20px 22px;border-radius:20px;background:#FBEFE8;border:1px solid #EBCDBD;font-size:15px;line-height:1.6;color:#24394A}
.kn-draft p{margin:6px 0 0}
.kn-draft .legal-placeholder{background:#FFFFFF;color:#9E4A29;border-radius:6px;padding:1px 6px;font-weight:500}
.kn-crumbs{display:flex;flex-wrap:wrap;gap:8px;font-size:14px;color:#5F707B}
.kn-crumbs a{color:#4B5D69}
.kn-pill{display:inline-flex;align-self:flex-start;font-size:13px;font-weight:500;color:#18648A;background:#E3EEF4;border-radius:999px;padding:6px 12px}
.kn-post-card{display:flex;flex-direction:column;text-decoration:none;color:#0E2A3B;background:#FFFFFF;border:1px solid #E8DFDA;border-radius:24px;overflow:hidden;height:100%}
.kn-post-card:hover h3{color:#18648A}
.kn-post-card .kn-post-art{aspect-ratio:16/9;position:relative;display:flex;align-items:flex-end;padding:18px}
.kn-post-card h3{transition:color .15s ease-out}
.kn-chip{text-decoration:none;color:#0E2A3B;background:#FFFFFF;border:1px solid #E8DFDA;border-radius:999px;padding:9px 16px;font-size:15px;display:inline-flex;gap:8px;align-items:center}
.kn-chip:hover{background:#F2E9E5}
.kn-chip span{color:#5F707B;font-size:13px}

.kn-related h2{margin:0 0 12px;color:#FFFFFF;font-size:clamp(24px,2.6vw,30px)}
.kn-related h2 em{font-style:normal;color:#A9CBE0}
.kn-related p{margin:0 0 18px;color:#DCE6EC}
.kn-related a{color:#FFFFFF}
.kn-related .button{background:#FFFFFF;color:#0E2A3B}
.kn-related .button:hover{background:#E3EEF4;color:#0E2A3B}
.kn-hero-actions .resource-hero-actions{display:flex;flex-wrap:wrap;align-items:center;gap:12px 18px}
.kn-hero-actions span{font-size:14px;color:#4B5D69}
.kn-prose .launch-table{max-width:100%;overflow-x:auto;margin:24px 0}
.kn-prose .launch-table table{margin:0;min-width:480px}
.kn-article-grid > *{min-width:0}
`;
