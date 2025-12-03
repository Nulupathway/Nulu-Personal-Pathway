// Nulu – Personality–Engagement Activity Profile

const userInfo = {
    name: ""
};

// 1) Questions grouped by trait/category
const questionGroups = [
    {
        trait: "Warmth",
        questions: [
            "I am energized by group activities and love collaborating with others on creative or challenging tasks.",
            "I am drawn to team-based challenges, where I can share ideas and work towards a common goal.",
            "I enjoy activities that involve social interaction and helping others, whether in group settings or one-on-one environments."
        ]
    },
    {
        trait: "Reasoning",
        questions: [
            "I enjoy solving puzzles and tackling complex problems that require careful thought and strategy.",
            "I am most engaged when I am mentally challenged, whether through strategy games or science-based projects.",
            "I love activities that require reasoning and logic, as they keep my mind sharp and engaged."
        ]
    },
    {
        trait: "Emotional Awareness",
        questions: [
            "I am in tune with my emotions and find peace in activities that help me reflect and calm my mind, such as yoga or meditation.",
            "I find activities that encourage mindfulness and emotional reflection deeply fulfilling.",
            "I am comfortable with emotionally challenging activities that allow me to process my feelings and build emotional resilience."
        ]
    },
    {
        trait: "Dominance",
        questions: [
            "I thrive in leadership roles and enjoy taking charge in competitive or organized activities.",
            "I am most fulfilled when I can lead a team or take control of a project, driving it towards success.",
            "I enjoy competitive environments where I can prove my capabilities and assert myself."
        ]
    },
    {
        trait: "Liveliness",
        questions: [
            "I love high-energy activities that get me moving, like dancing or playing sports.",
            "I am drawn to action-packed experiences that keep me physically and mentally engaged.",
            "I thrive in environments where there is constant energy, excitement, and fast-paced engagement."
        ]
    },
    {
        trait: "Rule-Consciousness",
        questions: [
            "I find comfort in structured activities that have clear guidelines and objectives.",
            "I enjoy following rules and procedures, especially when they help me succeed in a task or project.",
            "I feel most confident when I know exactly what is expected of me and how to achieve it."
        ]
    },
    {
        trait: "Social Boldness",
        questions: [
            "I am comfortable speaking in front of others and enjoy taking part in social activities that involve public speaking or performances.",
            "I thrive in environments where I can interact with many people and take center stage in group settings.",
            "I am confident in social interactions and enjoy initiating conversations and building connections."
        ]
    },
    {
        trait: "Sensitivity",
        questions: [
            "I feel deeply for others and enjoy activities that allow me to express my empathy and creativity, like art or caring for animals.",
            "I am drawn to nurturing activities that allow me to express compassion and care for others.",
            "I enjoy tasks that require a gentle, thoughtful approach, where I can create something beautiful or meaningful."
        ]
    },
    {
        trait: "Vigilance",
        questions: [
            "I am cautious and enjoy tasks that require careful thought and attention to detail, such as solving mysteries or working on intricate projects.",
            "I thrive when I can analyze situations carefully and anticipate potential problems.",
            "I enjoy activities that challenge me to think strategically and approach problems from multiple angles."
        ]
    },
    {
        trait: "Abstractedness",
        questions: [
            "I love engaging in creative activities that allow me to express my imagination, like painting, writing, or music.",
            "I am naturally drawn to abstract thinking and enjoy tasks that challenge me to think outside the box.",
            "I thrive in environments that encourage creativity, where I can explore new ideas and artistic expressions."
        ]
    },
    {
        trait: "Privateness",
        questions: [
            "I value my alone time and enjoy activities where I can focus inwardly, like journaling or solo art projects.",
            "I am most comfortable when working independently and prefer to express myself privately rather than in large groups.",
            "I enjoy deep personal reflection and find peace in solo activities that allow me to recharge."
        ]
    },
    {
        trait: "Apprehension",
        questions: [
            "I prefer low-stress activities that help me feel calm and in control, such as guided meditation or careful skill-building exercises.",
            "I feel more comfortable in environments where I can take my time and proceed cautiously.",
            "I benefit from structured, supportive activities that allow me to build confidence at my own pace."
        ]
    },
    {
        trait: "Openness to Change",
        questions: [
            "I am excited by new experiences and enjoy activities that introduce novel concepts or challenges, such as travel or innovative workshops.",
            "I thrive in environments that embrace change and encourage exploration of new ideas or activities.",
            "I enjoy stepping out of my comfort zone and trying new things that offer fresh perspectives."
        ]
    },
    {
        trait: "Self-Reliance",
        questions: [
            "I enjoy activities that allow me to work independently, where I can trust my own skills and judgment.",
            "I am most comfortable when I can rely on myself to complete tasks and solve problems.",
            "I thrive when I can take responsibility for my own actions and achieve success on my own terms."
        ]
    },
    {
        trait: "Perfectionism",
        questions: [
            "I am driven to perfect every detail, whether in creative projects or skill-building activities, and I take pride in my meticulous work.",
            "I enjoy tasks that require precision and attention to detail, where I can create something flawless.",
            "I am satisfied when I can achieve high standards and produce work that meets my expectations of excellence."
        ]
    },
    {
        trait: "Tension",
        questions: [
            "I benefit from activities that allow me to relax and manage stress, such as yoga or nature walks.",
            "I enjoy calming activities that help me clear my mind and restore balance, especially when life feels overwhelming.",
            "I feel most at ease when I can unwind and center myself through peaceful, mindful activities."
        ]
    }
];

// Likert options
const likertOptions = [
    { value: 1, label: "Strongly Disagree" },
    { value: 2, label: "Disagree" },
    { value: 3, label: "Neutral" },
    { value: 4, label: "Agree" },
    { value: 5, label: "Strongly Agree" }
];

