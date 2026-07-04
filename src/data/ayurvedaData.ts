export interface Treatment {
  id: string;
  name: string;
  sanskrit: string;
  tagline: string;
  image: string;
  duration: string;
  price: string;
  benefits: string[];
  indications: string[];
  description: string;
  procedure: string;
  aftercare: string;
}

export interface Condition {
  id: string;
  name: string;
  tagline: string;
  image: string;
  description: string;
  symptoms: string[];
  recommendedTherapies: string[];
  dietaryAdvice: string[];
}

export interface Package {
  id: string;
  name: string;
  duration: string;
  tagline: string;
  price: string;
  stay: string;
  meals: string;
  consultation: string;
  treatments: string;
  features: string[];
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  image: string;
  experience: string;
  qualification: string;
  specialization: string;
  awards: string[];
  bio: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
}

export const TREATMENTS: Treatment[] = [
  {
    id: "vamana",
    name: "Vamana",
    sanskrit: "वमन (Therapeutic Emesis)",
    tagline: "The Divine Purification of Respiratory and Kapha Elements",
    image: "https://images.pexels.com/photos/6187852/pexels-photo-6187852.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    duration: "75 Mins per active session (Part of a 7-day preparation flow)",
    price: "$195 / session (₹15,000)",
    benefits: [
      "Clears stubborn toxins from the respiratory tract",
      "Enhances metabolic fire (Agni) and strengthens digestion",
      "Reduces chronic allergic responses and skin hypersensitivity",
      "Balances chest congestion, bronchial asthma, and sinus inflammation"
    ],
    indications: [
      "Bronchial Asthma & Allergies",
      "Chronic Sinusitis & Rhinitis",
      "Psoriasis & Eczema",
      "Thyroid sluggishness and metabolic stagnation"
    ],
    description: "Vamana is the refined, highly supervised therapeutic cleansing of the Kapha dosha, localized in the chest, lungs, and stomach. Under strict medical oversight, the patient undergoes several days of internal oleation (drinking medicated ghee) and herbal sudation (sweating) to loosen deep-seated cellular toxins. On the primary morning of therapy, specific emetic herbs like Madanaphala, licorice, and honey are administered, triggering a controlled, painless expulsion. This resets the entire metabolic rate, boosts cellular oxygenation, and establishes deep mental clarity.",
    procedure: "The treatment starts with 'Snehapana' (internal lubrication) over 3-7 days, followed by external steam massage. Finally, the therapeutic herbal decoction is consumed under the warm, comforting guidance of our senior physicians who read pulse patterns throughout.",
    aftercare: "A strict dietary transition called 'Samsarjana Krama' is followed for 3 to 5 days, starting with warm rice soup (peya) and gradually introducing light spiced lentils to safeguard the renewed digestive fire."
  },
  {
    id: "virechana",
    name: "Virechana",
    sanskrit: "विरेचन (Therapeutic Purgation)",
    tagline: "Unleash Cellular Vitality and Purge Pit-related Blood Toxins",
    image: "https://images.pexels.com/photos/6629614/pexels-photo-6629614.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    duration: "90 Mins per therapy session",
    price: "$210 / session (₹16,500)",
    benefits: [
      "Flushes out bile accumulations and hepatic congestion",
      "Deeply purifies blood (Rakta) and lymphatic fluids",
      "Cures hormonal acne, dermatitis, and hyperpigmentation",
      "Restores natural liver enzymes and metabolic consistency"
    ],
    indications: [
      "Acne, Dermatitis, Urticaria & Eczema",
      "Hyperacidity, IBS, and chronic constipation",
      "Gout, high uric acid levels, and inflammatory joint swelling",
      "PCOS and hot flashes during menopause"
    ],
    description: "Virechana targets the seat of Pitta dosha—the small intestine, liver, and spleen. It is a highly specialized cleansing routine that sweeps cellular metabolic waste products directly into the gastrointestinal tract and expels them gently. It cools hot inflammatory pathways across the body, rendering the skin radiant, optimizing bile secretions, and relieving central vascular congestion.",
    procedure: "Warm medicated oils are massaged in long sweeping strokes followed by specialized steam boxes. This is followed by the ingestion of organic laxative agents such as Senna, Trivrit, or Castor oil prepared with premium Himalayan herbs.",
    aftercare: "Sip warm water seasoned with fennel. Refrain from direct sunlight, cold winds, and strenuous intellectual tasks. Rest in our garden pavilions under a cashmere wrap."
  },
  {
    id: "basti",
    name: "Basti",
    sanskrit: "बस्ति (Medicated Enema Therapy)",
    tagline: "The Mother of All Panchakarma Treatments for Neurological & Vata Balance",
    image: "https://images.pexels.com/photos/6187653/pexels-photo-6187653.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    duration: "60 Mins per session",
    price: "$225 / session (₹18,000)",
    benefits: [
      "Soothes and nourishes the colon (the primary seat of Vata)",
      "Rehydrates degenerated joint cartilages and spinal discs",
      "Promotes deep, sound sleep and regulates autonomic nervous responses",
      "Improves bone density and relieves nerve compressions (Sciatica)"
    ],
    indications: [
      "Degenerative Arthritis & Slip Disc / Sciatica",
      "Chronic Stress, Insomnia, and Nervous exhaustion",
      "Neurological tremors and hemiplegic support",
      "Severe dry skin and premature aging"
    ],
    description: "Basti is considered the most powerful of the five therapies as it directly regulates 'Vata'—the primary dosha responsible for all bodily movements, nerve impulses, and tissue degeneration. Using custom-blended warm oils (Anuvasana Basti) and complex herbal decoctions containing honey, rock salt, and herbal pastes (Niruha Basti), this therapy rehydrates the colon. Because the colon is linked directly to bone metabolism and nervous transmission, Basti is a fountain of youth.",
    procedure: "A soothing lower back massage with warm ashwagandha oil is administered, followed by a local herbal heating pad. The warm medicated lipid or decoction is gently introduced, allowing deep absorption into the visceral membranes.",
    aftercare: "Rest quietly for 45 minutes. Consume warm basmati rice cooked with organic hand-churned A2 ghee and light mung dhal."
  },
  {
    id: "nasya",
    name: "Nasya",
    sanskrit: "नस्य (Nasal Infusion Therapy)",
    tagline: "Clearing the Cognitive Channels and Restoring Inner Vision",
    image: "https://images.pexels.com/photos/6629603/pexels-photo-6629603.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    duration: "45 Mins per session",
    price: "$150 / session (₹11,500)",
    benefits: [
      "Relieves chronic migraine, tension headaches, and head congestion",
      "Improves memory, sensory acuity, and hormonal pituitary function",
      "Prevents premature graying of hair and stimulates hair follicles",
      "Eases neck stiffness and frozen shoulder"
    ],
    indications: [
      "Migraine & Hemicrania",
      "Insomnia, Brain Fog & Memory fatigue",
      "Allergic Bronchitis and vocal cord congestion",
      "Thyroid hyper/hypo imbalance"
    ],
    description: "In Ayurvedic science, the nose is the direct gateway to the brain and consciousness. Nasya therapy involves the precision instillation of warm medicated herbal extracts or oils (such as Kumkumadi or Anu Taila) into the nasal passages. Prior to instillation, the head, face, neck, and chest are deeply massaged with specific oils and heated with warm moist steam. This opens up the cranial micro-capillaries and eases intracranial pressure.",
    procedure: "Warm facial massage focusing on vital acupuncture-like 'Marma' points, followed by localized herbal inhalation. Droplets of potent oils are instilled as you breathe deeply, culminating in a warm herbal gargle.",
    aftercare: "Avoid drinking cold water or exposing yourself to air conditioners. Enjoy a warm cup of Ginger-Tulsi infusion in our quiet sunroom."
  },
  {
    id: "raktamokshana",
    name: "Raktamokshana",
    sanskrit: "रक्तमोक्षण (Blood Purification)",
    tagline: "Surgical-grade Natural Purification for Deep Hematological Cleanse",
    image: "https://images.pexels.com/photos/37719545/pexels-photo-37719545.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    duration: "95 Mins per session",
    price: "$250 / session (₹20,000)",
    benefits: [
      "Instantly relieves localized severe inflammatory skin pain",
      "Detoxifies the deepest lymphatic pathways and neutralizes acidity",
      "Improves systemic blood circulation and skin radiance",
      "Alleviates localized swelling and high-pressure vascular blockages"
    ],
    indications: [
      "Severe Eczema, Pustular Acne, and Psoriasis flares",
      "Chronic varicose ulcers and deep vein thrombosis symptoms",
      "Spleen or liver enlargement with skin discoloration",
      "Acute gouty arthritis pain in extremities"
    ],
    description: "Raktamokshana is the highly technical process of blood purification, reserved for severe, deep-seated toxic conditions arising from highly corrupted Pitta and Rakta (blood) tissues. Done utilizing sterile medicinal leeches (Jalaukavacharana) or precise localized cupping, this therapy removes micro-congestions, cellular metabolic sludge, and inflammatory cytokines directly from the affected site. The healing is immediate, natural, and profound.",
    procedure: "The specific skin area is cleansed with organic anti-septic herbs. Highly sterile, therapeutic leeches or custom glass cups are applied to draw out the localized impurities. The process is completely painless as the leech secretes natural hirudin and analgesic enzymes.",
    aftercare: "The site is dressed with organic turmeric, sandalwood, and sterile linen. Avoid spices, sea baths, or alcohol for 7 days."
  }
];

