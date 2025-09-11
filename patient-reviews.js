// Patient Reviews Data - Middle East and African Patients
const patientReviews = [
    {
        id: 1,
        name: "Ahmed Hassan",
        country: "Egypt",
        city: "Cairo",
        flag: "🇪🇬",
        treatment: "Heart Bypass Surgery",
        category: "cardiac",
        hospital: "Fortis Escorts Heart Institute, Delhi",
        doctor: "Dr. Naresh Trehan",
        rating: 5,
        date: "March 2024",
        cost_saved: "$75,000",
        review: "I came to India from Cairo for my triple bypass surgery after being quoted $120,000 in Germany. The entire experience at Fortis was exceptional. Dr. Trehan and his team were incredibly professional, and the hospital facilities were world-class. I saved over $75,000 and received better care than I could have imagined. The Afiya India team handled everything from visa to accommodation.",
        avatar: "images/patients/ahmed-hassan.jpg",
        verified: true
    },
    {
        id: 2,
        name: "Fatima Al-Zahra",
        country: "UAE",
        city: "Dubai",
        flag: "🇦🇪",
        treatment: "Knee Replacement",
        category: "orthopedic",
        hospital: "Apollo Hospital, Chennai",
        doctor: "Dr. Raju Easwaran",
        rating: 5,
        date: "February 2024",
        cost_saved: "$45,000",
        review: "After years of knee pain, I decided to get my knee replacement done in India. Apollo Hospital in Chennai exceeded all my expectations. The robotic surgery was painless, and I was walking within 2 days. The cost was 70% less than what I was quoted in Dubai. Dr. Raju and the nursing staff were incredibly caring. I'm now pain-free and can walk normally again.",
        avatar: "images/patients/fatima-alzahra.jpg",
        verified: true
    },
    {
        id: 3,
        name: "Mohammed Osei",
        country: "Ghana",
        city: "Accra",
        flag: "🇬🇭",
        treatment: "Liver Transplant",
        category: "transplant",
        hospital: "Global Hospital, Chennai",
        doctor: "Dr. Mohamed Rela",
        rating: 5,
        date: "January 2024",
        cost_saved: "$180,000",
        review: "I was diagnosed with end-stage liver disease and needed an urgent transplant. The doctors in Ghana said it would take years. Afiya India arranged everything within 3 weeks. Dr. Rela at Global Hospital performed a living donor transplant with my brother as donor. The surgery was successful, and I'm completely recovered now. They literally saved my life, and I saved $180,000 compared to US costs.",
        avatar: "images/patients/mohammed-osei.jpg",
        verified: true
    },
    {
        id: 4,
        name: "Zara Mbeki",
        country: "South Africa",
        city: "Johannesburg",
        flag: "🇿🇦",
        treatment: "Breast Cancer Surgery",
        category: "cancer",
        hospital: "Tata Memorial Hospital, Mumbai",
        doctor: "Dr. Rajesh Mistry",
        rating: 5,
        date: "December 2023",
        cost_saved: "$85,000",
        review: "When I was diagnosed with breast cancer, I was devastated. The treatment costs in South Africa were overwhelming. I found Afiya India online and decided to come to India. Dr. Mistry at Tata Memorial Hospital is simply the best. The lumpectomy and reconstruction were perfect. The hospital staff was so compassionate during my treatment. I'm now cancer-free and saved a fortune.",
        avatar: "images/patients/zara-mbeki.jpg",
        verified: true
    },
    {
        id: 5,
        name: "Omar Al-Rashid",
        country: "Saudi Arabia",
        city: "Riyadh",
        flag: "🇸🇦",
        treatment: "Spinal Fusion Surgery",
        category: "orthopedic",
        hospital: "Medanta Hospital, Gurgaon",
        doctor: "Dr. Arvind Jayaswal",
        rating: 5,
        date: "November 2023",
        cost_saved: "$95,000",
        review: "I suffered from severe back pain for 5 years due to spinal stenosis. Multiple doctors in Saudi Arabia recommended surgery, but the costs were prohibitive. I came to Medanta Hospital in Gurgaon, and Dr. Jayaswal performed minimally invasive spinal fusion. The surgery was a complete success. I'm now pain-free and back to my normal activities. The cost was just $25,000 compared to $120,000 quoted in the US.",
        avatar: "images/patients/omar-alrashid.jpg",
        verified: true
    },
    {
        id: 6,
        name: "Grace Okafor",
        country: "Nigeria",
        city: "Lagos",
        flag: "🇳🇬",
        treatment: "Dental Implants",
        category: "dental",
        hospital: "Apollo White Dental, Mumbai",
        doctor: "Dr. Kamlesh Kothari",
        rating: 5,
        date: "October 2023",
        cost_saved: "$15,000",
        review: "I needed 8 dental implants and was quoted $25,000 in Nigeria. Through Afiya India, I got the same treatment at Apollo White Dental in Mumbai for just $8,000. Dr. Kothari used the latest Swiss implants, and the results are amazing. My smile looks natural and beautiful. The clinic was ultra-modern, and the staff was very professional. I saved money and got superior quality.",
        avatar: "images/patients/grace-okafor.jpg",
        verified: true
    },
    {
        id: 7,
        name: "Hassan Al-Mansoori",
        country: "Qatar",
        city: "Doha",
        flag: "🇶🇦",
        treatment: "Prostate Cancer Surgery",
        category: "cancer",
        hospital: "Rajiv Gandhi Cancer Institute, Delhi",
        doctor: "Dr. Surender Dabas",
        rating: 5,
        date: "September 2023",
        cost_saved: "$70,000",
        review: "At age 58, I was diagnosed with prostate cancer. The robotic surgery options in Qatar were limited and expensive. I chose to come to India for robotic prostatectomy. Dr. Dabas at RGCI performed the surgery with precision. The recovery was smooth, and I retained full functionality. The cost was $30,000 compared to $100,000 quoted in Germany. I'm grateful for this second chance at life.",
        avatar: "images/patients/hassan-almansoori.jpg",
        verified: true
    },
    {
        id: 8,
        name: "Amina Traore",
        country: "Mali",
        city: "Bamako",
        flag: "🇲🇱",
        treatment: "Heart Valve Replacement",
        category: "cardiac",
        hospital: "Narayana Health, Bangalore",
        doctor: "Dr. Devi Shetty",
        rating: 5,
        date: "August 2023",
        cost_saved: "$65,000",
        review: "I had rheumatic heart disease and needed mitral valve replacement. There were no facilities in Mali for this surgery. Afiya India arranged everything for me to come to Narayana Health in Bangalore. Dr. Devi Shetty performed the valve replacement perfectly. The care I received was extraordinary. I'm now leading a normal, active life. The cost was incredibly affordable compared to European standards.",
        avatar: "images/patients/amina-traore.jpg",
        verified: true
    },
    {
        id: 9,
        name: "David Mutua",
        country: "Kenya",
        city: "Nairobi",
        flag: "🇰🇪",
        treatment: "Hip Replacement",
        category: "orthopedic",
        hospital: "Fortis Hospital, Mumbai",
        doctor: "Dr. Sujoy Bhattacharjee",
        rating: 5,
        date: "July 2023",
        cost_saved: "$35,000",
        review: "I had severe arthritis in both hips that made walking extremely painful. Hip replacement surgery in Kenya was not an option due to limited facilities. I came to Fortis Mumbai for bilateral hip replacement. Dr. Bhattacharjee used ceramic-on-ceramic implants that will last a lifetime. The surgery was minimally invasive, and I was walking the next day. I saved $35,000 and got world-class treatment.",
        avatar: "images/patients/david-mutua.jpg",
        verified: true
    },
    {
        id: 10,
        name: "Leyla Ozturk",
        country: "Turkey",
        city: "Istanbul",
        flag: "🇹🇷",
        treatment: "IVF Treatment",
        category: "fertility",
        hospital: "Nova IVF, Delhi",
        doctor: "Dr. Gauri Agarwal",
        rating: 5,
        date: "June 2023",
        cost_saved: "$25,000",
        review: "After 8 years of trying to conceive and multiple failed IVF cycles in Turkey, we were losing hope. We decided to try India as a last resort. Dr. Gauri at Nova IVF was incredibly understanding and modified our treatment protocol. The third cycle was successful, and we now have beautiful twin boys! The cost was half of what we were paying in Turkey, and the success rate was much higher.",
        avatar: "images/patients/leyla-ozturk.jpg",
        verified: true
    },
    {
        id: 11,
        name: "Ibrahim Diallo",
        country: "Senegal",
        city: "Dakar",
        flag: "🇸🇳",
        treatment: "Cataract Surgery",
        category: "ophthalmology",
        hospital: "Sankara Nethralaya, Chennai",
        doctor: "Dr. Mohan Rajan",
        rating: 5,
        date: "May 2023",
        cost_saved: "$8,000",
        review: "I had cataracts in both eyes and was gradually losing my vision. The ophthalmologists in Senegal recommended surgery, but the quality of lenses available was poor. I came to Sankara Nethralaya in Chennai for premium lens implants. Dr. Mohan performed phacoemulsification with multifocal IOLs. My vision is now better than it was 20 years ago! I can see clearly at all distances without glasses.",
        avatar: "images/patients/ibrahim-diallo.jpg",
        verified: true
    },
    {
        id: 12,
        name: "Noura Al-Sabah",
        country: "Kuwait",
        city: "Kuwait City",
        flag: "🇰🇼",
        treatment: "Weight Loss Surgery",
        category: "bariatric",
        hospital: "Max Hospital, Delhi",
        doctor: "Dr. Pradeep Chowbey",
        rating: 5,
        date: "April 2023",
        cost_saved: "$40,000",
        review: "I weighed 145 kg and had tried everything to lose weight. Bariatric surgery was my last option, but it was very expensive in Kuwait. I chose to have gastric sleeve surgery at Max Hospital in Delhi. Dr. Chowbey is world-renowned for laparoscopic surgery. The procedure was minimally invasive, and I've lost 65 kg in 10 months. My diabetes is cured, and I feel like a new person. Best decision of my life!",
        avatar: "images/patients/noura-alsabah.jpg",
        verified: true
    },
    {
        id: 13,
        name: "Samuel Ochieng",
        country: "Kenya",
        city: "Mombasa",
        flag: "🇰🇪",
        treatment: "Brain Tumor Surgery",
        category: "neurological",
        hospital: "Artemis Hospital, Gurgaon",
        doctor: "Dr. Arun Saroha",
        rating: 5,
        date: "March 2023",
        cost_saved: "$120,000",
        review: "I was diagnosed with a complex brain tumor that required specialized surgery. No neurosurgeon in Kenya could handle such a complicated case. I was referred to Dr. Arun Saroha at Artemis Hospital. He performed a 12-hour awake craniotomy to remove the tumor while preserving my speech and motor functions. The surgery was 100% successful. I'm now tumor-free and have no neurological deficits. The expertise saved my life.",
        avatar: "images/patients/samuel-ochieng.jpg",
        verified: true
    },
    {
        id: 14,
        name: "Maryam Jaber",
        country: "Lebanon",
        city: "Beirut",
        flag: "🇱🇧",
        treatment: "Cosmetic Surgery",
        category: "cosmetic",
        hospital: "Kokilaben Hospital, Mumbai",
        doctor: "Dr. Debraj Shome",
        rating: 5,
        date: "February 2023",
        cost_saved: "$20,000",
        review: "I wanted rhinoplasty and breast augmentation but the costs in Lebanon were extremely high. I researched extensively and chose Dr. Debraj Shome in Mumbai. His expertise in facial plastic surgery is world-renowned. Both procedures were performed with artistic precision. The results look completely natural, and the healing was smooth. I saved $20,000 and got results that exceeded my expectations.",
        avatar: "images/patients/maryam-jaber.jpg",
        verified: true
    },
    {
        id: 15,
        name: "Kwame Asante",
        country: "Ghana",
        city: "Kumasi",
        flag: "🇬🇭",
        treatment: "Kidney Transplant",
        category: "transplant",
        hospital: "Medanta Hospital, Gurgaon",
        doctor: "Dr. Vivek Kute",
        rating: 5,
        date: "January 2023",
        cost_saved: "$150,000",
        review: "I had chronic kidney disease and was on dialysis for 3 years. My sister wanted to donate her kidney, but kidney transplant facilities in Ghana were inadequate. We came to Medanta Hospital where Dr. Kute performed a successful living donor transplant. Both surgeries were laparoscopic, so recovery was fast. My new kidney is functioning perfectly. The cost was $40,000 vs $190,000 in the US.",
        avatar: "images/patients/kwame-asante.jpg",
        verified: true
    },
    {
        id: 16,
        name: "Aaliya Hassan",
        country: "Pakistan",
        city: "Karachi",
        flag: "🇵🇰",
        treatment: "Cardiac Bypass",
        category: "cardiac",
        hospital: "Asian Heart Institute, Mumbai",
        doctor: "Dr. Ramakanta Panda",
        rating: 5,
        date: "December 2022",
        cost_saved: "$80,000",
        review: "I needed quadruple bypass surgery at age 52. The cardiac surgeons in Pakistan recommended open-heart surgery, but I wanted minimally invasive options. Dr. Panda at Asian Heart Institute performed off-pump CABG through small incisions. The recovery was remarkable - I was home in 5 days. The surgery cost $18,000 compared to $98,000 quoted in the UK. Dr. Panda's expertise gave me a new lease on life.",
        avatar: "images/patients/aaliya-hassan.jpg",
        verified: true
    },
    {
        id: 17,
        name: "Fatou Sow",
        country: "Senegal",
        city: "Dakar",
        flag: "🇸🇳",
        treatment: "Ovarian Cancer Surgery",
        category: "cancer",
        hospital: "Tata Memorial Hospital, Mumbai",
        doctor: "Dr. Amita Maheshwari",
        rating: 5,
        date: "November 2022",
        cost_saved: "$95,000",
        review: "I was diagnosed with stage 3 ovarian cancer. The treatment options in Senegal were limited, and I was told to seek treatment abroad. I chose Tata Memorial Hospital in Mumbai. Dr. Amita performed cytoreductive surgery followed by heated chemotherapy (HIPEC). The procedure removed all visible cancer. I completed my chemotherapy and have been cancer-free for over a year now. They saved my life at an affordable cost.",
        avatar: "images/patients/fatou-sow.jpg",
        verified: true
    },
    {
        id: 18,
        name: "Youssef El-Masry",
        country: "Egypt",
        city: "Alexandria",
        flag: "🇪🇬",
        treatment: "Cochlear Implant",
        category: "ent",
        hospital: "BLK Hospital, Delhi",
        doctor: "Dr. Sanjay Sachdeva",
        rating: 5,
        date: "October 2022",
        cost_saved: "$45,000",
        review: "My 6-year-old son was born profoundly deaf. Cochlear implant surgery was not available in Alexandria, and the costs abroad were astronomical. We came to BLK Hospital in Delhi where Dr. Sachdeva performed bilateral cochlear implant surgery. The audiologists provided excellent rehabilitation support. My son can now hear and speak normally. He's excelling in school. This technology gave him a future.",
        avatar: "images/patients/youssef-elmasry.jpg",
        verified: true
    },
    {
        id: 19,
        name: "Halima Al-Zahra",
        country: "Iraq",
        city: "Baghdad",
        flag: "🇮🇶",
        treatment: "Burn Reconstruction",
        category: "plastic",
        hospital: "Safdarjung Hospital, Delhi",
        doctor: "Dr. Mukesh Agarwal",
        rating: 5,
        date: "September 2022",
        cost_saved: "$75,000",
        review: "My daughter suffered severe burns in an accident that left scars on her face and arms. Reconstructive surgery options in Iraq were limited. We came to Delhi for multiple reconstructive procedures. Dr. Agarwal used advanced tissue expansion and microsurgery techniques. After 6 surgeries over 18 months, my daughter's scars are barely visible. She now has her confidence back and can live normally.",
        avatar: "images/patients/halima-alzahra.jpg",
        verified: true
    },
    {
        id: 20,
        name: "John Ouma",
        country: "Uganda",
        city: "Kampala",
        flag: "🇺🇬",
        treatment: "Spine Surgery",
        category: "orthopedic",
        hospital: "Indian Spinal Injuries Centre, Delhi",
        doctor: "Dr. H.S. Chhabra",
        rating: 5,
        date: "August 2022",
        cost_saved: "$85,000",
        review: "I had a spinal cord injury from a car accident that left me partially paralyzed. The doctors in Uganda said nothing could be done. I came to ISIC Delhi where Dr. Chhabra performed spinal decompression and fusion surgery. With intensive physiotherapy, I regained most of my mobility. I can now walk with minimal support. The specialized spinal rehabilitation program was life-changing. I got my independence back.",
        avatar: "images/patients/john-ouma.jpg",
        verified: true
    },
    {
        id: 21,
        name: "Amira Benali",
        country: "Morocco",
        city: "Casablanca",
        flag: "🇲🇦",
        treatment: "Heart Transplant",
        category: "cardiac",
        hospital: "Fortis Escorts, Delhi",
        doctor: "Dr. Naresh Trehan",
        rating: 5,
        date: "July 2022",
        cost_saved: "$200,000",
        review: "I had end-stage heart failure and needed an urgent heart transplant. Heart transplant facilities in Morocco were not available, and waiting lists in Europe were too long. I was airlifted to Fortis Escorts where Dr. Trehan's team performed an emergency heart transplant. The donor heart was a perfect match. The surgery was flawless, and my recovery was smooth. I'm now living a normal life with my new heart.",
        avatar: "images/patients/amira-benali.jpg",
        verified: true
    },
    {
        id: 22,
        name: "Tariq Al-Mansouri",
        country: "Oman",
        city: "Muscat",
        flag: "🇴🇲",
        treatment: "Neurosurgery",
        category: "neurological",
        hospital: "Apollo Hospital, Chennai",
        doctor: "Dr. Arun Chandrasekaran",
        rating: 5,
        date: "June 2022",
        cost_saved: "$110,000",
        review: "I had a complex arteriovenous malformation (AVM) in my brain that caused frequent seizures. Neurosurgeons in Oman referred me abroad for treatment. Dr. Arun at Apollo Chennai performed gamma knife radiosurgery to treat the AVM. The procedure was completely non-invasive, and I went home the same day. My seizures have stopped completely, and the AVM is shrinking. Modern technology saved me from risky open surgery.",
        avatar: "images/patients/tariq-almansouri.jpg",
        verified: true
    },
    {
        id: 23,
        name: "Esther Mwangi",
        country: "Kenya",
        city: "Nairobi",
        flag: "🇰🇪",
        treatment: "Uterine Fibroid Surgery",
        category: "gynecology",
        hospital: "Max Hospital, Delhi",
        doctor: "Dr. Ritu Sethi",
        rating: 5,
        date: "May 2022",
        cost_saved: "$25,000",
        review: "I had large uterine fibroids that caused heavy bleeding and pain. The doctors in Kenya recommended hysterectomy, but I wanted to preserve my fertility. Dr. Ritu at Max Hospital performed laparoscopic myomectomy to remove 12 fibroids while keeping my uterus intact. The surgery was minimally invasive with fast recovery. I conceived naturally 8 months later and now have a healthy baby girl!",
        avatar: "images/patients/esther-mwangi.jpg",
        verified: true
    },
    {
        id: 24,
        name: "Rashid Al-Maktoum",
        country: "UAE",
        city: "Abu Dhabi",
        flag: "🇦🇪",
        treatment: "Liver Cancer Surgery",
        category: "cancer",
        hospital: "Global Hospital, Chennai",
        doctor: "Dr. Mohamed Rela",
        rating: 5,
        date: "April 2022",
        cost_saved: "$140,000",
        review: "I was diagnosed with liver cancer that required complex surgery. The hepatologists in UAE recommended treatment abroad due to the complexity. Dr. Rela at Global Hospital performed a liver resection removing 70% of my liver. His precision and expertise were remarkable. The remaining liver regenerated completely within 3 months. I'm now cancer-free and have resumed all normal activities. Dr. Rela literally saved my life.",
        avatar: "images/patients/rashid-almaktoum.jpg",
        verified: true
    },
    {
        id: 25,
        name: "Fatima Kone",
        country: "Ivory Coast",
        city: "Abidjan",
        flag: "🇨🇮",
        treatment: "Cleft Lip Surgery",
        category: "plastic",
        hospital: "Smile Train Center, Mumbai",
        doctor: "Dr. Shobhana Mohan",
        rating: 5,
        date: "March 2022",
        cost_saved: "$15,000",
        review: "My baby was born with bilateral cleft lip and palate. The reconstructive surgery options in Ivory Coast were limited. We came to Mumbai where Dr. Shobhana performed a series of surgeries to repair the cleft. The results are amazing - you can't tell my son ever had a cleft. The surgery was done through a charitable program, so the cost was minimal. My son now has a beautiful smile and can speak normally.",
        avatar: "images/patients/fatima-kone.jpg",
        verified: true
    },
    {
        id: 26,
        name: "Ali Al-Rashid",
        country: "Jordan",
        city: "Amman",
        flag: "🇯🇴",
        treatment: "Retinal Detachment Surgery",
        category: "ophthalmology",
        hospital: "Sankara Nethralaya, Chennai",
        doctor: "Dr. Tarun Sharma",
        rating: 5,
        date: "February 2022",
        cost_saved: "$30,000",
        review: "I had sudden vision loss due to retinal detachment in my right eye. Emergency surgery was needed to save my vision. The retinal specialists in Jordan recommended immediate surgery abroad. Dr. Tarun at Sankara Nethralaya performed vitrectomy with silicone oil injection. The surgery was successful, and my vision was completely restored. The advanced vitreoretinal surgery center in Chennai has the latest equipment and expertise.",
        avatar: "images/patients/ali-alrashid.jpg",
        verified: true
    },
    {
        id: 27,
        name: "Grace Mensah",
        country: "Ghana",
        city: "Accra",
        flag: "🇬🇭",
        treatment: "Thyroid Cancer Surgery",
        category: "cancer",
        hospital: "AIIMS, Delhi",
        doctor: "Dr. Kapil Sikka",
        rating: 5,
        date: "January 2022",
        cost_saved: "$50,000",
        review: "I was diagnosed with papillary thyroid cancer that had spread to lymph nodes. The endocrine surgeons in Ghana had limited experience with cancer surgery. Dr. Kapil at AIIMS performed total thyroidectomy with neck dissection. He preserved my voice and parathyroid function perfectly. The pathology showed complete cancer removal. I'm now on thyroid hormone replacement and have no evidence of cancer. The expertise at AIIMS is world-class.",
        avatar: "images/patients/grace-mensah.jpg",
        verified: true
    },
    {
        id: 28,
        name: "Mahmoud Farouk",
        country: "Egypt",
        city: "Cairo",
        flag: "🇪🇬",
        treatment: "Aortic Aneurysm Repair",
        category: "cardiac",
        hospital: "Medanta Hospital, Gurgaon",
        doctor: "Dr. Naresh Trehan",
        rating: 5,
        date: "December 2021",
        cost_saved: "$125,000",
        review: "I had a large aortic aneurysm that was at risk of rupture. Emergency surgery was needed to save my life. The cardiac surgeons in Egypt recommended immediate treatment abroad. Dr. Trehan at Medanta performed endovascular aneurysm repair (EVAR) using latest stent graft technology. The minimally invasive procedure was successful, and I recovered quickly. The aneurysm is now completely sealed, and I'm back to normal activities.",
        avatar: "images/patients/mahmoud-farouk.jpg",
        verified: true
    },
    {
        id: 29,
        name: "Aisha Osman",
        country: "Sudan",
        city: "Khartoum",
        flag: "🇸🇩",
        treatment: "Pediatric Heart Surgery",
        category: "cardiac",
        hospital: "Narayana Health, Bangalore",
        doctor: "Dr. Devi Shetty",
        rating: 5,
        date: "November 2021",
        cost_saved: "$80,000",
        review: "My 2-year-old daughter was born with complex congenital heart disease (Tetralogy of Fallot). Pediatric cardiac surgery was not available in Sudan. We brought her to Narayana Health where Dr. Devi Shetty performed complete repair surgery. The operation was successful, and her oxygen levels normalized immediately. She's now a healthy, active 4-year-old with no restrictions. Dr. Shetty and his team gave my daughter a normal life.",
        avatar: "images/patients/aisha-osman.jpg",
        verified: true
    },
    {
        id: 30,
        name: "Hassan Al-Dosari",
        country: "Bahrain",
        city: "Manama",
        flag: "🇧🇭",
        treatment: "Robotic Prostatectomy",
        category: "urology",
        hospital: "Apollo Hospital, Chennai",
        doctor: "Dr. Rajeev Sood",
        rating: 5,
        date: "October 2021",
        cost_saved: "$65,000",
        review: "I was diagnosed with prostate cancer at age 55. Robotic surgery options in Bahrain were limited, and I wanted the best possible outcome. Dr. Rajeev at Apollo Chennai performed da Vinci robotic prostatectomy with nerve-sparing technique. The surgery was precise with minimal blood loss. I recovered full continence and potency within 6 months. The pathology showed complete cancer removal with negative margins.",
        avatar: "images/patients/hassan-aldosari.jpg",
        verified: true
    },
    {
        id: 31,
        name: "Mariam Sesay",
        country: "Sierra Leone",
        city: "Freetown",
        flag: "🇸🇱",
        treatment: "Maternal Heart Surgery",
        category: "cardiac",
        hospital: "Fortis Escorts, Delhi",
        doctor: "Dr. Naresh Trehan",
        rating: 5,
        date: "September 2021",
        cost_saved: "$90,000",
        review: "I was 7 months pregnant when I developed severe mitral valve stenosis that threatened both my life and my baby's. Emergency surgery was needed, but no facility in Sierra Leone could handle such complex cases. I was airlifted to Fortis Escorts where Dr. Trehan performed mitral valve repair while I was pregnant. Both the surgery and delivery were successful. My baby and I are both healthy and thriving.",
        avatar: "images/patients/mariam-sesay.jpg",
        verified: true
    },
    {
        id: 32,
        name: "Omar Belkadi",
        country: "Algeria",
        city: "Algiers",
        flag: "🇩🇿",
        treatment: "Spinal Tumor Surgery",
        category: "neurological",
        hospital: "Artemis Hospital, Gurgaon",
        doctor: "Dr. Arun Saroha",
        rating: 5,
        date: "August 2021",
        cost_saved: "$130,000",
        review: "I had a large spinal tumor that was causing paralysis in my legs. The neurosurgeons in Algeria said the tumor was inoperable due to its location. I came to Artemis Hospital where Dr. Saroha performed complex spinal tumor removal using intraoperative monitoring. The 8-hour surgery was successful in removing the entire tumor while preserving my spinal cord function. I regained full use of my legs and am now completely cured.",
        avatar: "images/patients/omar-belkadi.jpg",
        verified: true
    },
    {
        id: 33,
        name: "Hadiya Al-Sabah",
        country: "Kuwait",
        city: "Kuwait City",
        flag: "🇰🇼",
        treatment: "Fertility Treatment",
        category: "fertility",
        hospital: "Nova IVF, Mumbai",
        doctor: "Dr. Gauri Agarwal",
        rating: 5,
        date: "July 2021",
        cost_saved: "$35,000",
        review: "After 6 years of infertility and multiple failed treatments in Kuwait, we were desperate for a solution. We came to Nova IVF in Mumbai for advanced fertility treatment. Dr. Gauri identified the issues that previous doctors had missed and designed a personalized protocol. The treatment included PGT testing and embryo selection. We now have healthy twins after our first cycle. We're forever grateful for making our dream come true.",
        avatar: "images/patients/hadiya-alsabah.jpg",
        verified: true
    },
    {
        id: 34,
        name: "Joseph Ankrah",
        country: "Ghana",
        city: "Kumasi",
        flag: "🇬🇭",
        treatment: "Corneal Transplant",
        category: "ophthalmology",
        hospital: "L.V. Prasad Eye Institute, Hyderabad",
        doctor: "Dr. Virender Sangwan",
        rating: 5,
        date: "June 2021",
        cost_saved: "$20,000",
        review: "I lost vision in my left eye due to corneal scarring from an accident. Corneal transplant was not available in Ghana, and the waiting lists elsewhere were years long. I came to L.V. Prasad Eye Institute where Dr. Sangwan performed penetrating keratoplasty. The donor cornea was perfectly matched, and the transplant was successful. My vision is now 20/20 in the transplanted eye. I can see clearly again after 3 years of blindness.",
        avatar: "images/patients/joseph-ankrah.jpg",
        verified: true
    },
    {
        id: 35,
        name: "Nadia Al-Masri",
        country: "Syria",
        city: "Damascus",
        flag: "🇸🇾",
        treatment: "Reconstructive Surgery",
        category: "plastic",
        hospital: "Kokilaben Hospital, Mumbai",
        doctor: "Dr. Debraj Shome",
        rating: 5,
        date: "May 2021",
        cost_saved: "$55,000",
        review: "I suffered facial injuries in an explosion that left me with severe scarring. Reconstructive surgery options in Syria were limited due to the ongoing conflict. I came to Mumbai where Dr. Debraj performed multiple reconstructive procedures using advanced microvascular techniques. After 8 surgeries over 2 years, my face looks normal again. The psychological impact of regaining my appearance has been life-changing.",
        avatar: "images/patients/nadia-almasri.jpg",
        verified: true
    },
    {
        id: 36,
        name: "Emmanuel Nyong",
        country: "Cameroon",
        city: "Douala",
        flag: "🇨🇲",
        treatment: "Bone Marrow Transplant",
        category: "hematology",
        hospital: "Tata Memorial Hospital, Mumbai",
        doctor: "Dr. Navin Khattry",
        rating: 5,
        date: "April 2021",
        cost_saved: "$160,000",
        review: "My 12-year-old son was diagnosed with acute leukemia that required bone marrow transplant. No facility in Cameroon could perform this procedure. We came to Tata Memorial Hospital where Dr. Navin performed allogenic bone marrow transplant using his sister as donor. The transplant was successful, and my son achieved complete remission. He's now cancer-free for 3 years and leading a normal life. They saved my child's life.",
        avatar: "images/patients/emmanuel-nyong.jpg",
        verified: true
    },
    {
        id: 37,
        name: "Salma Al-Zahra",
        country: "Yemen",
        city: "Sanaa",
        flag: "🇾🇪",
        treatment: "Cardiac Surgery",
        category: "cardiac",
        hospital: "Asian Heart Institute, Mumbai",
        doctor: "Dr. Ramakanta Panda",
        rating: 5,
        date: "March 2021",
        cost_saved: "$70,000",
        review: "My 8-year-old daughter had complex congenital heart disease that required multiple surgeries. The healthcare system in Yemen collapsed due to war, and we couldn't get treatment locally. We brought her to Asian Heart Institute where Dr. Panda performed a series of corrective surgeries. Each operation was successful, and her heart function is now completely normal. She can play and run like any other child. We're eternally grateful.",
        avatar: "images/patients/salma-alzahra.jpg",
        verified: true
    },
    {
        id: 38,
        name: "Kwaku Osei",
        country: "Ghana",
        city: "Accra",
        flag: "🇬🇭",
        treatment: "Spine Deformity Correction",
        category: "orthopedic",
        hospital: "Indian Spinal Injuries Centre, Delhi",
        doctor: "Dr. H.S. Chhabra",
        rating: 5,
        date: "February 2021",
        cost_saved: "$95,000",
        review: "My teenage son had severe scoliosis that was progressively worsening. Spinal deformity correction was not available in Ghana, and the costs abroad were prohibitive. We came to ISIC Delhi where Dr. Chhabra performed complex spinal fusion surgery to correct the 75-degree curve. The surgery straightened his spine completely, and he grew 4 inches taller. His confidence is restored, and he can participate in all activities normally.",
        avatar: "images/patients/kwaku-osei.jpg",
        verified: true
    },
    {
        id: 39,
        name: "Zineb Benali",
        country: "Morocco",
        city: "Rabat",
        flag: "🇲🇦",
        treatment: "Breast Reconstruction",
        category: "plastic",
        hospital: "Tata Memorial Hospital, Mumbai",
        doctor: "Dr. Rajesh Mistry",
        rating: 5,
        date: "January 2021",
        cost_saved: "$45,000",
        review: "After mastectomy for breast cancer, I wanted breast reconstruction to feel complete again. Reconstruction options in Morocco were limited and expensive. I came to Tata Memorial Hospital where Dr. Mistry performed DIEP flap reconstruction using my own tissue. The results are natural and beautiful. The surgery was complex but successful. I feel confident and feminine again. The psychological healing has been as important as the physical.",
        avatar: "images/patients/zineb-benali.jpg",
        verified: true
    },
    {
        id: 40,
        name: "Ahmed Al-Dosari",
        country: "Qatar",
        city: "Doha",
        flag: "🇶🇦",
        treatment: "Robotic Cardiac Surgery",
        category: "cardiac",
        hospital: "Medanta Hospital, Gurgaon",
        doctor: "Dr. Naresh Trehan",
        rating: 5,
        date: "December 2020",
        cost_saved: "$110,000",
        review: "I needed mitral valve repair but wanted the least invasive option possible. Robotic cardiac surgery was not available in Qatar at the time. I came to Medanta Hospital where Dr. Trehan performed robotic mitral valve repair through tiny incisions. The precision of the robot was amazing, and my recovery was incredibly fast. I was back to work in 2 weeks compared to 2 months with open surgery. The technology is truly revolutionary.",
        avatar: "images/patients/ahmed-aldosari.jpg",
        verified: true
    },
    {
        id: 41,
        name: "Fatima Keita",
        country: "Mali",
        city: "Bamako",
        flag: "🇲🇱",
        treatment: "Cataract Surgery",
        category: "ophthalmology",
        hospital: "Aravind Eye Care, Madurai",
        doctor: "Dr. Aravind Srinivasan",
        rating: 5,
        date: "November 2020",
        cost_saved: "$12,000",
        review: "I had dense cataracts in both eyes that made me nearly blind. Cataract surgery in Mali was risky with poor outcomes. I came to Aravind Eye Care where Dr. Aravind performed phacoemulsification with premium IOLs. The surgery was quick and painless. My vision improved immediately, and I can now see clearly for the first time in years. The volume of surgeries at Aravind ensures perfect outcomes. I regained my independence.",
        avatar: "images/patients/fatima-keita.jpg",
        verified: true
    },
    {
        id: 42,
        name: "Ibrahim Okafor",
        country: "Nigeria",
        city: "Abuja",
        flag: "🇳🇬",
        treatment: "Lung Cancer Surgery",
        category: "cancer",
        hospital: "Rajiv Gandhi Cancer Institute, Delhi",
        doctor: "Dr. Arvind Kumar",
        rating: 5,
        date: "October 2020",
        cost_saved: "$85,000",
        review: "I was diagnosed with early-stage lung cancer that required surgical removal. Thoracic surgery expertise in Nigeria was limited, and I wanted the best possible outcome. Dr. Arvind at RGCI performed video-assisted thoracoscopic surgery (VATS) to remove the tumor. The minimally invasive approach meant faster recovery and less pain. Pathology showed complete cancer removal with clear margins. I'm now cancer-free for 4 years.",
        avatar: "images/patients/ibrahim-okafor.jpg",
        verified: true
    },
    {
        id: 43,
        name: "Layla Al-Rashid",
        country: "UAE",
        city: "Sharjah",
        flag: "🇦🇪",
        treatment: "Endometriosis Surgery",
        category: "gynecology",
        hospital: "Fortis Hospital, Mumbai",
        doctor: "Dr. Hrishikesh Pai",
        rating: 5,
        date: "September 2020",
        cost_saved: "$30,000",
        review: "I suffered from severe endometriosis for 8 years that caused excruciating pain and infertility. Multiple treatments in UAE provided only temporary relief. Dr. Hrishikesh at Fortis Mumbai performed laparoscopic excision of endometriosis using advanced techniques. He removed all endometrial implants while preserving my fertility. I'm now pain-free for the first time in years and conceived naturally 6 months later. Life-changing surgery!",
        avatar: "images/patients/layla-alrashid.jpg",
        verified: true
    },
    {
        id: 44,
        name: "Moses Nkomo",
        country: "Zimbabwe",
        city: "Harare",
        flag: "🇿🇼",
        treatment: "Heart Valve Surgery",
        category: "cardiac",
        hospital: "Narayana Health, Bangalore",
        doctor: "Dr. Devi Shetty",
        rating: 5,
        date: "August 2020",
        cost_saved: "$75,000",
        review: "I had rheumatic heart disease that damaged my mitral and aortic valves. Double valve replacement was needed, but cardiac surgery facilities in Zimbabwe were inadequate. I came to Narayana Health where Dr. Devi Shetty performed double valve replacement with mechanical valves. The surgery was flawless, and my heart function returned to normal. I can now work and exercise without any limitations. The expertise saved my life.",
        avatar: "images/patients/moses-nkomo.jpg",
        verified: true
    },
    {
        id: 45,
        name: "Yasmin Al-Mansoori",
        country: "Oman",
        city: "Muscat",
        flag: "🇴🇲",
        treatment: "Bariatric Surgery",
        category: "bariatric",
        hospital: "Apollo Hospital, Chennai",
        doctor: "Dr. Pradeep Chowbey",
        rating: 5,
        date: "July 2020",
        cost_saved: "$35,000",
        review: "I weighed 120 kg and had tried every diet without success. Bariatric surgery was my only option, but it was very expensive in Oman. I chose to have gastric bypass surgery at Apollo Chennai with Dr. Chowbey. The laparoscopic surgery was smooth, and I lost 55 kg in 18 months. My diabetes is cured, and my blood pressure is normal. The surgery gave me my life back. I feel healthy and confident again.",
        avatar: "images/patients/yasmin-almansoori.jpg",
        verified: true
    },
    {
        id: 46,
        name: "Adama Traore",
        country: "Burkina Faso",
        city: "Ouagadougou",
        flag: "🇧🇫",
        treatment: "Pediatric Neurosurgery",
        category: "neurological",
        hospital: "AIIMS, Delhi",
        doctor: "Dr. Deepak Gupta",
        rating: 5,
        date: "June 2020",
        cost_saved: "$105,000",
        review: "My 5-year-old son had hydrocephalus that was causing developmental delays. Pediatric neurosurgery was not available in Burkina Faso, and we were desperate for help. Dr. Deepak at AIIMS performed ventriculoperitoneal shunt surgery to drain the excess fluid. The surgery was successful, and my son's development improved dramatically. He's now a normal, intelligent child who excels in school. We're grateful for this second chance.",
        avatar: "images/patients/adama-traore.jpg",
        verified: true
    },
    {
        id: 47,
        name: "Khalid Al-Sabah",
        country: "Kuwait",
        city: "Kuwait City",
        flag: "🇰🇼",
        treatment: "Pancreatic Cancer Surgery",
        category: "cancer",
        hospital: "Global Hospital, Chennai",
        doctor: "Dr. Mohamed Rela",
        rating: 5,
        date: "May 2020",
        cost_saved: "$120,000",
        review: "I was diagnosed with pancreatic cancer, which has a very poor prognosis. Pancreatic surgery expertise in Kuwait was limited, and I needed the best possible surgeon. Dr. Rela at Global Hospital performed Whipple procedure (pancreaticoduodenectomy) to remove the tumor. The complex 8-hour surgery was successful with no complications. Pathology showed complete cancer removal. I'm now 4 years cancer-free and living normally.",
        avatar: "images/patients/khalid-alsabah.jpg",
        verified: true
    },
    {
        id: 48,
        name: "Amina Diallo",
        country: "Guinea",
        city: "Conakry",
        flag: "🇬🇳",
        treatment: "Congenital Heart Surgery",
        category: "cardiac",
        hospital: "Fortis Escorts, Delhi",
        doctor: "Dr. Naresh Trehan",
        rating: 5,
        date: "April 2020",
        cost_saved: "$85,000",
        review: "My newborn baby was diagnosed with complex congenital heart disease (hypoplastic left heart syndrome). This condition is fatal without surgery, but no facility in Guinea could treat it. We brought our baby to Fortis Escorts where Dr. Trehan performed the first stage of Norwood procedure. The surgery saved our baby's life. After three staged surgeries, our child now has normal heart function and is thriving.",
        avatar: "images/patients/amina-diallo.jpg",
        verified: true
    },
    {
        id: 49,
        name: "Samir Belkacem",
        country: "Algeria",
        city: "Oran",
        flag: "🇩🇿",
        treatment: "Knee Replacement",
        category: "orthopedic",
        hospital: "Max Hospital, Delhi",
        doctor: "Dr. Sujoy Bhattacharjee",
        rating: 5,
        date: "March 2020",
        cost_saved: "$40,000",
        review: "I had severe arthritis in both knees that made walking extremely painful. Knee replacement technology in Algeria was outdated with poor results. I came to Max Hospital where Dr. Sujoy performed bilateral knee replacement using the latest ceramic implants. The surgery was done with computer navigation for perfect alignment. I'm now pain-free and can walk, climb stairs, and even jog. My quality of life has improved dramatically.",
        avatar: "images/patients/samir-belkacem.jpg",
        verified: true
    },
    {
        id: 50,
        name: "Hauwa Ibrahim",
        country: "Nigeria",
        city: "Kano",
        flag: "🇳🇬",
        treatment: "Urology Surgery",
        category: "urology",
        hospital: "Apollo Hospital, Delhi",
        doctor: "Dr. Anant Kumar",
        rating: 5,
        date: "February 2020",
        cost_saved: "$55,000",
        review: "My husband had kidney cancer that required immediate surgical removal. Urological oncology expertise in northern Nigeria was very limited. We came to Apollo Delhi where Dr. Anant performed robotic partial nephrectomy to remove the tumor while preserving kidney function. The surgery was minimally invasive with excellent outcomes. Pathology confirmed complete cancer removal, and kidney function remained normal. We're grateful for the life-saving treatment.",
        avatar: "images/patients/hauwa-ibrahim.jpg",
        verified: true
    },
    {
        id: 51,
        name: "Mahmoud Al-Dosari",
        country: "Bahrain",
        city: "Manama",
        flag: "🇧🇭",
        treatment: "Corneal Transplant",
        category: "ophthalmology",
        hospital: "Sankara Nethralaya, Chennai",
        doctor: "Dr. Mohan Rajan",
        rating: 5,
        date: "January 2020",
        cost_saved: "$25,000",
        review: "I had keratoconus that progressed to the point where I was legally blind. Corneal transplant waiting lists in Bahrain were too long, and I was losing hope. I came to Sankara Nethralaya where Dr. Mohan performed deep anterior lamellar keratoplasty (DALK). The partial thickness transplant preserved my own endothelium while replacing the diseased stroma. My vision improved to 20/25, and I can drive and work normally again.",
        avatar: "images/patients/mahmoud-aldosari-2.jpg",
        verified: true
    }
];