// Archetypes
const archetypes = [
    {
        name: "Social Energiser",
        symbol: "✨",
        description:
            "You carry a natural spark that can make spaces feel lighter and more connected. People often notice your presence because you bring energy, conversation, and a sense of “we’re in this together” into the room. Even small moments with you can help others feel less alone or left out.\n\nIn a new place, your way of reaching out, joking, or simply being open can gently draw people together. You have a gift for turning groups into communities and helping others feel that they belong.",
        traits: {
            "Warmth": "high",
            "Liveliness": "high",
            "Social Boldness": "high",
            "Openness to Change": "high",
            "Privateness": "low",
            "Apprehension": "low"
        }
    },
    {
        name: "Quiet Creator",
        symbol: "🎨",
        description:
            "You hold a deep and thoughtful inner world that not everyone sees straight away. Ideas, images, and stories live strongly inside you, and when you choose to share them, they often have real depth and meaning. You notice details, moods, and little moments that other people might miss.\n\nIn a new place, your creativity and reflection can gently shape the environment around you – through art, words, design, or the way you think about things. You bring a sense of uniqueness and quiet magic that helps turn ordinary spaces into more human and soulful ones.",
        traits: {
            "Abstractedness": "high",
            "Sensitivity": "high",
            "Privateness": "high",
            "Self-Reliance": "high",
            "Perfectionism": "medium",
            "Social Boldness": "low",
            "Liveliness": "low"
        }
    },
    {
        name: "Strategic Challenger",
        symbol: "♟️",
        description:
            "You tend to look beneath the surface and think several steps ahead. You notice patterns, ask questions, and like things to make sense. This gives you a strong ability to protect yourself and others from things that haven’t been fully thought through.\n\nIn a new setting, your way of thinking can help bring clarity, planning, and direction. You’re someone who can help a team see risks, organise ideas, and build plans that actually work in real life.",
        traits: {
            "Reasoning": "high",
            "Vigilance": "high",
            "Dominance": "medium",
            "Rule-Consciousness": "high",
            "Self-Reliance": "medium"
        }
    },
    {
        name: "Steady Supporter",
        symbol: "🤝",
        description:
            "There is a calm, steady quality to you that can feel very reassuring to the people around you. You often notice how others are doing, and even small gestures from you – a kind word, a quiet presence, a helping hand – can make a real difference to someone’s day.\n\nIn a new home or environment, your consistency and care help things feel safer and more predictable. You bring a sense of reliability and kindness that shows people they don’t have to carry everything on their own.",
        traits: {
            "Warmth": "high",
            "Sensitivity": "medium",
            "Emotional Awareness": "high",
            "Rule-Consciousness": "high",
            "Dominance": "low",
            "Social Boldness": "low"
        }
    },
    {
        name: "Adventurous Explorer",
        symbol: "🧭",
        description:
            "You have a natural pull towards movement, change, and finding out what’s possible. New situations might feel challenging at times, but there is also a part of you that is drawn towards trying, testing, and discovering what’s on the other side of the unknown.\n\nIn a new place, you can help keep things from getting stuck or stale. Your willingness to move forward, experiment, or bring in fresh ideas can open doors for you and for the people around you.",
        traits: {
            "Liveliness": "high",
            "Openness to Change": "high",
            "Social Boldness": "medium",
            "Dominance": "medium",
            "Tension": "medium"
        }
    },
    {
        name: "Focused Perfectionist",
        symbol: "📐",
        description:
            "You care deeply about getting things right and putting real effort into what you do. You spot details that others might overlook and often hold yourself to high standards. Even when this feels tiring at times, it also shows how seriously you take your commitments and the things that matter to you.\n\nIn a new setting, your thoroughness and care can strengthen routines, projects, and shared plans. You bring quality, thoughtfulness, and a sense that if something is worth doing, it’s worth doing properly.",
        traits: {
            "Perfectionism": "high",
            "Apprehension": "high",
            "Rule-Consciousness": "high",
            "Self-Reliance": "medium",
            "Tension": "medium"
        }
    },
    {
        name: "Grounded Reflector",
        symbol: "🌱",
        description:
            "You often take time to feel, think, and really understand what is happening around you. You may not always speak first, but when you do, it often comes from a place of depth and honesty. You sense emotional undercurrents and can gently name what others might be feeling but struggling to say.\n\nIn a new environment, your reflective nature brings balance and softness. You help create space for people to pause, breathe, and process – including yourself.",
        traits: {
            "Emotional Awareness": "high",
            "Sensitivity": "high",
            "Liveliness": "low",
            "Social Boldness": "low",
            "Apprehension": "medium"
        }
    },
    {
        name: "Independent Maverick",
        symbol: "⚡️",
        description:
            "You have a strong inner sense of who you are and how you want to move through the world. You don’t always follow the crowd, and there is courage in the way you form your own views and find your own path. Even when things around you feel pressured, there is a part of you that stays true to yourself.\n\nIn a new place, your independence and originality can quietly give others permission to be more themselves too. You bring fresh perspectives, inner strength, and a reminder that there isn’t just one “right” way to be.",
        traits: {
            "Self-Reliance": "high",
            "Openness to Change": "high",
            "Abstractedness": "medium",
            "Dominance": "medium",
            "Rule-Consciousness": "low"
        }
    },
    {
        name: "Thoughtful Guardian",
        symbol: "🛡️",
        description:
            "You are naturally tuned into what feels safe and what doesn’t. You notice shifts, risks, and small details that suggest something might need attention. This protective awareness is a powerful strength, especially in environments that haven’t always felt predictable or secure.\n\nIn a new setting, you bring a sense of watchfulness and care. You help create conditions where people – including you – can feel more protected, more considered, and less exposed to unnecessary harm.",
        traits: {
            "Vigilance": "high",
            "Rule-Consciousness": "high",
            "Emotional Awareness": "medium",
            "Dominance": "low",
            "Self-Reliance": "medium"
        }
    },
    {
        name: "Playful Connector",
        symbol: "😊",
        description:
            "You have an easy, human way of being around others. Whether through humour, light conversation, or simple everyday moments, you make it easier for people to relax and feel like themselves. You often help bridge gaps between different personalities without even trying.\n\nIn a new home or group, your presence can turn awkward silence into gentle connection. You bring warmth, softness, and a sense that relationships don’t have to be heavy all the time for them to be real and important.",
        traits: {
            "Warmth": "high",
            "Liveliness": "medium",
            "Social Boldness": "medium",
            "Privateness": "medium",
            "Sensitivity": "medium"
        }
    }
];

