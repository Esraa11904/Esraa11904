const translations = {
  en: {
    skip: "Skip to content", navAbout: "About", navProjects: "Projects", navExperience: "Training", navSkills: "Skills", navEducation: "Education", navContact: "Contact",
    heroEyebrow: "CYBERSECURITY • HANDS-ON LABS", heroHello: "Hi, I’m", heroRole: "Junior Penetration Tester ", heroDescription: "I build and document practical security labs to understand how systems fail, how vulnerabilities are validated, and how findings can be communicated clearly.", viewProjects: "Explore my projects", contactMe: "Contact me", location: "Amman, Jordan", focus: "Pentesting & Security Assessment", codeObjective: "Objective", codeWeb: "Web application testing", codeNetwork: "Network security labs", codeReports: "Clear technical reports", codeMob: "Mobile Pen Testing", codeApproach: "Approach", labBased: "Lab-based learning · Ethical testing only",
    strip1: "Web Security", strip2: "Network Labs", strip3: "Vulnerability Assessment", strip4: "Technical Reporting", strip5: "Mobile Pen Testing",
    aboutKicker: "01 — ABOUT", aboutTitle: "Curious by nature. Methodical by practice.", aboutText: "I’m a cybersecurity graduate building a practical foundation in penetration testing and security assessment. My work centers on controlled labs, documenting the attack path, understanding impact, and turning technical observations into actionable remediation guidance.", aboutText2: "I also have SOC-focused training through the NCSC Masar Program, which strengthened my understanding of monitoring, indicators of compromise, incident response workflows, and security risk.", principle1Title: "Evidence first", principle1Text: "Claims should be supported by reproducible steps and clear evidence.", principle2Title: "Understand impact", principle2Text: "Explain what a weakness means for the system, not only its name.", principle3Title: "Actionable reporting", principle3Text: "Prioritize findings and provide realistic remediation steps.",
    projectsKicker: "02 — SELECTED WORK", projectsTitle: "Projects & security labs", projectsNote: "A selection of lab-based work. Each write-up should include scope, methodology, evidence, impact, and remediation.", projectTypeLab: "SECURITY LAB", projectTypeBuild: "DEVELOPMENT PROJECT", adTitle: "Active Directory & Internal Network Lab", adText: "A controlled lab focused on Windows domain fundamentals, network enumeration, identity exposure, and documenting security weaknesses with mitigation recommendations.", labDisclaimer: "Controlled environment", requestWriteup: "Ask about write-up ↗", networkTitle: "Enterprise Network Lab Simulation", networkText: "A simulated assessment of exposed services and potential attack paths, with emphasis on validating findings and writing prioritized remediation guidance.", ctfTitle: "Gamified CTF Learning Platform", ctfText: "A graduation project for an educational Capture the Flag platform with challenge categories, hints, points, levels, and a gamified learning experience.", academicProject: "Academic project", ransomTitle: "Ransomware Behavior Simulation", ransomText: "A controlled Python simulation designed to study malware-like file behavior and discuss defensive monitoring and safe analysis practices.", safeSimulation: "Non-deployable, controlled simulation", projectFootnote: "*Keep only tools and techniques you actually used in each project. Replace “Ask about write-up” with a public report link once the report is sanitized and ready.",
    trainingKicker: "03 — TRAINING", trainingTitle: "Training & experience", masarOrg: "National Cyber Security Center (NCSC)", masarDate: "Jan 2025 — Jan 2026", masarTitle: "Cybersecurity Trainee — Masar Program", masarText: "Completed 200+ hours of SOC-focused training covering monitoring, traffic and log analysis, indicators of compromise, simulated attack scenarios, incident response workflows, and risk assessment.", ctfOrg: "National Cyber Security Center (NCSC)", ctfDate: "Jan 2024", ctfTrainingTitle: "Cyber Warriors — CTF Training", ctfTrainingText: "Participated in Capture the Flag training to develop structured problem-solving and practical cybersecurity skills.", communityOrg: "Jordan Cyber Club", communityDate: "Community contribution", communityTitle: "CTF Challenge Author", communityText: "Designed two beginner-level reverse engineering challenges for the Catch the Hilal CTF. Add a public event or challenge link if available.",
    skillsKicker: "04 — TOOLKIT", skillsTitle: "Technical skills", skillsIntro: "Grouped by practical use. Be ready to demonstrate every skill you list in an interview.", skill1Title: "Offensive security", skill1Text: "Reconnaissance, enumeration, web application testing, vulnerability validation, and technical reporting.", skill2Title: "Network & systems", skill2Text: "Network fundamentals, service discovery, Linux and Windows environments, and basic domain lab concepts.", skill3Title: "Detection & analysis", skill3Text: "Log and traffic analysis, IOC awareness, incident response process, and risk-based prioritization.", skill4Title: "Programming & tools", skill4Text: "Scripting and application fundamentals for automation, testing, and building learning tools.", skillsNote: "Skill tags are editable. Remove anything you cannot explain or demonstrate independently.",
    educationKicker: "05 — BACKGROUND", educationTitle: "Education & certifications", educationLabel: "EDUCATION", degreeTitle: "B.Sc. in Cybersecurity", university: "Zarqa University, Jordan", degreeNote: "Graduate", certLabel: "CERTIFICATIONS & TRAINING", cert1: "Cyber Security Associate — Green Circle", cert2: "Cyber Warriors CTF Training — NCSC", cert3: "NCSC Masar Program — Cybersecurity Training", cert4: "AWS Certified Cloud Practitioner — add status / credential link", certNote: "Before publishing, confirm exact certificate names, dates, and whether each item is a completed certification or training program. Link credentials when possible.",
    contactKicker: "06 — CONTACT", contactTitle: "Let’s talk security.", contactText: "Open to entry-level opportunities, internships, and collaborative security projects.", callPhone: "Call", copyProfile: "Copy profile links", copied: "Profile links copied.", copyFailed: "Copy failed. Use the links above.", footerText: "Built with curiosity, documented with evidence.", backTop: "Back to top ↑"
  },
  ar: {
    skip: "انتقل إلى المحتوى", navAbout: "نبذة", navProjects: "المشاريع", navExperience: "التدريب", navSkills: "المهارات", navEducation: "التعليم", navContact: "تواصل",
    heroEyebrow: "الأمن السيبراني • مختبرات عملية", heroHello: "مرحبًا، أنا", heroRole: "مختبرة اختراق مبتدئة ", heroDescription: "أبني مختبرات أمنية عملية وأوثّقها لفهم كيفية تعرّض الأنظمة للمخاطر، والتحقق من الثغرات، وكتابة النتائج بطريقة واضحة.", viewProjects: "استعرضي مشاريعي", contactMe: "تواصلي معي", location: "عمّان، الأردن", focus: "اختبار الاختراق وتقييم الأمان", codeObjective: "الهدف", codeWeb: "اختبار تطبيقات الويب", codeNetwork: "مختبرات أمن الشبكات", codeReports: "تقارير تقنية واضحة", codeMob: "اختبار اختراق الأجهزة المحمولة", codeApproach: "المنهجية", labBased: "تعلّم ضمن مختبرات · اختبار أخلاقي فقط",
    strip1: "أمن الويب", strip2: "مختبرات الشبكات", strip3: "تقييم الثغرات", strip4: "التقارير التقنية", strip5: "اختبار تطبيقات الهاتف",
    aboutKicker: "01 — نبذة", aboutTitle: "فضول بالتعلّم، ومنهجية بالتطبيق.", aboutText: "أنا خريجة أمن سيبراني أعمل على بناء أساس عملي في اختبار الاختراق وتقييم الأمان. أركّز على المختبرات المصرّح بها، وتوثيق مسار الاختبار، وفهم الأثر، وتحويل الملاحظات التقنية إلى توصيات معالجة قابلة للتطبيق.", aboutText2: "لدي أيضًا تدريب يركّز على عمليات مركز العمليات الأمنية SOC ضمن برنامج مسار التابع للمركز الوطني للأمن السيبراني، مما عزز فهمي للمراقبة وتحليل مؤشرات الاختراق وسير عمل الاستجابة للحوادث وتقييم المخاطر.", principle1Title: "الدليل أولًا", principle1Text: "يجب دعم النتائج بخطوات قابلة للتكرار وأدلة واضحة.", principle2Title: "فهم الأثر", principle2Text: "توضيح تأثير الضعف على النظام، وليس الاكتفاء باسم الثغرة.", principle3Title: "تقارير قابلة للتنفيذ", principle3Text: "ترتيب النتائج حسب الأولوية وتقديم خطوات معالجة واقعية.",
    projectsKicker: "02 — أعمال مختارة", projectsTitle: "المشاريع والمختبرات الأمنية", projectsNote: "نماذج من العمل ضمن مختبرات. يجب أن يتضمن كل تقرير النطاق والمنهجية والأدلة والأثر والمعالجة.", projectTypeLab: "مختبر أمني", projectTypeBuild: "مشروع تطوير", adTitle: "مختبر Active Directory والشبكة الداخلية", adText: "مختبر مضبوط يركّز على أساسيات نطاق Windows، واستكشاف الشبكة، والتعرّض المتعلق بالهويات، وتوثيق نقاط الضعف مع توصيات المعالجة.", labDisclaimer: "بيئة اختبار معزولة", requestWriteup: "اطلبي التقرير ↗", networkTitle: "محاكاة مختبر شبكة مؤسسية", networkText: "تقييم محاكاة للخدمات المكشوفة ومسارات الهجوم المحتملة، مع التركيز على التحقق من النتائج وكتابة توصيات معالجة مرتبة حسب الأولوية.", ctfTitle: "منصة تعليمية للأمن السيبراني بأسلوب CTF", ctfText: "مشروع تخرج لمنصة تعليمية تفاعلية لتحديات Capture the Flag، تتضمن تصنيفات للتحديات وتلميحات ونقاطًا ومستويات وتجربة تعلّم تحفيزية.", academicProject: "مشروع أكاديمي", ransomTitle: "محاكاة سلوك برمجيات الفدية", ransomText: "محاكاة مضبوطة باستخدام Python لدراسة سلوك الملفات الشبيه بالبرمجيات الخبيثة ومناقشة المراقبة الدفاعية والتحليل الآمن.", safeSimulation: "محاكاة مضبوطة وغير قابلة للنشر", projectFootnote: "*أبقي فقط الأدوات والتقنيات التي استخدمتها فعلًا في كل مشروع. استبدلي رابط طلب التقرير برابط عام بعد تنقيح التقرير وتجهيزه.",
    trainingKicker: "03 — التدريب", trainingTitle: "التدريب والخبرة العملية", masarOrg: "المركز الوطني للأمن السيبراني (NCSC)", masarDate: "كانون الثاني 2025 — كانون الثاني 2026", masarTitle: "متدربة أمن سيبراني — برنامج مسار", masarText: "إكمال أكثر من 200 ساعة تدريب تركّز على SOC، وشملت المراقبة وتحليل حركة الشبكة والسجلات، ومؤشرات الاختراق، وسيناريوهات هجوم محاكاة، وإجراءات الاستجابة للحوادث وتقييم المخاطر.", ctfOrg: "المركز الوطني للأمن السيبراني (NCSC)", ctfDate: "كانون الثاني 2024", ctfTrainingTitle: "تدريب Cyber Warriors — CTF", ctfTrainingText: "المشاركة في تدريب تحديات CTF لتطوير حل المشكلات بصورة منهجية والمهارات العملية في الأمن السيبراني.", communityOrg: "Jordan Cyber Club", communityDate: "مساهمة مجتمعية", communityTitle: "تصميم تحديات CTF", communityText: "تصميم تحديين للمبتدئين في الهندسة العكسية ضمن Catch the Hilal CTF. أضيفي رابطًا عامًا للفعالية أو التحديات إن توفر.",
    skillsKicker: "04 — الأدوات", skillsTitle: "المهارات التقنية", skillsIntro: "مرتبة حسب الاستخدام العملي. كوني مستعدة لإثبات كل مهارة تذكرينها في المقابلة.", skill1Title: "الأمن الهجومي", skill1Text: "الاستطلاع، واستكشاف الخدمات، واختبار تطبيقات الويب، والتحقق من الثغرات، وكتابة التقارير التقنية.", skill2Title: "الشبكات والأنظمة", skill2Text: "أساسيات الشبكات، واكتشاف الخدمات، وبيئات Linux وWindows، ومفاهيم مختبرات النطاقات.", skill3Title: "الكشف والتحليل", skill3Text: "تحليل السجلات وحركة الشبكة، ومؤشرات الاختراق، وإجراءات الاستجابة للحوادث، وترتيب المخاطر.", skill4Title: "البرمجة والأدوات", skill4Text: "أساسيات البرمجة والتطبيقات للأتمتة والاختبار وبناء الأدوات التعليمية.", skillsNote: "يمكن تعديل وسوم المهارات. احذفي أي مهارة لا تستطيعين شرحها أو تطبيقها بشكل مستقل.",
    educationKicker: "05 — الخلفية", educationTitle: "التعليم والشهادات", educationLabel: "التعليم", degreeTitle: "بكالوريوس الأمن السيبراني", university: "جامعة الزرقاء، الأردن", degreeNote: "خريجة", certLabel: "الشهادات والتدريب", cert1: "Cyber Security Associate — Green Circle", cert2: "Cyber Warriors CTF Training — NCSC", cert3: "برنامج مسار — تدريب الأمن السيبراني، NCSC", cert4: "AWS Certified Cloud Practitioner — أضيفي الحالة أو رابط الاعتماد", certNote: "قبل النشر، تحققي من الأسماء الرسمية للشهادات والتواريخ، وما إذا كان كل بند شهادة مكتملة أم برنامجًا تدريبيًا. أضيفي روابط الاعتماد عند توفرها.",
    contactKicker: "06 — التواصل", contactTitle: "لنتحدث عن الأمن السيبراني.", contactText: "مهتمة بفرص المبتدئين والتدريب والتعاون في المشاريع الأمنية.", callPhone: "اتصال", copyProfile: "نسخ روابط الحسابات", copied: "تم نسخ روابط الحسابات.", copyFailed: "تعذّر النسخ. استخدمي الروابط أعلاه.", footerText: "فضول في التعلّم، وأدلة في التوثيق.", backTop: "العودة للأعلى ↑"
  }
};