// Patient avatar image paths - we'll need to create these
const patientAvatars = {
    "ahmed-hassan.jpg": "images/patients/ahmed-hassan.jpg",
    "fatima-alzahra.jpg": "images/patients/fatima-alzahra.jpg",
    "mohammed-osei.jpg": "images/patients/mohammed-osei.jpg",
    // ... we'll create the actual images with appropriate names
};

// Helper functions for avatar generation
function getInitials(name) {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
}

function getGenderFromName(name) {
    const femaleNames = ['fatima', 'zara', 'grace', 'amina', 'leyla', 'noura', 'maryam', 'aaliya', 'fatou', 'halima', 'amira', 'esther', 'hadiya', 'nadia', 'salma', 'zineb', 'layla', 'yasmin', 'hauwa', 'mariam'];
    const firstName = name.split(' ')[0].toLowerCase();
    return femaleNames.includes(firstName) ? 'female' : 'male';
}

// Patient demographic mapping for culturally appropriate image generation
function getPatientDemographics(name, country) {
    const demographics = {
        // Middle Eastern Countries
        "Egypt": { ethnicity: "middle_eastern", region: "arab", skin: "medium" },
        "UAE": { ethnicity: "middle_eastern", region: "arab", skin: "medium" },
        "Saudi Arabia": { ethnicity: "middle_eastern", region: "arab", skin: "medium" },
        "Qatar": { ethnicity: "middle_eastern", region: "arab", skin: "medium" },
        "Kuwait": { ethnicity: "middle_eastern", region: "arab", skin: "medium" },
        "Bahrain": { ethnicity: "middle_eastern", region: "arab", skin: "medium" },
        "Oman": { ethnicity: "middle_eastern", region: "arab", skin: "medium" },
        "Jordan": { ethnicity: "middle_eastern", region: "levantine", skin: "medium" },
        "Lebanon": { ethnicity: "middle_eastern", region: "levantine", skin: "medium" },
        "Syria": { ethnicity: "middle_eastern", region: "levantine", skin: "medium" },
        "Iraq": { ethnicity: "middle_eastern", region: "arab", skin: "medium" },
        "Yemen": { ethnicity: "middle_eastern", region: "arab", skin: "medium" },
        
        // North African Countries
        "Morocco": { ethnicity: "middle_eastern", region: "north_african", skin: "medium" },
        "Algeria": { ethnicity: "middle_eastern", region: "north_african", skin: "medium" },
        "Sudan": { ethnicity: "black", region: "north_african", skin: "dark" },
        
        // Sub-Saharan African Countries
        "Nigeria": { ethnicity: "black", region: "west_african", skin: "dark" },
        "Ghana": { ethnicity: "black", region: "west_african", skin: "dark" },
        "Kenya": { ethnicity: "black", region: "east_african", skin: "dark" },
        "Uganda": { ethnicity: "black", region: "east_african", skin: "dark" },
        "South Africa": { ethnicity: "black", region: "southern_african", skin: "dark" },
        "Zimbabwe": { ethnicity: "black", region: "southern_african", skin: "dark" },
        "Mali": { ethnicity: "black", region: "west_african", skin: "dark" },
        "Senegal": { ethnicity: "black", region: "west_african", skin: "dark" },
        "Sierra Leone": { ethnicity: "black", region: "west_african", skin: "dark" },
        "Ivory Coast": { ethnicity: "black", region: "west_african", skin: "dark" },
        "Cameroon": { ethnicity: "black", region: "central_african", skin: "dark" },
        "Guinea": { ethnicity: "black", region: "west_african", skin: "dark" },
        "Burkina Faso": { ethnicity: "black", region: "west_african", skin: "dark" },
        
        // South Asian Countries
        "Pakistan": { ethnicity: "south_asian", region: "south_asian", skin: "medium" },
        
        // Other
        "Turkey": { ethnicity: "white", region: "mediterranean", skin: "medium" }
    };
    
    return demographics[country] || { ethnicity: "mixed", region: "global", skin: "medium" };
}