// Activities
const activities = [
    { name: "Painting", category: "Creative & Expressive", primaryTraits: ["Abstractedness", "Sensitivity"], secondaryTraits: ["Perfectionism", "Privateness"] },
    { name: "Drawing / Sketching", category: "Creative & Expressive", primaryTraits: ["Sensitivity", "Perfectionism"], secondaryTraits: ["Abstractedness", "Emotional Awareness"] },
    { name: "Digital Art", category: "Creative & Expressive", primaryTraits: ["Abstractedness", "Self-Reliance"], secondaryTraits: ["Perfectionism"] },
    { name: "Photography", category: "Creative & Expressive", primaryTraits: ["Sensitivity", "Vigilance"], secondaryTraits: ["Privateness", "Abstractedness"] },
    { name: "Photo Editing", category: "Creative & Expressive", primaryTraits: ["Perfectionism"], secondaryTraits: ["Abstractedness", "Vigilance"] },
    { name: "Creative Writing", category: "Creative & Expressive", primaryTraits: ["Abstractedness", "Sensitivity"], secondaryTraits: ["Privateness", "Self-Reliance"] },
    { name: "Poetry Workshops", category: "Creative & Expressive", primaryTraits: ["Sensitivity", "Abstractedness"], secondaryTraits: ["Emotional Awareness"] },
    { name: "Music Production", category: "Creative & Expressive", primaryTraits: ["Abstractedness"], secondaryTraits: ["Dominance", "Reasoning"] },
    { name: "Instrument Lessons", category: "Creative & Expressive", primaryTraits: ["Perfectionism", "Self-Reliance"], secondaryTraits: ["Sensitivity"] },
    { name: "Drama & Theatre Workshops", category: "Creative & Expressive", primaryTraits: ["Social Boldness", "Liveliness"], secondaryTraits: ["Warmth", "Dominance"] },
    { name: "Dance", category: "Creative & Expressive", primaryTraits: ["Liveliness"], secondaryTraits: ["Dominance", "Warmth", "Openness to Change"] },

    { name: "Game Nights", category: "Social & Collaborative", primaryTraits: ["Warmth", "Liveliness"], secondaryTraits: ["Dominance", "Social Boldness"] },
    { name: "Trivia / Quiz Nights", category: "Social & Collaborative", primaryTraits: ["Reasoning", "Vigilance"], secondaryTraits: ["Dominance"] },
    { name: "Bowling", category: "Social & Collaborative", primaryTraits: ["Social Boldness", "Warmth"], secondaryTraits: ["Liveliness"] },
    { name: "Mini Golf", category: "Social & Collaborative", primaryTraits: ["Warmth", "Rule-Consciousness"], secondaryTraits: ["Social Boldness"] },
    { name: "Open Mic Nights", category: "Social & Collaborative", primaryTraits: ["Social Boldness"], secondaryTraits: ["Warmth", "Dominance"] },
    { name: "Escape Rooms", category: "Social & Collaborative", primaryTraits: ["Reasoning", "Vigilance"], secondaryTraits: ["Dominance", "Rule-Consciousness"] },
    { name: "Scavenger Hunts", category: "Social & Collaborative", primaryTraits: ["Reasoning", "Liveliness"], secondaryTraits: ["Vigilance", "Warmth"] },
    { name: "Arcade Trips", category: "Social & Collaborative", primaryTraits: ["Liveliness"], secondaryTraits: ["Dominance", "Social Boldness"] },

    { name: "Yoga", category: "Reflective & Mindful", primaryTraits: ["Emotional Awareness"], secondaryTraits: ["Tension", "Perfectionism"] },
    { name: "Meditation", category: "Reflective & Mindful", primaryTraits: ["Emotional Awareness"], secondaryTraits: ["Apprehension", "Tension"] },
    { name: "Nature Walks", category: "Reflective & Mindful", primaryTraits: ["Emotional Awareness"], secondaryTraits: ["Vigilance", "Sensitivity"] },
    { name: "Gardening", category: "Reflective & Mindful", primaryTraits: ["Sensitivity", "Warmth"], secondaryTraits: ["Emotional Awareness"] },
    { name: "Book Club", category: "Reflective & Mindful", primaryTraits: ["Sensitivity", "Abstractedness"], secondaryTraits: ["Warmth"] },
    { name: "Origami", category: "Reflective & Mindful", primaryTraits: ["Perfectionism"], secondaryTraits: ["Privateness", "Apprehension"] },

    { name: "Running", category: "Physical & Fitness", primaryTraits: ["Self-Reliance"], secondaryTraits: ["Tension", "Liveliness"] },
    { name: "Cycling", category: "Physical & Fitness", primaryTraits: ["Vigilance", "Self-Reliance"], secondaryTraits: ["Liveliness"] },
    { name: "Gym Training", category: "Physical & Fitness", primaryTraits: ["Self-Reliance"], secondaryTraits: ["Dominance", "Perfectionism"] },
    { name: "Swimming", category: "Physical & Fitness", primaryTraits: ["Self-Reliance"], secondaryTraits: ["Emotional Awareness"] },
    { name: "Rock Climbing", category: "Physical & Fitness", primaryTraits: ["Dominance", "Vigilance"], secondaryTraits: ["Emotional Awareness"] },
    { name: "Trampoline Parks", category: "Physical & Fitness", primaryTraits: ["Liveliness"], secondaryTraits: ["Social Boldness"] },
    { name: "Team Sports", category: "Physical & Fitness", primaryTraits: ["Dominance", "Liveliness"], secondaryTraits: ["Warmth", "Social Boldness"] },

    { name: "Cooking & Baking", category: "Hands-On & Practical", primaryTraits: ["Sensitivity", "Rule-Consciousness"], secondaryTraits: ["Perfectionism", "Warmth"] },
    { name: "DIY Projects", category: "Hands-On & Practical", primaryTraits: ["Reasoning", "Vigilance"], secondaryTraits: ["Perfectionism"] },
    { name: "Woodworking", category: "Hands-On & Practical", primaryTraits: ["Vigilance"], secondaryTraits: ["Perfectionism", "Self-Reliance"] },
    { name: "Fashion Design", category: "Hands-On & Practical", primaryTraits: ["Abstractedness"], secondaryTraits: ["Sensitivity", "Perfectionism"] },
    { name: "Upcycling Projects", category: "Hands-On & Practical", primaryTraits: ["Openness to Change"], secondaryTraits: ["Abstractedness"] },

    { name: "Cinema Trips", category: "Entertainment & Leisure", primaryTraits: ["Warmth"], secondaryTraits: ["Social Boldness"] },
    { name: "Movie Nights", category: "Entertainment & Leisure", primaryTraits: ["Warmth"], secondaryTraits: ["Liveliness"] },
    { name: "Karaoke Nights", category: "Entertainment & Leisure", primaryTraits: ["Social Boldness", "Liveliness"], secondaryTraits: ["Dominance"] },
    { name: "VR Experiences", category: "Entertainment & Leisure", primaryTraits: ["Openness to Change"], secondaryTraits: ["Liveliness", "Reasoning"] },
    { name: "Video Gaming (solo)", category: "Entertainment & Leisure", primaryTraits: ["Reasoning", "Self-Reliance"], secondaryTraits: ["Vigilance"] },
    { name: "Video Gaming (multiplayer)", category: "Entertainment & Leisure", primaryTraits: ["Social Boldness"], secondaryTraits: ["Dominance", "Liveliness"] },

    { name: "Paintball", category: "Adventure & High-Energy", primaryTraits: ["Dominance", "Liveliness"], secondaryTraits: ["Vigilance"] },
    { name: "Go Karting", category: "Adventure & High-Energy", primaryTraits: ["Dominance"], secondaryTraits: ["Emotional Awareness", "Liveliness"] },
    { name: "Zip-Lining", category: "Adventure & High-Energy", primaryTraits: ["Openness to Change", "Liveliness"], secondaryTraits: ["Vigilance"] },
    { name: "Parkour / Freerunning", category: "Adventure & High-Energy", primaryTraits: ["Liveliness", "Openness to Change"], secondaryTraits: ["Dominance"] },
    { name: "Mountain Biking", category: "Adventure & High-Energy", primaryTraits: ["Liveliness", "Dominance"], secondaryTraits: ["Vigilance"] }
];