export const CONDITIONS: Condition[] = [
  {
    id: "arthritis",
    name: "Arthritis & Joint Degeneration",
    tagline: "Restore Fluidity, Rebuild Cartilage, and Relieve Inflammatory Pain",
    image: "https://images.pexels.com/photos/6187423/pexels-photo-6187423.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    description: "Ayurveda maps arthritis to two main imbalances: 'Sandhigata Vata' (wear-and-tear osteoarthritis) and 'Amavata' (toxic-driven rheumatoid arthritis). Instead of masking joint pain with temporary pain inhibitors, we eliminate the localized toxic buildup (Ama) and rehydrate dry joint cavities with therapeutic herb-infused lipids that structurally nourish the synovial membranes.",
    symptoms: [
      "Morning stiffness lasting over 30 minutes",
      "Swelling, heat, and tenderness in fingers, knees, or spinal joints",
      "Cracking sounds (crepitus) on movement",
      "Fatigue and digestive heaviness"
    ],
    recommendedTherapies: ["Basti", "Virechana", "Janu Basti (local oil pool)", "Kizhi (hot herbal bundle massage)"],
    dietaryAdvice: [
      "Incorporate fresh ginger, garlic, and turmeric in daily meals.",
      "Avoid Nightshade vegetables (tomatoes, potatoes, eggplants) during acute flare-ups.",
      "Drink warm water mixed with a teaspoon of organic castor oil at bedtime."
    ]
  },
  {
    id: "back-pain",
    name: "Back Pain & Slip Disc",
    tagline: "Realign the Spine, Rehydrate Intervertebral Discs Naturally",
    image: "https://images.pexels.com/photos/37719647/pexels-photo-37719647.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    description: "Vertebral stiffness and disc herniations are primary Vata imbalances where the local cushion-like discs lose moisture, compress nerves, and trigger radiating spasm pain. Our clinical focus centers on localized deep-tissue oleation (Kati Basti) combined with systemic Basti to restore structural flexibility and strengthen the supportive lumbar muscles.",
    symptoms: [
      "Sharp, radiating shooting pain down the leg (Sciatica)",
      "Inability to bend forward without severe muscular spasm",
      "Numbness in toes and lower spine stiffness",
      "Muscle atrophy in the legs"
    ],
    recommendedTherapies: ["Basti", "Kati Basti (spinal oil retention)", "Elakizhi (leaf bundle sweat)"],
    dietaryAdvice: [
      "Eat warm, freshly cooked soups and stews seasoned with cumin.",
      "Avoid dry, cold, or crunchy raw foods which aggravate Vata.",
      "Consume warm milk with garlic and organic ghee before sleeping."
    ]
  },
  {
    id: "migraine",
    name: "Migraine & Tension Headaches",
    tagline: "Calm Cranial Pressures and Clear the Sinus Channels of Stagnation",
    image: "https://images.pexels.com/photos/6187852/pexels-photo-6187852.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    description: "Migraines are characterized as 'Ardhavabhedaka' in Ayurveda, arising from a combination of toxic digestive vapors (Ama) and intense Pitta (heat) disrupting cerebral circulation. By applying cranial-cleansing Nasya and blood-cooling Virechana, we balance the nervous system and relieve chronic intracranial pressure.",
    symptoms: [
      "Throbbing one-sided headache with extreme light sensitivity",
      "Nausea and visual aura disturbances before an attack",
      "Tension in neck muscles radiating to the temples",
      "Irritability and sleep disruption"
    ],
    recommendedTherapies: ["Nasya", "Virechana", "Shirodhara (continuous oil stream)", "Shirolepa (herbal head paste)"],
    dietaryAdvice: [
      "Avoid aged cheeses, fermented foods, vinegar, and overly spicy dishes.",
      "Sip warm fennel and coriander tea throughout the afternoon.",
      "Eat sweet, fully ripe fruits like grapes, pomegranates, and sweet apples."
    ]
  },
  {
    id: "stress-and-anxiety",
    name: "Stress & Anxiety Disorders",
    tagline: "Quiet the Overactive Mind, Ground the Nervous System, Restore Sleep",
    image: "https://images.pexels.com/photos/6629613/pexels-photo-6629613.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    description: "Anxiety is the classic manifestation of unstable 'Prana Vata' - the subtle air current governing thoughts, heart rate, and sensory processing. When this current is blown out of control by overwork, blue light, and dry diets, the mind spins. Our treatment protocols use deep warm herbal oils to cocoon the body, reassuring the nervous system of absolute safety.",
    symptoms: [
      "Constant racing thoughts and rapid shallow breathing",
      "Chronic insomnia or fitful, nightmare-filled sleep",
      "Heart palpitations and sudden muscle tremors",
      "Dry throat, cold hands, and nervous digestion (IBS)"
    ],
    recommendedTherapies: ["Basti", "Nasya", "Shirodhara (continuous liquid stream)", "Abhyanga (four-hand synchronous massage)"],
    dietaryAdvice: [
      "Emphasize warm, oily, sweet, and salty tastes.",
      "Drink warm ashwagandha and almond milk before bed.",
      "Avoid caffeine, carbonated drinks, and late-night icy salads."
    ]
  },
  {
    id: "pcos",
    name: "PCOS & Hormonal Imbalance",
    tagline: "Regulate Ovarian Cycles, Purify Blood, and Reset Insulin Pathways",
    image: "https://images.pexels.com/photos/6186755/pexels-photo-6186755.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    description: "Polycystic Ovarian Syndrome (PCOS) involves a combination of Kapha (cyst accumulation) and Pitta/Vata (hormonal irregularity) in the 'Artava Vaha Srotas' (the female reproductive channels). Our integrative Panchakarma therapies physically scrape excess ovarian density, support follicle maturation, and calm pituitary-adrenal overactivity.",
    symptoms: [
      "Irregular, delayed, or completely absent menstrual periods",
      "Unwanted facial hair growth, acne, and hair thinning",
      "Sudden unexplained weight gain around the abdomen",
      "Ovarian cysts detected in ultrasounds"
    ],
    recommendedTherapies: ["Vamana", "Virechana", "Uttara Basti (internal uterine therapy)", "Abhyanga"],
    dietaryAdvice: [
      "Reduce white sugar, refined flour, and processed soy completely.",
      "Add hormone-modulating spices like cinnamon, fenugreek, and turmeric.",
      "Eat light, warm, bitter, and astringent foods like barley and quinoa."
    ]
  },
  {
    id: "diabetes",
    name: "Diabetes & Metabolic Recovery",
    tagline: "Rekindle Your Metabolic Fire (Agni) and Reduce Insulin Resistance",
    image: "https://images.pexels.com/photos/37719549/pexels-photo-37719549.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    description: "Ayurvedic classics describe diabetes as 'Prameha', specifically associated with high Kapha clogging the insulin-processing tissues. Our clinical program focuses on deep purgation (Virechana) and cell-scraping dry massages (Udvarthana) using micro-milled herbal powders to break adipose density, activate pancreatic tissues, and naturally stabilize glucose levels.",
    symptoms: [
      "Excessive thirst, frequent night urination",
      "Chronic fatigue even after sleeping",
      "Slow-healing cuts, tingling sensations in feet",
      "Frequent sugar cravings"
    ],
    recommendedTherapies: ["Virechana", "Vamana", "Udvarthana (herbal powder scrub)", "Takradhara (buttermilk head stream)"],
    dietaryAdvice: [
      "Emphasize bitter melon, fenugreek seeds, and Indian gooseberry (Amla).",
      "Eat millets (Ragi, Jowar, Bajra) instead of white polished rice.",
      "Avoid sleeping during the day as it slows the liver's glucose clearing."
    ]
  }
];