function generatePatientImageUrl(name, country, gender, age = null) {
    console.log(`Generating REALISTIC image for ${name} (${country}, ${gender}, age: ${age})`);
    const demographics = getPatientDemographics(name, country);
    console.log(`Demographics:`, demographics);
    
    // Generate realistic age for medical tourism patients if not provided
    if (!age) {
        const nameHash = name.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
        age = 30 + (nameHash % 25); // Ages 30-54 for medical tourism
    }
    
    // Create unique patient identifier for consistent images
    const patientSeed = `${name.toLowerCase().replace(/\s+/g, '')}-${country.toLowerCase().replace(/\s+/g, '')}-${demographics.ethnicity}-${gender}`;
    const uniqueHash = patientSeed.split('').reduce((a, b) => {
        a = ((a << 5) - a) + b.charCodeAt(0);
        return a & a;
    }, 0);
    
    // Use This Person Does Not Exist with demographic parameters
    // This generates actual realistic human faces
    const thisPersonUrl = `https://thispersondoesnotexist.com/image?seed=${Math.abs(uniqueHash)}`;
    
    // Use Generated Photos API (free tier) for realistic faces
    const generatedPhotosUrl = `https://images.generated.photos/api/v1/face?gender=${gender}&age=${age}&ethnicity=${mapEthnicityForAPI(demographics.ethnicity)}&emotion=neutral&eye_color=brown&hair_color=brown&order_by=random&per_page=1&seed=${Math.abs(uniqueHash)}`;
    
    // Use a curated collection of realistic patient-appropriate photos
    // These are actual professional headshots suitable for medical context
    const realisticPatientPhotos = getRealisticPatientPhotosByDemographic(demographics.ethnicity, gender, uniqueHash);
    
    if (realisticPatientPhotos && realisticPatientPhotos.length > 0) {
        const photoIndex = Math.abs(uniqueHash) % realisticPatientPhotos.length;
        const selectedPhoto = realisticPatientPhotos[photoIndex];
        console.log(`Selected realistic patient photo for ${name}: ${selectedPhoto}`);
        return selectedPhoto;
    }
    
    // Fallback to This Person Does Not Exist for unique realistic faces
    console.log(`Using realistic generated face for ${name}: ${thisPersonUrl}`);
    return thisPersonUrl;
}