// ---------- State ----------
let currentGroupIndex = 0;
const answers = {};

const quizContainer = document.getElementById("quiz-container");
const nextBtn = document.getElementById("next-btn");

// ---------- INTRO SCREEN ----------

function showIntroScreen() {
    nextBtn.style.display = "none";

    quizContainer.innerHTML = `
        <h2>Welcome to your Nulu Personal Pathway</h2>
        <p style="max-width: 520px; margin: 0 auto; text-align: center;">
            This isn’t a test. It’s a gentle way of noticing what feels like “you” – the kind of
            energy you bring, the spaces you feel most at home in, and the ways you naturally
            connect, think and create.
        </p>
        <p style="max-width: 520px; margin: 8px auto 0; text-align: center;">
            Your answers will help your support team understand you more clearly, so they can shape
            activities, routines and opportunities that feel safer, kinder and more “you-shaped”.
            There are no right or wrong answers – just go with what feels most true for you most of
            the time.
        </p>
        <div style="margin-top: 16px; text-align: left;">
            <label for="user-name"><strong>Your first name</strong></label><br />
            <input type="text" id="user-name" placeholder="e.g. Sam" />
        </div>
        <button id="start-quiz-btn" style="margin-top: 18px; padding: 8px 18px; font-size: 16px;">
            Start my Nulu pathway
        </button>
    `;

    const startBtn = document.getElementById("start-quiz-btn");
    startBtn.addEventListener("click", () => {
        const nameInput = document.getElementById("user-name");
        const name = (nameInput.value || "").trim();

        if (!name) {
            alert("Please enter a first name so we can attach the results to you.");
            return;
        }

        userInfo.name = name;

        currentGroupIndex = 0;
        nextBtn.style.display = "inline-block";

        const helper = document.querySelector(".helper-text");
        if (helper) helper.style.display = "inline";

        loadCurrentGroup();
    });
}

// ---------- QUESTION PAGES ----------

function loadCurrentGroup() {
    const group = questionGroups[currentGroupIndex];

    let html = `<h2>${group.trait}</h2>`;

    group.questions.forEach((questionText, questionIndex) => {
        const questionName = `trait${currentGroupIndex}_q${questionIndex}`;

        html += `
            <div class="question-block">
                <p>${questionText}</p>
                <div class="likert-group">
        `;

        likertOptions.forEach(option => {
            html += `
                <label class="likert-option">
                    <input type="radio" name="${questionName}" value="${option.value}">
                    <span>${option.label}</span>
                </label>
            `;
        });

        html += `
                </div>
            </div>
        `;
    });

    quizContainer.innerHTML = html;
}

// ---------- SCORING HELPERS ----------

function calculateScores() {
    const scores = {};
    Object.keys(answers).forEach(traitName => {
        const traitAnswers = answers[traitName];
        const total = traitAnswers.reduce((sum, value) => sum + value, 0);
        const average = total / traitAnswers.length;
        scores[traitName] = { total, average };
    });
    return scores;
}

function bandForAverage(avg) {
    if (avg < 2.5) return "low";
    if (avg < 3.5) return "medium";
    return "high";
}