const root = document.documentElement;
const languageToggle = document.getElementById("language-toggle");
const themeToggle = document.getElementById("theme-toggle");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("primary-nav");
let currentLanguage = "en";

function applyLanguage(language) {
  currentLanguage = language;
  const dictionary = translations[language];
  root.lang = language;
  root.dir = language === "ar" ? "rtl" : "ltr";
  document.title = language === "ar" ? "إسراء خماش | معرض أعمال الأمن السيبراني" : "Esraa Khammash | Cybersecurity Portfolio";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.textContent = dictionary[key];
  });
  languageToggle.textContent = language === "en" ? "عربي" : "English";
  languageToggle.setAttribute("aria-label", language === "en" ? "Switch to Arabic" : "Switch to English");
  if (menuToggle) menuToggle.setAttribute("aria-label", language === "en" ? "Open navigation" : "فتح القائمة");
  try { localStorage.setItem("portfolio-language", language); } catch (_) {}
}

function applyTheme(theme) {
  root.dataset.theme = theme;
  const glyph = themeToggle.querySelector(".theme-glyph");
  glyph.textContent = theme === "dark" ? "☼" : "☾";
  themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
  try { localStorage.setItem("portfolio-theme", theme); } catch (_) {}
}

languageToggle.addEventListener("click", () => applyLanguage(currentLanguage === "en" ? "ar" : "en"));
themeToggle.addEventListener("click", () => applyTheme(root.dataset.theme === "dark" ? "light" : "dark"));

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

const copyButton = document.getElementById("copy-contact");
const copyStatus = document.getElementById("copy-status");
copyButton.addEventListener("click", async () => {
  const links = "LinkedIn: https://www.linkedin.com/in/esraa-khammash-635406389/\nGitHub: https://github.com/Esraa11904";
  try {
    await navigator.clipboard.writeText(links);
    copyStatus.textContent = translations[currentLanguage].copied;
  } catch (error) {
    copyStatus.textContent = translations[currentLanguage].copyFailed;
  }
});

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-links a");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  sections.forEach((section) => observer.observe(section));
}

try {
  const savedLanguage = localStorage.getItem("portfolio-language");
  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedLanguage === "ar" || savedLanguage === "en") applyLanguage(savedLanguage);
  applyTheme(savedTheme === "light" ? "light" : "dark");
} catch (_) {
  applyTheme("dark");
}