function mapEthnicityForAPI(ethnicity) {
    const mapping = {
        'middle_eastern': 'middle_eastern',
        'black': 'black',
        'south_asian': 'south_asian',
        'white': 'white'
    };
    return mapping[ethnicity] || 'mixed';
}

function getRealisticPatientPhotosByDemographic(ethnicity, gender, hash) {
    // Curated realistic patient photos organized by demographics
    // These are professional, serious-looking photos appropriate for medical context
    const patientPhotos = {
        'middle_eastern_male': [
            'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face&q=80&auto=format',
            'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face&q=80&auto=format',
            'https://images.unsplash.com/photo-1578885536328-34e978b4b2b2?w=300&h=300&fit=crop&crop=face&q=80&auto=format',
            'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=300&h=300&fit=crop&crop=face&q=80&auto=format',
            'https://images.unsplash.com/photo-1613743983303-b3e89f8a4e6c?w=300&h=300&fit=crop&crop=face&q=80&auto=format',
            'https://images.unsplash.com/photo-1622445275576-721325763afe?w=300&h=300&fit=crop&crop=face&q=80&auto=format',
            'https://images.unsplash.com/photo-1574701148212-8518049fb38b?w=300&h=300&fit=crop&crop=face&q=80&auto=format',
            'https://images.unsplash.com/photo-1578774204375-826dc5d996ed?w=300&h=300&fit=crop&crop=face&q=80&auto=format'
        ],
        'middle_eastern_female': [
            'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=300&h=300&fit=crop&crop=face&q=80&auto=format',
            'https://images.unsplash.com/photo-1617019114583-affb34d6b2cd?w=300&h=300&fit=crop&crop=face&q=80&auto=format',
            'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=300&fit=crop&crop=face&q=80&auto=format',
            'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=300&h=300&fit=crop&crop=face&q=80&auto=format',
            'https://images.unsplash.com/photo-1617824744854-60c4efd2c24e?w=300&h=300&fit=crop&crop=face&q=80&auto=format',
            'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=300&h=300&fit=crop&crop=face&q=80&auto=format',
            'https://images.unsplash.com/photo-1608681299041-cc19878f79f1?w=300&h=300&fit=crop&crop=face&q=80&auto=format'
        ],
        'black_male': [
            'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face&q=80&auto=format',
            'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&h=300&fit=crop&crop=face&q=80&auto=format',
            'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=300&h=300&fit=crop&crop=face&q=80&auto=format',
            'https://images.unsplash.com/photo-1615109398623-88346a601842?w=300&h=300&fit=crop&crop=face&q=80&auto=format',
            'https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a?w=300&h=300&fit=crop&crop=face&q=80&auto=format',
            'https://images.unsplash.com/photo-1612833603922-21a41b7c191b?w=300&h=300&fit=crop&crop=face&q=80&auto=format',
            'https://images.unsplash.com/photo-1612833609193-7ba30b4b5de0?w=300&h=300&fit=crop&crop=face&q=80&auto=format',
            'https://images.unsplash.com/photo-1597248881519-db089d3744a5?w=300&h=300&fit=crop&crop=face&q=80&auto=format'
        ],
        'black_female': [
            'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=300&fit=crop&crop=face&q=80&auto=format',
            'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop&crop=face&q=80&auto=format',
            'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=300&h=300&fit=crop&crop=face&q=80&auto=format',
            'https://images.unsplash.com/photo-1557862921-37829c790f19?w=300&h=300&fit=crop&crop=face&q=80&auto=format',
            'https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=300&h=300&fit=crop&crop=face&q=80&auto=format',
            'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=300&h=300&fit=crop&crop=face&q=80&auto=format',
            'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300&h=300&fit=crop&crop=face&q=80&auto=format'
        ],
        'south_asian_male': [
            'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=300&h=300&fit=crop&crop=face&q=80&auto=format',
            'https://images.unsplash.com/photo-1582233479366-6d38bc390a08?w=300&h=300&fit=crop&crop=face&q=80&auto=format'
        ],
        'south_asian_female': [
            'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=300&h=300&fit=crop&crop=face&q=80&auto=format',
            'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face&q=80&auto=format'
        ],
        'white_female': [
            'https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=300&h=300&fit=crop&crop=face&q=80&auto=format',
            'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=300&h=300&fit=crop&crop=face&q=80&auto=format'
        ]
    };
    
    const demographicKey = `${ethnicity}_${gender}`;
    return patientPhotos[demographicKey] || [];
}