function determineArchetypes(scores) {
    const bands = {};
    Object.keys(scores).forEach(traitName => {
        bands[traitName] = bandForAverage(scores[traitName].average);
    });

    const results = archetypes.map(arch => {
        let score = 0;
        let maxScore = 0;

        Object.keys(arch.traits).forEach(traitName => {
            const desired = arch.traits[traitName];
            const actual = bands[traitName] || "medium";

            maxScore += 2;

            if (desired === actual) {
                score += 2;
            } else if (
                (desired === "high" && actual === "medium") ||
                (desired === "low" && actual === "medium") ||
                (desired === "medium" && (actual === "high" || actual === "low"))
            ) {
                score += 1;
            }
        });

        const matchPercent = maxScore > 0 ? (score / maxScore) * 100 : 0;
        return {
            name: arch.name,
            symbol: arch.symbol,
            description: arch.description,
            score,
            maxScore,
            matchPercent
        };
    });

    results.sort((a, b) => b.matchPercent - a.matchPercent);

    const primary = results[0] || null;
    const secondary = results.length > 1 ? results[1] : null;

    return { primary, secondary, all: results };
}

// ---------- COMPANY-FACING REPORT ----------

function buildSuggestedActivities(traits) {
    const highTraits = new Set(traits.filter(t => t.band === "high").map(t => t.name));
    const lowTraits = new Set(traits.filter(t => t.band === "low").map(t => t.name));

    const fitScored = [];
    const growthScored = [];

    activities.forEach(act => {
        let fitScore = 0;
        act.primaryTraits.forEach(tr => {
            if (highTraits.has(tr)) fitScore += 2;
        });
        act.secondaryTraits.forEach(tr => {
            if (highTraits.has(tr)) fitScore += 1;
        });
        if (fitScore > 0) {
            fitScored.push({ name: act.name, category: act.category, score: fitScore });
        }

        let growthScore = 0;
        act.primaryTraits.forEach(tr => {
            if (lowTraits.has(tr)) growthScore += 2;
        });
        act.secondaryTraits.forEach(tr => {
            if (lowTraits.has(tr)) growthScore += 1;
        });
        if (growthScore > 0) {
            growthScored.push({ name: act.name, category: act.category, score: growthScore });
        }
    });

    fitScored.sort((a, b) => b.score - a.score);
    growthScored.sort((a, b) => b.score - a.score);

    const fit = fitScored.slice(0, 10).map(a => `${a.name} (${a.category})`);
    const growth = growthScored.slice(0, 10).map(a => `${a.name} (${a.category})`);

    return { fit, growth };
}

function buildSuggestedActivitiesForYoungPerson(traits) {
    const highTraits = new Set(traits.filter(t => t.band === "high").map(t => t.name));
    const lowTraits = new Set(traits.filter(t => t.band === "low").map(t => t.name));

    const fitScored = [];
    const growthScored = [];

    activities.forEach(act => {
        let fitScore = 0;
        act.primaryTraits.forEach(tr => {
            if (highTraits.has(tr)) fitScore += 2;
        });
        act.secondaryTraits.forEach(tr => {
            if (highTraits.has(tr)) fitScore += 1;
        });
        if (fitScore > 0) {
            fitScored.push({ name: act.name, category: act.category, score: fitScore });
        }

        let growthScore = 0;
        act.primaryTraits.forEach(tr => {
            if (lowTraits.has(tr)) growthScore += 2;
        });
        act.secondaryTraits.forEach(tr => {
            if (lowTraits.has(tr)) growthScore += 1;
        });
        if (growthScore > 0) {
            growthScored.push({ name: act.name, category: act.category, score: growthScore });
        }
    });

    fitScored.sort((a, b) => b.score - a.score);
    growthScored.sort((a, b) => b.score - a.score);

    return {
        fit: fitScored,
        growth: growthScored
    };
}

function buildCompanyReport(scores, archetypeResult) {
    const traits = Object.keys(scores).map(traitName => {
        const average = scores[traitName].average;
        const band = bandForAverage(average);
        return { name: traitName, average, band };
    });

    const strengths = traits.filter(t => t.band === "high");
    const growthAreas = traits.filter(t => t.band === "low");

    const archetype = {
        primary: archetypeResult.primary
            ? { name: archetypeResult.primary.name, symbol: archetypeResult.primary.symbol }
            : null,
        secondary: archetypeResult.secondary
            ? { name: archetypeResult.secondary.name, symbol: archetypeResult.secondary.symbol }
            : null
    };

    const suggestedActivities = buildSuggestedActivities(traits);

    return {
        createdAt: new Date().toISOString(),
        user: { name: userInfo.name },
        traits,
        strengths,
        growthAreas,
        archetype,
        suggestedActivities
    };
}

function sendResultsToCompany(report) {
    const endpointUrl = "https://your-company-api.example.com/nulu-report";
    fetch(endpointUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(report)
    }).catch(err => {
        console.error("Failed to send results to company:", err);
    });
}