export const PACKAGES: Package[] = [
  {
    id: "ojas-reset-3-day",
    name: "Ojas Reset",
    duration: "3 Days",
    tagline: "The Perfect Luxury Introduction to Spiritual and Cellular Rejuvenation",
    price: "$950 (₹75,000)",
    stay: "Luxury Forest Suite with private courtyard",
    meals: "Three bespoke Ayurvedic organic farm-to-table meals daily",
    consultation: "Comprehensive initial and departure pulse and constitution analysis",
    treatments: "2 Signature Abhyanga treatments, 1 Shirodhara session, and local steam therapy",
    features: [
      "Daily guided Sunrise Meditation & Pranayama",
      "Access to the Thermal Spa, Himalayan salt room, and infinity pool",
      "Private consultation with our Resident Vaidya (Doctor)",
      "Custom herbal formulations provided for home transition"
    ]
  },
  {
    id: "shanti-shodhana-7-day",
    name: "Shanti Shodhana Detox",
    duration: "7 Days",
    tagline: "A Classical Panchakarma Healing Paradigm to Erase Years of Stagnation",
    price: "$2,200 (₹1,75,000)",
    stay: "Private Mountain View Villa with luxury amenities",
    meals: "Bespoke personalized clinical diet, customized daily by the Chef and Vaidyas",
    consultation: "Daily physician pulse readings and personalized therapy modifications",
    treatments: "Full 7-day therapeutic cycle including Abhyanga, Swedana, Nasya, and Virechana",
    features: [
      "2 Core Panchakarma purification ceremonies",
      "Daily individual Yoga Nidra and mindfulness sessions",
      "Private cooking masterclass on Ayurvedic culinary pharmacology",
      "Post-program wellness roadmap with 30-day online support"
    ]
  },
  {
    id: "kayakalpa-immersion-14-day",
    name: "Kayakalpa Immersion",
    duration: "14 Days",
    tagline: "The Sacred Cellular Reversal & Longevity Journey for Deep Restructuring",
    price: "$4,500 (₹3,50,000)",
    stay: "Aman-style Heritage Cottage with private plunge pool and meditation garden",
    meals: "Highly optimized medicated diet, organic teas, and freshly extracted herbal juices",
    consultation: "Comprehensive daily clinical logs, genetic lifestyle mapping, and Vaidya oversight",
    treatments: "14-day continuous clinical Panchakarma (Vamana/Virechana + comprehensive Basti course)",
    features: [
      "Daily Shirodhara and customized herbal Kizhi (bundle therapies)",
      "Personalized sound-healing therapy and Vedic astrology analysis",
      "Privilege pass to all resort spiritual fire rituals (Homa)",
      "60-day personalized herbal supplement package delivered worldwide"
    ]
  },
  {
    id: "ananda-pilgrimage-21-day",
    name: "The Ananda Pilgrimage",
    duration: "21 Days",
    tagline: "Our Ultimate Transformation Program for Complete Metaphysical & Physical Overhaul",
    price: "$6,800 (₹5,20,000)",
    stay: "The Presidential Sanctuary Suite with private therapy room and therapist-on-call",
    meals: "Fully bespoke metabolic restoration diet, cold-pressed raw herbs, and organic gold-infused elixirs",
    consultation: "Full medical board supervision (3 senior physicians) with personalized genetic diagnostic logs",
    treatments: "The absolute, complete 5-stage classical Panchakarma with intensive Kayakalpa rasayanas",
    features: [
      "Unlimited luxury therapies customized daily with no extra charges",
      "Private daily customized Pilates, Yoga, and Marma stretching sessions",
      "Spiritual energy activation and chanting initiations by traditional Sanskrit scholars",
      "Annual virtual concierge wellness plan and direct WhatsApp line to Chief Physician"
    ]
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: "dr-vasudevan",
    name: "Dr. Vasudevan Namboothiri",
    title: "Chief Spiritual Physician & Director of Kayachikitsa",
    image: "https://images.pexels.com/photos/6186755/pexels-photo-6186755.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=450",
    experience: "32 Years of Clinical Experience",
    qualification: "BAMS, MD in Ayurvedic Medicine (University of Kerala), PhD in Panchakarma",
    specialization: "Chronic Neurological Disorders, Spine Degeneration, and Marma Science",
    awards: [
      "National Dhanwantari Award for Clinical Excellence (2018)",
      "Global Ayurveda Ambassador Title (WAC, 2022)",
      "Distinguished Alumnus, Kottakkal Arya Vaidya Sala"
    ],
    bio: "Dr. Vasudevan belongs to a legendary 8-generation family of traditional healers in Malabar. Merging deep traditional secret lineages with strict scientific clinical trials, he has treated over 45,000 global patients, including world leaders, high-performance athletes, and spiritual seekers. He believes pulse diagnosis is a diagnostic conversation with the patient's soul."
  },
  {
    id: "dr-arundhati",
    name: "Dr. Arundhati Roy (BAMS, MD)",
    title: "Senior Consultant in Gynaecology & Metabolic Rejuvenation",
    image: "https://images.pexels.com/photos/6187423/pexels-photo-6187423.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=450",
    experience: "18 Years of Clinical Experience",
    qualification: "BAMS (Varanasi), MD in Prasuti Tantra & Stri Roga (BHU)",
    specialization: "PCOS, Female Endocrine Disorders, Skin Regeneration, and Rasayana (Anti-aging)",
    awards: [
      "Ayush Excellence Award (Ministry of AYUSH, 2021)",
      "Best Research Paper on Ayurvedic Endocrinology (Tokyo, 2019)",
      "Sushruta Medal for Excellence in Natural Medicine"
    ],
    bio: "Dr. Arundhati Roy is a world-renowned pioneer in integrating Ayurvedic hormonal protocols with modern functional endocrinology. Her revolutionary Panchakarma approaches to PCOS and Autoimmune thyroid disorders have saved thousands of women from lifelong dependency on synthetic pills. She is regular contributor to global medical journals."
  },
  {
    id: "dr-devendra",
    name: "Dr. Devendra Prasad",
    title: "Head of Panchakarma & Clinical Detoxification",
    image: "https://images.pexels.com/photos/6187852/pexels-photo-6187852.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=450",
    experience: "22 Years of Clinical Experience",
    qualification: "BAMS (Gujarat Ayurveda University), MS in Shalya Tantra (Surgeries & Bloodletting)",
    specialization: "Raktamokshana, Severe Inflammatory Arthritis, and Psoriasis Purifications",
    awards: [
      "Patanjali Award for Outstanding Service in Rural Ayurveda (2015)",
      "Excellence in Panchakarma Research (Europe Ayurvedic Academy, 2023)"
    ],
    bio: "Dr. Devendra Prasad is a master of the physical five-fold purification sciences. He leads our therapist training program, ensuring every touch, oil temperature, and herbal grind is done with precision devotion. His expertise in medicinal leech application and blood detox makes him highly sought-after for complex autoimmune flares."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "dinacharya-daily-rhythms",
    title: "The Art of Dinacharya: Crafting an Unshakable Morning Ritual",
    excerpt: "Discover how aligning your mornings with nature's circadian clocks can eliminate chronic cortisol levels, enhance metabolic agni, and bring pristine mental silence.",
    category: "Daily Living",
    readTime: "6 Min Read",
    author: "Dr. Vasudevan Namboothiri",
    date: "October 14, 2025",
    image: "https://images.pexels.com/photos/36774486/pexels-photo-36774486.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    content: `
# The Art of Dinacharya: Crafting an Unshakable Morning Ritual

In our modern hyper-connected culture, we wake up to the glaring alarms of smartphones, instant messaging notifications, and a flood of early morning cortisol. We drag our bodies into the day, relying on caffeine to stimulate a sluggish digestion and force our nervous system into productivity. 

According to ancient Ayurvedic wisdom, this erratic transition violates the sacred **Dinacharya**—the physical and cosmic schedule designed to maintain absolute cellular harmony.

## 1. The Brahma Muhurta (The Creator’s Hour)
The optimal time to wake is during the *Brahma Muhurta*—roughly 48 minutes before sunrise (usually between 4:30 AM and 5:30 AM). At this hour, the atmosphere is saturated with pure *Sattva* (goodness and clarity). The wind is calm, the earth is silent, and the prevailing energetic field is exceptionally supportive of spiritual insight and cellular regeneration. Waking before the Kapha phase of the morning starts (6:00 AM) ensures that your body retains lightness and mental alertness rather than waking up heavy and sluggish.

## 2. Jala Neti & Tongue Scraping (Removing Ama)
Before pouring any food or beverages down your digestive tract, you must purify your sensory portals.
* **Tongue Scraping (Jihwa Nirlekhana):** Use a pure copper scraper. Scraping from back to front 7-10 times removes the white film of *Ama* (metabolic toxins) that settled on your tongue overnight. This activates salivary enzymes and sharpens your taste buds immediately.
* **Oil Pulling (Gandusha):** Swishing one tablespoon of warm, organic black sesame oil in your mouth for 10-15 minutes strengthens teeth, pulls systemic lipid-soluble toxins, and reduces jaw tension.

## 3. Abhyanga (Self-Massage)
Massaging your own skin with warm, cured sesame oil or coconut oil is the ultimate act of self-preservation. It calms the *Prana Vata*, hydrates the lymphatic nodes, and forms a protective layer against external environmental stressors throughout the day. Let the oil sit for 15 minutes before rinsing with warm, non-chemical water.

By aligning your mornings with these natural flows, you transition from reactive surviving to intentional, graceful living.
    `
  },
  {
    slug: "gut-health-agni",
    title: "The Fire Within: Understanding Agni and the Root of All Disease",
    excerpt: "In Ayurveda, your digestive fire (Agni) is the single most important factor determining longevity. Learn how to diagnose and rekindle a sluggish metabolic flame.",
    category: "Clinical Philosophy",
    readTime: "8 Min Read",
    author: "Dr. Arundhati Roy",
    date: "November 2, 2025",
    image: "https://images.pexels.com/photos/6629614/pexels-photo-6629614.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    content: `
# The Fire Within: Understanding Agni and the Root of All Disease

More than 5,000 years before modern gastroenterology recognized the 'gut-brain axis' or the microbiome, the sages of Ayurveda wrote: *"Rogas sarveapi mande'gnau"*—all physical and mental diseases originate from compromised **Agni** (the internal digestive fire).

Agni is not merely stomach acid; it is the universal principle of transformation. It governs the conversion of food into thoughts, molecules into tissues (Dhatus), and external sensory inputs into cohesive intelligence.

## The Four Clinical States of Agni
Every person’s digestive fire operates in one of four distinct states at any given moment:
1. **Sama Agni (Balanced Fire):** Perfect digestion, zero bloating, pure hunger signals, mental clarity, and consistent energy. This state prevents the creation of *Ama* (toxins).
2. **Vishama Agni (Irregular Fire):** Governed by *Vata*. Sometimes you can digest a heavy meal easily; other times, a simple salad causes severe gas, dry constipation, and anxiety.
3. **Tikshna Agni (Sharp, Hyperactive Fire):** Governed by *Pitta*. It burns intensely, causing acid reflux, burning sensations, loose stools, and extreme irritability if meals are delayed.
4. **Manda Agni (Sluggish, Cold Fire):** Governed by *Kapha*. Digestion is slow, leaving you feeling heavy, sleepy, and congested even after eating small, light meals.

## How to Rekindle Your Agni
* **Never drink iced beverages with meals:** Cold water instantly extinguishes your digestive fire, coagulating dietary fats into toxic sludge.
* **Consume Ginger and Lime before eating:** Grate fresh ginger with a squeeze of fresh lime and a pinch of rock salt. Chew this 15 minutes before lunch to awaken salivary and pancreatic enzymes.
* **Practice the 70% Rule:** Leave 30% of your stomach empty during meals to allow the physical movement of air and gastric fluids.

To heal the body, we do not simply feed it supplements. We must stoke the biological furnace of Agni so the body can heal itself.
    `
  },
  {
    slug: "panchakarma-cellular-detox",
    title: "Panchakarma: The Scientific Reality of Deep Tissue Purification",
    excerpt: "Unpacking how classical Ayurvedic cleansing goes far beyond commercial juice fasts to pull hydrophobic toxins from fat cells and bones.",
    category: "Therapeutic Science",
    readTime: "10 Min Read",
    author: "Dr. Devendra Prasad",
    date: "December 18, 2025",
    image: "https://images.pexels.com/photos/6187852/pexels-photo-6187852.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=800",
    content: `
# Panchakarma: The Scientific Reality of Deep Tissue Purification

In modern wellness retreats, 'detox' has become a generic buzzword associated with green juices, clay wraps, and extreme fasting. While these may offer a brief temporary lightened state, they fail to reach the deep hydrophobic toxins trapped in visceral fat chambers, bone marrow, and brain tissues.

This is where **Panchakarma** (The Five Actions) stands alone as the world’s most systematic clinical detoxification methodology.

## The Tri-Phasic Process of Panchakarma

True Panchakarma is never a simple day-spa massage. It requires a rigorous, scientific three-stage clinical cycle:

### Phase 1: Purvakarma (Preparation)
Before any toxic expulsion can occur, we must loose and liquefy the toxins from the tissues.
* **Snehapana (Internal Oleation):** The patient drinks progressively larger daily doses of medicated herbal ghee. The lipophilic ghee dissolves fat-soluble toxins (heavy metals, pesticide residues, and environmental chemicals) that have accumulated deep inside the tissues for years.
* **Abhyanga & Swedana (External Mobilization):** Synchronized four-hand warm oil massages and herbal steam therapies drive these dissolved toxins toward the gastrointestinal tract.

### Phase 2: Pradhanakarma (The Five Cleansings)
Once the toxins are centralized in the digestive system, they are systematically expelled through the closest exit point using one of the five primary therapies:
1. *Vamana* (Emesis) for Kapha toxins
2. *Virechana* (Purgation) for Pitta toxins
3. *Basti* (Enema) for Vata toxins
4. *Nasya* (Nasal Infusion) for Head & Brain channels
5. *Raktamokshana* (Bloodletting) for deep skin & blood impurities

### Phase 3: Paschatkarma (Rehabilitation)
After purification, the body is highly vulnerable and delicate. We rebuild the digestive Agni and tissue strength using *Samsarjana Krama* (step-by-step dietary progression) and *Rasayana* (potent longevity herbs like Ashwagandha, Amalaki, and Shatavari).

Panchakarma is not a luxury pampering session—it is a spiritual and biological cellular reboot that restores your system back to its original factory settings.
    `
  }
];

export const FAQS = [
  {
    category: "General",
    question: "What makes Panchakarma different from a normal luxury spa detox?",
    answer: "A standard luxury spa focuses on superficial pampering, whereas clinical Panchakarma is a medical-grade, deeply scientific cellular detoxification process. Panchakarma utilizes the biological mechanism of internal oleation (using medicated ghee) to bind fat-soluble environmental toxins, heavy metals, and metabolic waste from deep tissues, transporting them to the GI tract for physical evacuation. It is always supervised by qualified Ayurvedic doctors (Vaidyas) and is completely customized to your personal pulse and constitution."
  },
  {
    category: "Treatments",
    question: "Do I have to go through all five therapies during a Panchakarma stay?",
    answer: "No, absolutely not. Panchakarma translates to 'five therapies', but a patient rarely requires all five. Our physicians perform a comprehensive initial evaluation, reading your pulse and assessing your energetic imbalances (Vikriti). Based on this, they might prescribe 2 or 3 specific therapies (such as Virechana and Basti) that are perfectly suited to your health requirements and physical endurance."
  },
  {
    category: "Duration",
    question: "Why is a 7, 14, or 21-day stay highly recommended?",
    answer: "Panchakarma requires three phases: Preparation (loosening toxins, which takes 3-7 days), Expulsion (the actual purification days), and Rehabilitation (carefully rebuilding your metabolic fire, taking another 3-7 days). Attempting to rush this biological cycle can shock the nervous system and damage your digestive strength (Agni). A 14-day or 21-day program allows for a complete, deep-tissue structural rebuild and cellular longevity impact (Kayakalpa)."
  },
  {
    category: "Cost & Booking",
    question: "Is accommodation and dining included in the package prices?",
    answer: "Yes, our luxury packages are completely all-inclusive. This includes your high-end stay (Aman-style private suites or mountain villas), all personalized organic farm-to-table Ayurvedic meals prepared by our gourmet chefs, daily clinical consultations with senior doctors, all luxury therapies, medicines administered during the stay, daily private yoga/meditation, and take-home wellness plans."
  },
  {
    category: "Conditions",
    question: "Can Ayurveda treat chronic autoimmune disorders or joint issues?",
    answer: "Yes, Ayurveda is globally renowned for its exceptional efficacy in chronic joint conditions, spine degeneration, and autoimmune flares. By addressing the root cause—inflammation driven by localized Vata imbalance and toxic metabolic buildup (Ama)—we don't just block pain; we lubricate joint cartilages, eliminate circulating immune complexes, and restore deep neurological and immunological balance."
  }
];