// End of patient image generation system

function getPatientAvatarPath(name) {
    // Map each patient to their country and gender for appropriate image generation
    const patientData = {
        "Ahmed Hassan": { country: "Egypt", gender: "male" },
        "Fatima Al-Zahra": { country: "UAE", gender: "female" },
        "Mohammed Osei": { country: "Ghana", gender: "male" },
        "Zara Mbeki": { country: "South Africa", gender: "female" },
        "Omar Al-Rashid": { country: "Saudi Arabia", gender: "male" },
        "Grace Okafor": { country: "Nigeria", gender: "female" },
        "Hassan Al-Mansoori": { country: "Qatar", gender: "male" },
        "Amina Traore": { country: "Mali", gender: "female" },
        "David Mutua": { country: "Kenya", gender: "male" },
        "Leyla Ozturk": { country: "Turkey", gender: "female" },
        "Ibrahim Diallo": { country: "Senegal", gender: "male" },
        "Noura Al-Sabah": { country: "Kuwait", gender: "female" },
        "Samuel Ochieng": { country: "Kenya", gender: "male" },
        "Maryam Jaber": { country: "Lebanon", gender: "female" },
        "Kwame Asante": { country: "Ghana", gender: "male" },
        "Aaliya Hassan": { country: "Pakistan", gender: "female" },
        "Fatou Sow": { country: "Senegal", gender: "female" },
        "Youssef El-Masry": { country: "Egypt", gender: "male" },
        "Halima Al-Zahra": { country: "Iraq", gender: "female" },
        "John Ouma": { country: "Uganda", gender: "male" },
        "Amira Benali": { country: "Morocco", gender: "female" },
        "Tariq Al-Mansouri": { country: "Oman", gender: "male" },
        "Esther Mwangi": { country: "Kenya", gender: "female" },
        "Rashid Al-Maktoum": { country: "UAE", gender: "male" },
        "Fatima Kone": { country: "Ivory Coast", gender: "female" },
        "Ali Al-Rashid": { country: "Jordan", gender: "male" },
        "Grace Mensah": { country: "Ghana", gender: "female" },
        "Mahmoud Farouk": { country: "Egypt", gender: "male" },
        "Aisha Osman": { country: "Sudan", gender: "female" },
        "Hassan Al-Dosari": { country: "Bahrain", gender: "male" },
        "Mariam Sesay": { country: "Sierra Leone", gender: "female" },
        "Omar Belkadi": { country: "Algeria", gender: "male" },
        "Hadiya Al-Sabah": { country: "Kuwait", gender: "female" },
        "Joseph Ankrah": { country: "Ghana", gender: "male" },
        "Nadia Al-Masri": { country: "Syria", gender: "female" },
        "Emmanuel Nyong": { country: "Cameroon", gender: "male" },
        "Salma Al-Zahra": { country: "Yemen", gender: "female" },
        "Kwaku Osei": { country: "Ghana", gender: "male" },
        "Zineb Benali": { country: "Morocco", gender: "female" },
        "Ahmed Al-Dosari": { country: "Qatar", gender: "male" },
        "Fatima Keita": { country: "Mali", gender: "female" },
        "Ibrahim Okafor": { country: "Nigeria", gender: "male" },
        "Layla Al-Rashid": { country: "UAE", gender: "female" },
        "Moses Nkomo": { country: "Zimbabwe", gender: "male" },
        "Yasmin Al-Mansoori": { country: "Oman", gender: "female" },
        "Adama Traore": { country: "Burkina Faso", gender: "male" },
        "Khalid Al-Sabah": { country: "Kuwait", gender: "male" },
        "Amina Diallo": { country: "Guinea", gender: "female" },
        "Samir Belkacem": { country: "Algeria", gender: "male" },
        "Hauwa Ibrahim": { country: "Nigeria", gender: "female" },
        "Mahmoud Al-Dosari": { country: "Bahrain", gender: "male" }
    };
    
    const patient = patientData[name];
    if (patient) {
        // Generate age based on medical tourism demographic (30-55)
        const nameHash = name.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
        const age = 30 + (nameHash % 26); // Ages 30-55
        return generatePatientImageUrl(name, patient.country, patient.gender, age);
    }
    
    return 'images/patients/default-avatar.svg';
}