function sendResultsByEmail(report) {
    const companyEmail = "placements@yourorganisation.org";
    const subjectName = report.user.name ? ` for ${report.user.name}` : "";
    const subject = encodeURIComponent(`Nulu Profile Results${subjectName}`);

    const lines = [];

    lines.push("Nulu Profile Results");
    lines.push(`Generated at: ${report.createdAt}`);
    if (report.user.name) lines.push(`Young person: ${report.user.name}`);
    lines.push("");

    if (report.archetype.primary) {
        lines.push(`Primary archetype: ${report.archetype.primary.symbol} ${report.archetype.primary.name}`);
    }
    if (report.archetype.secondary) {
        lines.push(`Secondary archetype: ${report.archetype.secondary.symbol} ${report.archetype.secondary.name}`);
    }
    lines.push("");

    const totalTraits = report.traits.length;
    const highCount = report.strengths.length;
    const lowCount = report.growthAreas.length;
    const medCount = totalTraits - highCount - lowCount;

    lines.push("Trait overview:");
    lines.push(`- High traits (${highCount}): ${report.strengths.map(t => t.name).join(", ") || "none"}`);
    lines.push(`- Medium traits (${medCount}): ${report.traits.filter(t => t.band === "medium").map(t => t.name).join(", ") || "none"}`);
    lines.push(`- Low traits (${lowCount}): ${report.growthAreas.map(t => t.name).join(", ") || "none"}`);
    lines.push("");

    lines.push("Trait scores (1–5 scale):");
    report.traits.forEach(t => {
        lines.push(`- ${t.name} – ${t.band.toUpperCase()} (${t.average.toFixed(2)} / 5)`);
    });

    lines.push("");
    lines.push("Strengths (HIGH traits):");
    if (report.strengths.length === 0) {
        lines.push("- None highlighted as high");
    } else {
        report.strengths.forEach(t => lines.push(`- ${t.name}`));
    }

    lines.push("");
    lines.push("Growth areas (LOW traits):");
    if (report.growthAreas.length === 0) {
        lines.push("- None highlighted as low");
    } else {
        report.growthAreas.forEach(t => lines.push(`- ${t.name}`));
    }

    lines.push("");
    lines.push("Suggested activity matches (fit):");
    if (report.suggestedActivities.fit.length === 0) {
        lines.push("- No activity suggestions generated");
    } else {
        report.suggestedActivities.fit.forEach((a, index) => lines.push(`${index + 1}) ${a}`));
    }

    lines.push("");
    lines.push("Suggested activities to support growth:");
    if (report.suggestedActivities.growth.length === 0) {
        lines.push("- No growth activity suggestions generated");
    } else {
        report.suggestedActivities.growth.forEach((a, index) => lines.push(`${index + 1}) ${a}`));
    }

    const body = encodeURIComponent(lines.join("\n"));
    const mailtoLink = `mailto:${companyEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
}

// ---------- SUNBURST CHART ----------

function renderTraitSunburst(scores) {
    const container = document.getElementById("trait-sunburst");
    if (!container) return;

    const traitsArray = Object.keys(scores).map(name => ({
        name,
        average: scores[name].average
    }));

    traitsArray.sort((a, b) => b.average - a.average);
    const topTraits = traitsArray.slice(0, 5);

    if (topTraits.length === 0) {
        container.innerHTML = "<p style='font-size:0.8rem; color:#6c8197;'>No data yet.</p>";
        return;
    }

    const totalValue = topTraits.reduce((sum, t) => sum + t.average, 0);
    if (totalValue <= 0) {
        container.innerHTML = "<p style='font-size:0.8rem; color:#6c8197;'>No data yet.</p>";
        return;
    }

    const segmentColors = [
        "#A5D8FF",
        "#FFB38A",
        "#DFF1FF",
        "#FCE4D8",
        "#264E70"
    ];

    const size = 240;
    const cx = size / 2;
    const cy = size / 2;
    const fullCircle = Math.PI * 2;

    const innerRadius = 45;
    const minThickness = 18;
    const extraThickness = 47;

    function polarToCartesian(cx, cy, r, angle) {
        return {
            x: cx + r * Math.cos(angle),
            y: cy + r * Math.sin(angle)
        };
    }

    function describeArcSegment(cx, cy, innerR, outerR, startAngle, endAngle) {
        const largeArcFlag = endAngle - startAngle <= Math.PI ? 0 : 1;

        const startOuter = polarToCartesian(cx, cy, outerR, startAngle);
        const endOuter = polarToCartesian(cx, cy, outerR, endAngle);
        const startInner = polarToCartesian(cx, cy, innerR, startAngle);
        const endInner = polarToCartesian(cx, cy, innerR, endAngle);

        return [
            "M", startOuter.x, startOuter.y,
            "A", outerR, outerR, 0, largeArcFlag, 1, endOuter.x, endOuter.y,
            "L", endInner.x, endInner.y,
            "A", innerR, innerR, 0, largeArcFlag, 0, startInner.x, startInner.y,
            "Z"
        ].join(" ");
    }

    let svgParts = [];
    svgParts.push(
        `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" aria-hidden="true">`
    );

    svgParts.push(`
        <defs>
            <filter id="sunburstGlassGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" result="blur" />
                <feColorMatrix
                    in="blur" type="matrix"
                    values="0 0 0 0 0.85
                            0 0 0 0 0.90
                            0 0 0 0 1
                            0 0 0 0.35 0"
                    result="coloredBlur"
                />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
    `);

    let currentAngle = -Math.PI / 2;
    const legendItems = [];

    topTraits.forEach((trait, index) => {
        const value = trait.average;
        const angleSpan = (value / totalValue) * fullCircle;

        const startAngle = currentAngle;
        const endAngle = currentAngle + angleSpan;
        currentAngle = endAngle;

        const strengthRatio = (value - 1) / (5 - 1);
        const outerRadius = innerRadius + minThickness + strengthRatio * extraThickness;

        const fillColor = segmentColors[index % segmentColors.length];
        const pathD = describeArcSegment(cx, cy, innerRadius, outerRadius, startAngle, endAngle);

        svgParts.push(
            `<path
                d="${pathD}"
                fill="${fillColor}"
                fill-opacity="0.9"
                filter="url(#sunburstGlassGlow)"
                stroke="#FFF7F1"
                stroke-width="1.4"
                stroke-linejoin="round"
                stroke-linecap="round"
            ></path>`
        );

        legendItems.push({ name: trait.name, color: fillColor });
    });

    svgParts.push(`
        <circle
            cx="${cx}"
            cy="${cy}"
            r="${innerRadius - 6}"
            fill="#FFF7F1"
            fill-opacity="0.96"
        ></circle>
        <text
            x="${cx}" y="${cy}"
            text-anchor="middle"
            dominant-baseline="middle"
            font-size="10"
            fill="#3B566E"
        >
            Top traits
        </text>
    `);

    svgParts.push(`</svg>`);

    let legendHtml = `<ul class="trait-sunburst-legend">`;
    legendItems.forEach(item => {
        legendHtml += `
            <li class="trait-sunburst-legend-item">
                <span class="trait-sunburst-swatch" style="background:${item.color};"></span>
                <span class="trait-sunburst-trait-name">${item.name}</span>
            </li>
        `;
    });
    legendHtml += `</ul>`;

    container.innerHTML = svgParts.join("") + legendHtml;
}

// ---------- ACTIVITY ICON HELPER (per activity, not per category) ----------

function getActivityIcon(name) {
    switch (name) {
        // Creative & Expressive
        case "Painting": return "🖌️";
        case "Drawing / Sketching": return "✏️";
        case "Digital Art": return "💻";
        case "Photography": return "📷";
        case "Photo Editing": return "🖼️";
        case "Creative Writing": return "📝";
        case "Poetry Workshops": return "📖";
        case "Music Production": return "🎧";
        case "Instrument Lessons": return "🎼";
        case "Drama & Theatre Workshops": return "🎭";
        case "Dance": return "💃";

        // Social & Collaborative
        case "Game Nights": return "🎲";
        case "Trivia / Quiz Nights": return "❓";
        case "Bowling": return "🎳";
        case "Mini Golf": return "⛳";
        case "Open Mic Nights": return "🎤";
        case "Escape Rooms": return "🔐";
        case "Scavenger Hunts": return "🧩";
        case "Arcade Trips": return "🕹️";

        // Reflective & Mindful
        case "Yoga": return "🧘";
        case "Meditation": return "🕯️";
        case "Nature Walks": return "🌳";
        case "Gardening": return "🌱";
        case "Book Club": return "📚";
        case "Origami": return "📄";

        // Physical & Fitness
        case "Running": return "🏃";
        case "Cycling": return "🚴";
        case "Gym Training": return "🏋️";
        case "Swimming": return "🏊";
        case "Rock Climbing": return "🧗";
        case "Trampoline Parks": return "🤸";
        case "Team Sports": return "🏅";

        // Hands-On & Practical
        case "Cooking & Baking": return "🧁";
        case "DIY Projects": return "🧰";
        case "Woodworking": return "🪚";
        case "Fashion Design": return "👗";
        case "Upcycling Projects": return "♻️";

        // Entertainment & Leisure
        case "Cinema Trips": return "🎬";
        case "Movie Nights": return "🍿";
        case "Karaoke Nights": return "🎙️";
        case "VR Experiences": return "🕶️";
        case "Video Gaming (solo)": return "🎮";
        case "Video Gaming (multiplayer)": return "👾";

        // Adventure & High-Energy
        case "Paintball": return "🔫";
        case "Go Karting": return "🏎️";
        case "Zip-Lining": return "🧗‍♂️";
        case "Parkour / Freerunning": return "🌀";
        case "Mountain Biking": return "🚵";

        default:
            return "•";
    }
}

// ---------- USER-FACING RESULTS ----------