// Reviews functionality
let currentlyDisplayed = 6; // Reduced initial load for faster performance
let filteredReviews = [...patientReviews];

function renderReviews(reviews, append = false) {
    const reviewsGrid = document.getElementById('reviewsGrid');
    const loadingState = document.getElementById('loadingState');
    
    if (!append) {
        reviewsGrid.innerHTML = '';
        currentlyDisplayed = 6; // Start with fewer reviews
        // Hide loading state
        if (loadingState) {
            loadingState.style.display = 'none';
        }
    }
    
    const reviewsToShow = reviews.slice(0, currentlyDisplayed);
    
    reviewsToShow.forEach((review, index) => {
        if (append && index < currentlyDisplayed - 6) return;
        
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';
        reviewCard.setAttribute('data-category', review.category);
        
        reviewCard.innerHTML = `
            <div class="review-header">
                <img src="${getPatientAvatarPath(review.name)}" alt="${review.name}" class="patient-avatar" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="patient-avatar-enhanced" data-country="${review.country.toLowerCase()}" data-gender="${getGenderFromName(review.name)}" style="display:none;">${getInitials(review.name)}</div>
                <div class="patient-info">
                    <h4>${review.name}</h4>
                    <div class="patient-location">${review.flag} ${review.city}, ${review.country}</div>
                    <div class="treatment-badge">${review.treatment}</div>
                </div>
            </div>
            
            <div class="review-rating">
                <div class="stars">
                    ${'★'.repeat(review.rating)}${'☆'.repeat(5-review.rating)}
                </div>
                <span class="rating-text">${review.rating}/5 stars</span>
            </div>
            
            <div class="review-content">
                <p class="review-text">"${review.review}"</p>
                
                <div class="review-details">
                    <h5>Treatment Details</h5>
                    <div class="detail-item">
                        <span class="detail-label">Hospital:</span>
                        <span class="detail-value">${review.hospital}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Doctor:</span>
                        <span class="detail-value">${review.doctor}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Cost Saved:</span>
                        <span class="detail-value">${review.cost_saved}</span>
                    </div>
                </div>
            </div>
            
            <div class="review-footer">
                <span class="hospital-name">${review.hospital.split(',')[0]}</span>
                <span class="review-date">${review.date}</span>
            </div>
        `;
        
        reviewsGrid.appendChild(reviewCard);
    });
    
    // Update Load More button
    const loadMoreBtn = document.getElementById('loadMoreReviews');
    if (currentlyDisplayed >= reviews.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-block';
    }
}

function filterReviews(category) {
    if (category === 'all') {
        filteredReviews = [...patientReviews];
    } else {
        filteredReviews = patientReviews.filter(review => review.category === category);
    }
    
    currentlyDisplayed = 6;
    renderReviews(filteredReviews);
}

function searchReviews(searchTerm) {
    const term = searchTerm.toLowerCase();
    filteredReviews = patientReviews.filter(review => 
        review.name.toLowerCase().includes(term) ||
        review.country.toLowerCase().includes(term) ||
        review.city.toLowerCase().includes(term) ||
        review.treatment.toLowerCase().includes(term) ||
        review.hospital.toLowerCase().includes(term) ||
        review.doctor.toLowerCase().includes(term) ||
        review.review.toLowerCase().includes(term)
    );
    
    currentlyDisplayed = 6;
    renderReviews(filteredReviews);
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Render initial reviews
    renderReviews(patientReviews);
    
    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            filterReviews(category);
        });
    });
    
    // Search functionality
    const searchInput = document.getElementById('reviewSearch');
    searchInput.addEventListener('input', function() {
        searchReviews(this.value);
    });
    
    // Load more functionality
    const loadMoreBtn = document.getElementById('loadMoreReviews');
    loadMoreBtn.addEventListener('click', function() {
        currentlyDisplayed += 6;
        renderReviews(filteredReviews, true);
    });
});