function showResults() {
    const scores = calculateScores();
    const archetypeResult = determineArchetypes(scores);

    const companyReport = buildCompanyReport(scores, archetypeResult);
    sendResultsToCompany(companyReport);

    let html = "";

    const nameLine = userInfo.name
        ? `<p style="text-align:center; margin-top: 4px; margin-bottom: 18px;">
                <strong>${userInfo.name}</strong>, here’s a snapshot of how your Nulu traits are showing up right now.
           </p>`
        : `<p style="text-align:center; margin-top: 4px; margin-bottom: 18px;">
                Here’s a snapshot of how your Nulu traits are showing up right now.
           </p>`;

    html += `<h2>Your Nulu pathway</h2>`;
    html += nameLine;

    html += `<div class="results-layout">`;

    html += `<div class="traits-column">`;
    html += `<h3 class="trait-section-title">Your Nulu traits</h3>`;

    Object.keys(scores).forEach(traitName => {
        const d = scores[traitName];
        const percentage = (d.average / 5) * 100;

        html += `
            <div class="trait-row">
                <div class="trait-label">
                    <span class="trait-name">${traitName}</span>
                </div>
                <div class="trait-bar-outer">
                    <div
                        class="result-bar"
                        data-percentage="${percentage}"
                    ></div>
                </div>
            </div>
        `;
    });

    html += `</div>`;

    html += `<div class="results-divider"></div>`;

    html += `
        <div class="chart-column">
            <div class="chart-column-inner">
                <h3 class="trait-section-title">Top traits snapshot</h3>
                <p style="font-size: 0.8rem; color: #6c8197; margin: 2px 0 4px;">
                    The size of each segment shows how strongly that trait is showing up for you right now.
                </p>
                <div id="trait-sunburst"></div>
            </div>
        </div>
    `;

    html += `</div>`;

    html += `<h3 class="archetype-section-title">Your archetype profile</h3>`;
    html += `<div class="archetype-cards">`;

    if (archetypeResult.primary) {
        html += `
            <div class="archetype-card primary">
                <div class="archetype-header">
                    <div class="archetype-symbol">${archetypeResult.primary.symbol}</div>
                    <div class="archetype-name">${archetypeResult.primary.name}</div>
                </div>
                <div class="archetype-description">
                    ${archetypeResult.primary.description.replace(/\n/g, "<br />")}
                </div>
            </div>
        `;
    }

    if (archetypeResult.secondary) {
        html += `
            <div class="archetype-card secondary">
                <div class="archetype-header">
                    <div class="archetype-symbol">${archetypeResult.secondary.symbol}</div>
                    <div class="archetype-name">${archetypeResult.secondary.name}</div>
                </div>
                <div class="archetype-description">
                    ${archetypeResult.secondary.description.replace(/\n/g, "<br />")}
                </div>
            </div>
        `;
    }

    html += `</div>`;

    const traitsForActivities = Object.keys(scores).map(traitName => {
        const avg = scores[traitName].average;
        return {
            name: traitName,
            average: avg,
            band: bandForAverage(avg)
        };
    });

    const youngActivities = buildSuggestedActivitiesForYoungPerson(traitsForActivities);

    html += `
        <h3 class="activities-section-title" style="margin-top: 22px; font-size: 1.05rem; color:#264E70;">
            Activity ideas for you
        </h3>
        <p style="font-size: 0.85rem; color:#6c8197; margin: 4px 0 10px; max-width: 520px;">
            These are just ideas. You never have to do anything you don’t want to – they’re here so you
            and your adults can spot things that might feel like a good fit for you right now.
        </p>
    `;

    if (youngActivities.fit.length === 0 && youngActivities.growth.length === 0) {
        html += `
            <p style="font-size:0.85rem; color:#6c8197; margin-bottom: 12px;">
                No activity ideas popped up this time. That’s okay – you can always talk with your support
                team about what feels right for you.
            </p>
        `;
    } else {
        // NOTE: no slice(...) now – we list all matches, no internal scrolling logic needed
        const fitListItems = youngActivities.fit.map(act => {
            const icon = getActivityIcon(act.name);
            return `
                <li class="activity-list-item">
                    <span class="activity-list-icon">${icon}</span>
                    <div class="activity-list-main">
                        <span class="activity-list-name">${act.name}</span>
                        <span class="activity-list-category">${act.category}</span>
                    </div>
                </li>
            `;
        }).join("");

        const growthListItems = youngActivities.growth.map(act => {
            const icon = getActivityIcon(act.name);
            return `
                <li class="activity-list-item">
                    <span class="activity-list-icon">${icon}</span>
                    <div class="activity-list-main">
                        <span class="activity-list-name">${act.name}</span>
                        <span class="activity-list-category">${act.category}</span>
                    </div>
                </li>
            `;
        }).join("");

        html += `
            <div class="activity-columns">
                <div class="activity-column">
                    <div class="activity-column-title">
                        Feel like a good fit for you
                    </div>

                    <div class="activity-flip-card fit" role="button" tabindex="0">
                        <div class="activity-card-inner">
                            <div class="activity-card-face activity-card-front">
                                <p class="activity-front-heading">Reveal</p>
                            </div>
                            <div class="activity-card-face activity-card-back">
                                <p class="activity-back-heading">
                                    Might feel like a good fit
                                </p>
                                ${
                                    fitListItems
                                        ? `<ul class="activity-list">${fitListItems}</ul>`
                                        : `<p class="activity-empty-text">
                                            Nothing specific popped up here this time.
                                        </p>`
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div class="activity-column">
                    <div class="activity-column-title">
                        Have you tried…?
                    </div>

                    <div class="activity-flip-card growth" role="button" tabindex="0">
                        <div class="activity-card-inner">
                            <div class="activity-card-face activity-card-front">
                                <p class="activity-front-heading">Reveal</p>
                            </div>
                            <div class="activity-card-face activity-card-back">
                                <p class="activity-back-heading">
                                    Ideas to gently stretch you
                                </p>
                                ${
                                    growthListItems
                                        ? `<ul class="activity-list">${growthListItems}</ul>`
                                        : `<p class="activity-empty-text">
                                            No “have you tried…?” ideas came up this time – that’s totally okay.
                                        </p>`
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    html += `
        <div style="margin-top: 24px; text-align:center;">
            <button id="email-results-btn" style="padding: 8px 16px; font-size: 16px;">
                Send my results to my support team
            </button>
        </div>
    `;

    html += `
        <p class="results-footer">
            Thank you for completing your Nulu pathway. These insights are here to help the adults
            around you shape spaces, activities and routines that feel more like you.
        </p>
   `;

    quizContainer.innerHTML = html;
    nextBtn.style.display = "none";

    const helper = document.querySelector(".helper-text");
    if (helper) helper.style.display = "none";

    const bars = document.querySelectorAll(".result-bar");
    bars.forEach((bar, index) => {
        const target = bar.getAttribute("data-percentage");
        setTimeout(() => {
            bar.style.width = target + "%";
        }, 150 + index * 120);
    });

    renderTraitSunburst(scores);

    // Flip behaviour – one card per column
    const fitCard = document.querySelector(".activity-flip-card.fit");
    const growthCard = document.querySelector(".activity-flip-card.growth");

    if (fitCard) {
        const toggleFit = () => fitCard.classList.toggle("flipped");
        fitCard.addEventListener("click", toggleFit);
        fitCard.addEventListener("keypress", e => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleFit();
            }
        });
    }

    if (growthCard) {
        const toggleGrowth = () => growthCard.classList.toggle("flipped");
        growthCard.addEventListener("click", toggleGrowth);
        growthCard.addEventListener("keypress", e => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleGrowth();
            }
        });
    }

    const emailBtn = document.getElementById("email-results-btn");
    if (emailBtn) {
        emailBtn.addEventListener("click", () => {
            sendResultsByEmail(companyReport);
        });
    }
}

// ---------- FLOW CONTROL ----------

function showSubmitScreen() {
    quizContainer.innerHTML = `
        <button id="submit-btn" style="padding: 10px 20px; font-size: 18px;">
            See My Results
        </button>
    `;
    nextBtn.style.display = "none";
    document.getElementById("submit-btn").addEventListener("click", showResults);
}

nextBtn.addEventListener("click", () => {
    const group = questionGroups[currentGroupIndex];
    const traitName = group.trait;

    if (!answers[traitName]) answers[traitName] = [];

    for (let i = 0; i < group.questions.length; i++) {
        const qName = `trait${currentGroupIndex}_q${i}`;
        const selected = document.querySelector(`input[name="${qName}"]:checked`);
        if (!selected) {
            alert("Please answer all questions before continuing.");
            return;
        }
        answers[traitName][i] = Number(selected.value);
    }

    currentGroupIndex++;

    if (currentGroupIndex < questionGroups.length) {
        loadCurrentGroup();
    } else {
        showSubmitScreen();
    }
});

// Initial load
showIntroScreen();
