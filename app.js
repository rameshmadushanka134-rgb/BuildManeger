// --- CONFIGURATION & LOCALIZATION ---
const CATEGORY_MAP = {
    "Cement": { en: "Cement", si: "සිමෙන්ති" },
    "Sand": { en: "Sand", si: "වැලි" },
    "Metal/Iron": { en: "Metal/Iron", si: "යකඩ / ලෝහ" },
    "Bricks/Blocks": { en: "Bricks/Blocks", si: "ගඩොල් / කොන්ක්‍රීට් ගල්" },
    "Wood/Timber": { en: "Wood/Timber", si: "ලී / දැව" },
    "Labor": { en: "Labor/Contractor", si: "කම්කරු කුලී / කොන්ත්‍රාත්" },
    "Permits": { en: "Legal/Permits", si: "අවසර පත්‍ර / නීතිමය" },
    "Transport": { en: "Transport/Delivery", si: "ප්‍රවාහන වියදම්" },
    "Plumbing": { en: "Plumbing", si: "නල මාර්ග (Plumbing)" },
    "Electrical": { en: "Electrical", si: "විදුලි වැඩ (Electrical)" },
    "Roofing": { en: "Roofing", si: "වහල වැඩ" },
    "Other": { en: "Other/Miscellaneous", si: "වෙනත් වියදම්" }
};

const SHOP_MAP = {
    "shop1": { en: "Shop 1", si: "කඩ කාමරය 1" },
    "shop2": { en: "Shop 2", si: "කඩ කාමරය 2" },
    "shared": { en: "Shared", si: "පොදු" }
};

const SECTION_TRANSLATIONS = {
    commercial: {
        en: {
            label: "Shop Allocation",
            shop1: "Shop 1",
            shop2: "Shop 2",
            shared: "Shared",
            shop1Long: "Shop 1 (Direct + Shared)",
            shop2Long: "Shop 2 (Direct + Shared)",
            sharedLong: "Total Shared/Common Cost",
            sharedHelp: "Shared costs are split 50/50 between Shop 1 and Shop 2.",
            breakdownTitle: "Shop Cost Breakdown",
            comparisonTitle: "Shop Expense Comparison"
        },
        si: {
            label: "කඩ කාමරය",
            shop1: "කඩ කාමරය 1",
            shop2: "කඩ කාමරය 2",
            shared: "පොදු",
            shop1Long: "කඩ කාමරය 1 (සෘජු + පොදු)",
            shop2Long: "කඩ කාමරය 2 (සෘජු + පොදු)",
            sharedLong: "මුළු පොදු වියදම්",
            sharedHelp: "පොදු වියදම් කඩ කාමර 1 සහ 2 අතර 50/50 ලෙස සමානව බෙදා හරිනු ලැබේ.",
            breakdownTitle: "කඩ කාමර අනුව වියදම් බෙදීයාම",
            comparisonTitle: "කඩ කාමර අනුව වියදම් සංසන්දනය"
        }
    },
    residential: {
        en: {
            label: "House Section Allocation",
            shop1: "Living Room",
            shop2: "Bedrooms",
            shared: "Kitchen & Bath",
            section4: "Foundation/Shared",
            shop1Long: "Living Room (Direct + Shared)",
            shop2Long: "Bedrooms (Direct + Shared)",
            shop3Long: "Kitchen & Bath (Direct + Shared)",
            sharedLong: "Foundation / Shared Cost",
            sharedHelp: "Shared costs are split 33.3% across Living, Bedrooms, Kitchen/Bath.",
            breakdownTitle: "House Cost Breakdown",
            comparisonTitle: "House Expense Comparison"
        },
        si: {
            label: "නිවසේ කොටස",
            shop1: "සාලය",
            shop2: "නිදන කාමර",
            shared: "කුස්සිය සහ නානකාමරය",
            section4: "අත්තිවාරම සහ පොදු",
            shop1Long: "සාලය (සෘජු + පොදු)",
            shop2Long: "නිදන කාමර (සෘජු + පොදු)",
            shop3Long: "කුස්සිය සහ නානකාමරය (සෘජු + පොදු)",
            sharedLong: "අත්තිවාරම සහ පොදු වියදම්",
            sharedHelp: "පොදු වියදම් සාලය, නිදන කාමර, සහ කුස්සිය/නානකාමරය අතර 33.3% බැගින් බෙදා හරිනු ලැබේ.",
            breakdownTitle: "නිවසේ කොටස් අනුව වියදම් බෙදීයාම",
            comparisonTitle: "නිවසේ කොටස් අනුව වියදම් සංසන්දනය"
        }
    },
    annex: {
        en: {
            label: "Annex Section Allocation",
            shop1: "Main Room Space",
            shop2: "Washroom",
            shared: "Shared/Exterior",
            shop1Long: "Main Room Space (Direct + Shared)",
            shop2Long: "Washroom (Direct + Shared)",
            sharedLong: "Total Shared/Exterior Cost",
            sharedHelp: "Shared costs are split 50/50 between Main Room and Washroom.",
            breakdownTitle: "Annex Cost Breakdown",
            comparisonTitle: "Annex Expense Comparison"
        },
        si: {
            label: "ඇනෙක්ස් කොටස",
            shop1: "ප්‍රධාන කාමර කොටස",
            shop2: "නානකාමරය",
            shared: "පොදු / බාහිර",
            shop1Long: "ප්‍රධාන කාමර කොටස (සෘජු + පොදු)",
            shop2Long: "නානකාමරය (සෘජු + පොදු)",
            sharedLong: "මුළු පොදු / බාහිර වියදම්",
            sharedHelp: "පොදු වියදම් ප්‍රධාන කාමරය සහ නානකාමරය අතර 50/50 ලෙස සමානව බෙදා හරිනු ලැබේ.",
            breakdownTitle: "ඇනෙක්ස් කොටස් අනුව වියදම් බෙදීයාම",
            comparisonTitle: "ඇනෙක්ස් කොටස් අනුව වියදම් සංසන්දනය"
        }
    },
    factory: {
        en: {
            label: "Factory Section Allocation",
            shop1: "Production Area",
            shop2: "Warehouse/Storage",
            shared: "Office/Shared",
            shop1Long: "Production Area (Direct + Shared)",
            shop2Long: "Warehouse/Storage (Direct + Shared)",
            sharedLong: "Total Office/Shared Cost",
            sharedHelp: "Shared costs are split 50/50 between Production and Warehouse.",
            breakdownTitle: "Factory Cost Breakdown",
            comparisonTitle: "Factory Expense Comparison"
        },
        si: {
            label: "කර්මාන්තශාලා කොටස",
            shop1: "නිෂ්පාදන අංශය",
            shop2: "ගබඩාව/තැන්පතු අංශය",
            shared: "කාර්යාලය/පොදු ප්‍රදේශය",
            shop1Long: "නිෂ්පාදන අංශය (සෘජු + පොදු)",
            shop2Long: "ගබඩාව/තැන්පතු අංශය (සෘජු + පොදු)",
            sharedLong: "මුළු කාර්යාලය/පොදු වියදම්",
            sharedHelp: "පොදු වියදම් නිෂ්පාදන සහ ගබඩා අංශ අතර 50/50 ලෙස බෙදා හරිනු ලැබේ.",
            breakdownTitle: "කර්මාන්තශාලා කොටස් අනුව වියදම් බෙදීයාම",
            comparisonTitle: "කර්මාන්තශාලා කොටස් අනුව වියදම් සංසන්දනය"
        }
    },
    storeroom: {
        en: {
            label: "Storeroom Section Allocation",
            shop1: "Storage Area A",
            shop2: "Storage Area B",
            shared: "Loading/Shared Area",
            shop1Long: "Storage Area A (Direct + Shared)",
            shop2Long: "Storage Area B (Direct + Shared)",
            sharedLong: "Total Loading/Shared Cost",
            sharedHelp: "Shared costs are split 50/50 between Storage Area A and B.",
            breakdownTitle: "Storeroom Cost Breakdown",
            comparisonTitle: "Storeroom Expense Comparison"
        },
        si: {
            label: "ගබඩා කොටස",
            shop1: "ගබඩා අංශය A",
            shop2: "ගබඩා අංශය B",
            shared: "බඩු පටවන/පොදු ප්‍රදේශය",
            shop1Long: "ගබඩා අංශය A (සෘජු + පොදු)",
            shop2Long: "ගබඩා අංශය B (සෘජු + පොදු)",
            sharedLong: "මුළු බඩු පටවන/පොදු වියදම්",
            sharedHelp: "පොදු වියදම් ගබඩා අංශ A සහ B අතර 50/50 ලෙස බෙදා හරිනු ලැබේ.",
            breakdownTitle: "ගබඩා කොටස් අනුව වියදම් බෙදීයාම",
            comparisonTitle: "ගබඩා කොටස් අනුව වියදම් සංසන්දනය"
        }
    },
    hall: {
        en: {
            label: "Hall Section Allocation",
            shop1: "Main Hall Space",
            shop2: "Stage & Backstage",
            shared: "Lobby & Utilities",
            shop1Long: "Main Hall Space (Direct + Shared)",
            shop2Long: "Stage & Backstage (Direct + Shared)",
            sharedLong: "Total Lobby/Utilities Cost",
            sharedHelp: "Shared costs are split 50/50 between Main Hall and Stage.",
            breakdownTitle: "Hall Cost Breakdown",
            comparisonTitle: "Hall Expense Comparison"
        },
        si: {
            label: "ශාලා කොටස",
            shop1: "ප්‍රධාන ශාලාව",
            shop2: "වේදිකාව සහ පසුපස",
            shared: "පිවිසුම් මණ්ඩපය සහ සේවා",
            shop1Long: "ප්‍රධාන ශාලාව (සෘජු + පොදු)",
            shop2Long: "වේදිකාව සහ පසුපස (සෘජු + පොදු)",
            sharedLong: "මුළු පිවිසුම්/පොදු සේවා වියදම්",
            sharedHelp: "පොදු වියදම් ප්‍රධාන ශාලාව සහ වේදිකාව අතර 50/50 ලෙස බෙදා හරිනු ලැබේ.",
            breakdownTitle: "ශාලා කොටස් අනුව වියදම් බෙදීයාම",
            comparisonTitle: "ශාලා කොටස් අනුව වියදම් සංසන්දනය"
        }
    },
    open_area: {
        en: {
            label: "Open Area Allocation",
            shop1: "Garden/Lawn",
            shop2: "Parking Area",
            shared: "Pathways/Common Area",
            shop1Long: "Garden/Lawn (Direct + Shared)",
            shop2Long: "Parking Area (Direct + Shared)",
            sharedLong: "Total Pathways/Common Cost",
            sharedHelp: "Shared costs are split 50/50 between Garden and Parking Area.",
            breakdownTitle: "Open Area Cost Breakdown",
            comparisonTitle: "Open Area Expense Comparison"
        },
        si: {
            label: "විවෘත ප්‍රදේශ කොටස",
            shop1: "උද්‍යානය/තණකොළ පිට්ටනිය",
            shop2: "රථ ගාල් කිරීමේ ප්‍රදේශය",
            shared: "මංතීරු සහ පොදු ප්‍රදේශය",
            shop1Long: "උද්‍යානය/තණකොළ පිට්ටනිය (සෘජු + පොදු)",
            shop2Long: "රථ ගාල් කිරීමේ ප්‍රදේශය (සෘජු + පොදු)",
            sharedLong: "මුළු මංතීරු/පොදු වියදම්",
            sharedHelp: "පොදු වියදම් උද්‍යානය සහ රථ ගාල් කිරීමේ ප්‍රදේශ අතර 50/50 ලෙස බෙදා හරිනු ලැබේ.",
            breakdownTitle: "විවෘත ප්‍රදේශ කොටස් අනුව වියදම් බෙදීයාම",
            comparisonTitle: "විවෘත ප්‍රදේශ කොටස් අනුව වියදම් සංසන්දනය"
        }
    }
};

// --- INITIAL STATE ---
let state = {
    projects: [],
    activeProjectId: "",
    language: 'en',
    theme: 'light',
    
    // Bound dynamically to active project properties
    budget: 3000000.00,
    expenses: [],
    payments: [],
    drawings: [],
    notes: ""
};

// Chart instances
let categoryChart = null;
let shopChart = null;

// Drawing Pad variables
let canvas = null;
let ctx = null;
let isDrawing = false;
let brushColor = '#ffffff'; // White default on blueprint background
let brushSize = 5;
let isEraser = false;

// Color swatches mapping for blueprint canvas
const BLUEPRINT_COLORS = {
    "#000000": "#ffffff", // Black swatch -> White ink
    "#0000ff": "#38bdf8", // Blue swatch -> Light blue ink
    "#ff0000": "#f87171", // Red swatch -> Light red ink
    "#00aa00": "#4ade80", // Green swatch -> Light green ink
    "eraser": "#0f4c81"   // Eraser matches blueprint blue background
};

// Camera Stream state
let mediaStream = null;
let currentCameraFacingMode = "environment"; // default to back camera
let activePhotoTargetInput = null; // 'expense', 'quick', or 'progress'

// Blueprint Template Generator state
let templateCanvas = null;
let templateCtx = null;

// --- PROJECT NAME TRANSLATOR HELPER ---
function getTranslatedProjectName(name, lang) {
    if (lang === 'si') {
        if (name === "My Commercial Shop" || name === "මගේ කඩ කාමර ව්‍යාපෘතිය" || name === "Shop Construction (Kapuwatta)") return "මගේ කඩ කාමර ව්‍යාපෘතිය";
        if (name === "My Residential House" || name === "මගේ නිවාස ව්‍යාපෘතිය") return "මගේ නිවාස ව්‍යාපෘතිය";
        if (name === "My Factory Workspace" || name === "මගේ කර්මාන්තශාලා ව්‍යාපෘතිය") return "මගේ කර්මාන්තශාලා ව්‍යාපෘතිය";
        if (name === "My Storeroom" || name === "මගේ ගබඩා කාමරය" || name === "මගේ ගැබඩා කාමරය") return "මගේ ගබඩා කාමරය";
        if (name === "My Assembly Hall" || name === "මගේ රැස්වීම් ශාලාව") return "මගේ රැස්වීම් ශාලාව";
        if (name === "My Open Area & Park" || name === "මගේ විවෘත ප්‍රදේශය සහ උද්‍යානය") return "මගේ විවෘත ප්‍රදේශය සහ උද්‍යානය";
    } else {
        if (name === "My Commercial Shop" || name === "මගේ කඩ කාමර ව්‍යාපෘතිය" || name === "Shop Construction (Kapuwatta)") return "My Commercial Shop";
        if (name === "My Residential House" || name === "මගේ නිවාස ව්‍යාපෘතිය") return "My Residential House";
        if (name === "My Factory Workspace" || name === "මගේ කර්මාන්තශාලා ව්‍යාපෘතිය") return "My Factory Workspace";
        if (name === "My Storeroom" || name === "මගේ ගබඩා කාමරය" || name === "මගේ ගැබඩා කාමරය") return "My Storeroom";
        if (name === "My Assembly Hall" || name === "මගේ රැස්වීම් ශාලාව") return "My Assembly Hall";
        if (name === "My Open Area & Park" || name === "මගේ විවෘත ප්‍රදේශය සහ උද්‍යානය") return "My Open Area & Park";
    }
    return name;
}

// --- STATE MANAGEMENT ---
// --- GET ACTIVE PROJECT HELPER ---
function getActiveProject() {
    if (!state.projects || state.projects.length === 0) {
        const newProj = {
            id: "proj-default",
            name: "My Commercial Shop",
            type: "commercial",
            budget: 3000000.00,
            expenses: [],
            payments: [],
            drawings: getDefaultDrawings(),
            notes: ""
        };
        state.projects = [newProj];
        state.activeProjectId = newProj.id;
    }
    let activeProj = state.projects.find(p => p.id === state.activeProjectId);
    if (!activeProj) {
        state.activeProjectId = state.projects[0].id;
        activeProj = state.projects[0];
    }
    return activeProj;
}

// --- STATE MANAGEMENT ---
function loadState() {
    const savedState = localStorage.getItem('kapuwatta_project_state');
    
    const defaultProjects = [
        {
            id: "proj-default",
            name: "My Commercial Shop",
            type: "commercial",
            budget: 3000000.00,
            expenses: [
                { id: "exp-1", date: getTodayOffsetDate(-5), name: "Foundation Concrete (10 cubes)", category: "Metal/Iron", shop: "shared", unitPrice: 45000, qty: 2, total: 90000, photo: "" },
                { id: "exp-2", date: getTodayOffsetDate(-4), name: "50 Cement Bags (Tokyo Super)", category: "Cement", shop: "shop1", unitPrice: 2200, qty: 50, total: 110000, photo: "" },
                { id: "exp-3", date: getTodayOffsetDate(-3), name: "Brickwork Contractor Advance", category: "Labor", shop: "shop2", unitPrice: 75000, qty: 1, total: 75000, photo: "" }
            ],
            payments: [
                { id: "pay-1", date: getTodayOffsetDate(-3), recipient: "Sunil (Mason Contractor)", amount: 75000, method: "Cash", notes: "Brickwork advance payment" }
            ],
            drawings: getDefaultDrawings(),
            notes: "This is a notebook for your construction details. Write mason contact details, brick delivery dates, or other custom project notes here!"
        },
        {
            id: "proj-house",
            name: "My Residential House",
            type: "residential",
            budget: 5000000.00,
            expenses: [
                { id: "exp-h1", date: getTodayOffsetDate(-4), name: "Living Room Floor Tiles", category: "Wood/Timber", shop: "shop1", unitPrice: 1800, qty: 60, total: 108000, photo: "" },
                { id: "exp-h2", date: getTodayOffsetDate(-2), name: "Kitchen Sink Fittings", category: "Plumbing", shop: "shared", unitPrice: 25000, qty: 1, total: 25000, photo: "" }
            ],
            payments: [],
            drawings: getDefaultDrawings(),
            notes: "Residential House Notes: Living Room, Bedrooms, Kitchen & Bath sections."
        },
        {
            id: "proj-factory",
            name: "My Factory Workspace",
            type: "factory",
            budget: 8000000.00,
            expenses: [
                { id: "exp-f1", date: getTodayOffsetDate(-6), name: "Steel Structure Beams", category: "Metal/Iron", shop: "shop1", unitPrice: 120000, qty: 3, total: 360000, photo: "" },
                { id: "exp-f2", date: getTodayOffsetDate(-1), name: "Warehouse Roof Sheet Panels", category: "Roofing", shop: "shop2", unitPrice: 4500, qty: 80, total: 360000, photo: "" }
            ],
            payments: [],
            drawings: getDefaultDrawings(),
            notes: "Factory Workspace Notes: Production Area and Warehouse/Storage sections."
        },
        {
            id: "proj-storeroom",
            name: "My Storeroom",
            type: "storeroom",
            budget: 1500000.00,
            expenses: [
                { id: "exp-s1", date: getTodayOffsetDate(-2), name: "Heavy Duty Storage Racks", category: "Other", shop: "shop1", unitPrice: 35000, qty: 4, total: 140000, photo: "" }
            ],
            payments: [],
            drawings: getDefaultDrawings(),
            notes: "Storeroom Notes: Storage Area A and B details."
        },
        {
            id: "proj-hall",
            name: "My Assembly Hall",
            type: "hall",
            budget: 6000000.00,
            expenses: [
                { id: "exp-hl1", date: getTodayOffsetDate(-3), name: "Sound System Wiring", category: "Electrical", shop: "shop1", unitPrice: 85000, qty: 1, total: 85000, photo: "" }
            ],
            payments: [],
            drawings: getDefaultDrawings(),
            notes: "Assembly Hall Notes: Main Hall and Stage/Utilities details."
        },
        {
            id: "proj-openarea",
            name: "My Open Area & Park",
            type: "open_area",
            budget: 2000000.00,
            expenses: [
                { id: "exp-o1", date: getTodayOffsetDate(-5), name: "Garden Grass Sod (500 sqft)", category: "Other", shop: "shop1", unitPrice: 150, qty: 500, total: 75000, photo: "" }
            ],
            payments: [],
            drawings: getDefaultDrawings(),
            notes: "Open Area Notes: Garden/Lawn and Parking area details."
        }
    ];

    if (savedState) {
        try {
            state = JSON.parse(savedState);
            
            // Migration for old single-project structure
            if (!state.projects || state.projects.length === 0) {
                const oldProject = {
                    id: "proj-default",
                    name: "My Commercial Shop",
                    type: "commercial",
                    budget: state.budget !== undefined ? state.budget : 3000000.00,
                    expenses: state.expenses || [],
                    payments: state.payments || [],
                    drawings: state.drawings || getDefaultDrawings(),
                    notes: state.notes || ""
                };
                state.projects = [oldProject];
                state.activeProjectId = "proj-default";
            }
            
            // Rename old default project name for existing users
            state.projects.forEach(p => {
                if (p.id === "proj-default" && p.name === "Shop Construction (Kapuwatta)") {
                    p.name = "My Commercial Shop";
                }
            });
            
            // Sync default sample templates for existing users
            const typesInStorage = state.projects.map(p => p.type);
            defaultProjects.forEach(dp => {
                if (!typesInStorage.includes(dp.type)) {
                    state.projects.push(dp);
                }
            });
            
            // Bind active project properties to state wrapper
            const activeProj = getActiveProject();
            state.expenses = activeProj.expenses || [];
            state.payments = activeProj.payments || [];
            state.drawings = activeProj.drawings || [];
            state.budget = activeProj.budget !== undefined ? activeProj.budget : 3000000.00;
            state.notes = activeProj.notes || "";
            
            if (!state.language) state.language = 'en';
            if (!state.theme) state.theme = 'light';
        } catch (e) {
            console.error("Error loading state", e);
        }
    } else {
        state.projects = defaultProjects;
        state.activeProjectId = "proj-default";
        
        const activeProj = getActiveProject();
        state.expenses = activeProj.expenses;
        state.payments = activeProj.payments;
        state.drawings = activeProj.drawings;
        state.budget = activeProj.budget;
        state.notes = activeProj.notes;
        state.language = 'en';
        state.theme = 'light';
        
        saveState();
    }

    // Always ensure drawings has the new default blueprints and migrates old ones
    let stateDrawingsModified = false;
    const newDefaults = getDefaultDrawings();
    const newDefaultIds = newDefaults.map(d => d.id);
    const initialCount = state.drawings.length;
    
    state.drawings = state.drawings.filter(d => !d.isDefault || newDefaultIds.includes(d.id));
    if (state.drawings.length !== initialCount) {
        stateDrawingsModified = true;
    }

    newDefaults.forEach(defDraw => {
        if (!state.drawings.some(d => d.id === defDraw.id)) {
            state.drawings.unshift(defDraw);
            stateDrawingsModified = true;
        }
    });

    if (stateDrawingsModified) {
        saveState();
    }
}

function getDefaultDrawings() {
    return [
      {
        "id": "draw-house-1",
        "title": "Modern 2-Bedroom Layout 1",
        "title_si": "නූතන කාමර 2ක සැලැස්ම 1",
        "desc": "Architectural Floor Plan Template. Original: 1 PLATE 79 GRUNDRISS DES HAUPT UND OBERGESCHOSSES FLOOR PLAN.",
        "desc_si": "ආකෘතිමය නිවාස බිම් සැලැස්ම. මුල් පිටපත: 1 PLATE 79 GRUNDRISS DES HAUPT UND OBERGESCHOSSES FLOOR PLAN.",
        "src": "house_plans/1._PLATE__79___GRUNDRISS_DES_HAUPT_UND_O.jpg",
        "isDefault": true
      },
      {
        "id": "draw-house-2",
        "title": "Traditional Floor Plan 1",
        "title_si": "සාම්ප්‍රදායික නිවාස සැලැස්ම 1",
        "desc": "Architectural Floor Plan Template. Original: 178 Central Street Somerville MA.",
        "desc_si": "ආකෘතිමය නිවාස බිම් සැලැස්ම. මුල් පිටපත: 178 Central Street Somerville MA.",
        "src": "house_plans/178_Central_Street_Somerville_MA.png.png",
        "isDefault": true
      },
      {
        "id": "draw-house-3",
        "title": "Compact Single Story Plan 1",
        "title_si": "කුඩා තනි මහල් සැලැස්ම 1",
        "desc": "Architectural Floor Plan Template. Original: 1920 Harris Homes plan M1022.",
        "desc_si": "ආකෘතිමය නිවාස බිම් සැලැස්ම. මුල් පිටපත: 1920 Harris Homes plan M1022.",
        "src": "house_plans/1920_Harris_Homes_plan_M1022.jpg.jpg",
        "isDefault": true
      },
      {
        "id": "draw-house-4",
        "title": "Double Story Villa Layout 1",
        "title_si": "දෙමහල් විලා සැලැස්ම 1",
        "desc": "Architectural Floor Plan Template. Original: 1924 A Ventura GR 3302.",
        "desc_si": "ආකෘතිමය නිවාස බිම් සැලැස්ම. මුල් පිටපත: 1924 A Ventura GR 3302.",
        "src": "house_plans/1924_A._Ventura_GR_3302.jpg.jpg",
        "isDefault": true
      },
      {
        "id": "draw-house-5",
        "title": "Spacious 3-Bedroom House 1",
        "title_si": "විශාල කාමර 3ක සැලැස්ම 1",
        "desc": "Architectural Floor Plan Template. Original: 1930s state house.",
        "desc_si": "ආකෘතිමය නිවාස බිම් සැලැස්ම. මුල් පිටපත: 1930s state house.",
        "src": "house_plans/1930s_state_house.jpg.jpg",
        "isDefault": true
      },
      {
        "id": "draw-house-6",
        "title": "Eco-Friendly Concept Layout 1",
        "title_si": "පරිසර හිතකාමී සංකල්ප සැලැස්ම 1",
        "desc": "Architectural Floor Plan Template. Original: 193 of Christians under the Crescent in Asia With illustrati.",
        "desc_si": "ආකෘතිමය නිවාස බිම් සැලැස්ම. මුල් පිටපත: 193 of Christians under the Crescent in Asia With illustrati.",
        "src": "house_plans/193_of__Christians_under_the_Crescent_in.jpg",
        "isDefault": true
      },
      {
        "id": "draw-house-7",
        "title": "Classic Cottage Layout 1",
        "title_si": "සාම්ප්‍රදායික කොටේජ් සැලැස්ම 1",
        "desc": "Architectural Floor Plan Template. Original: 203 of Bidrag till vr odlings hfder utgifna af A Hazelius de.",
        "desc_si": "ආකෘතිමය නිවාස බිම් සැලැස්ම. මුල් පිටපත: 203 of Bidrag till vr odlings hfder utgifna af A Hazelius de.",
        "src": "house_plans/203_of__Bidrag_till_v_r_odlings_h_fder__.jpg",
        "isDefault": true
      },
      {
        "id": "draw-house-8",
        "title": "Open Concept Floor Plan 1",
        "title_si": "විවෘත සංකල්ප සැලැස්ම 1",
        "desc": "Architectural Floor Plan Template. Original: 20 St Jamess Square first.",
        "desc_si": "ආකෘතිමය නිවාස බිම් සැලැස්ම. මුල් පිටපත: 20 St Jamess Square first.",
        "src": "house_plans/20_St_James_s_Square_first.jpg.jpg",
        "isDefault": true
      },
      {
        "id": "draw-house-9",
        "title": "Minimalist Studio Layout 1",
        "title_si": "කුඩා ස්ටූඩියෝ සැලැස්ම 1",
        "desc": "Architectural Floor Plan Template. Original: 20 St Jamess Square ground.",
        "desc_si": "ආකෘතිමය නිවාස බිම් සැලැස්ම. මුල් පිටපත: 20 St Jamess Square ground.",
        "src": "house_plans/20_St_James_s_Square_ground.jpg.jpg",
        "isDefault": true
      },
      {
        "id": "draw-house-10",
        "title": "Urban Duplex Blueprint 1",
        "title_si": "නාගරික ඩියුප්ලෙක්ස් සැලැස්ම 1",
        "desc": "Architectural Floor Plan Template. Original: 237 of A House-hunter in Europe 11302584353.",
        "desc_si": "ආකෘතිමය නිවාස බිම් සැලැස්ම. මුල් පිටපත: 237 of A House-hunter in Europe 11302584353.",
        "src": "house_plans/237_of__A_House-hunter_in_Europe___11302.jpg",
        "isDefault": true
      },
      {
        "id": "draw-house-11",
        "title": "Modern 2-Bedroom Layout 2",
        "title_si": "නූතන කාමර 2ක සැලැස්ම 2",
        "desc": "Architectural Floor Plan Template. Original: 24 of Hardships made easy Domestic hardships Hardships in tr.",
        "desc_si": "ආකෘතිමය නිවාස බිම් සැලැස්ම. මුල් පිටපත: 24 of Hardships made easy Domestic hardships Hardships in tr.",
        "src": "house_plans/24_of__Hardships_made_easy._Domestic_har.jpg",
        "isDefault": true
      },
      {
        "id": "draw-house-12",
        "title": "Traditional Floor Plan 2",
        "title_si": "සාම්ප්‍රදායික නිවාස සැලැස්ම 2",
        "desc": "Architectural Floor Plan Template. Original: 26 of Sveriges Historia frn ldsta tid till vra dagar etc 110.",
        "desc_si": "ආකෘතිමය නිවාස බිම් සැලැස්ම. මුල් පිටපත: 26 of Sveriges Historia frn ldsta tid till vra dagar etc 110.",
        "src": "house_plans/26_of__Sveriges_Historia_fr_n__ldsta_tid.jpg",
        "isDefault": true
      },
      {
        "id": "draw-house-13",
        "title": "Compact Single Story Plan 2",
        "title_si": "කුඩා තනි මහල් සැලැස්ම 2",
        "desc": "Architectural Floor Plan Template. Original: 2 bhk Bungalow floor plan.",
        "desc_si": "ආකෘතිමය නිවාස බිම් සැලැස්ම. මුල් පිටපත: 2 bhk Bungalow floor plan.",
        "src": "house_plans/2_bhk_Bungalow_floor_plan.jpg.jpg",
        "isDefault": true
      },
      {
        "id": "draw-house-14",
        "title": "Double Story Villa Layout 2",
        "title_si": "දෙමහල් විලා සැලැස්ම 2",
        "desc": "Architectural Floor Plan Template. Original: 30BY35 home plan by ER AYUSH TOMAR 9997233546.",
        "desc_si": "ආකෘතිමය නිවාස බිම් සැලැස්ම. මුල් පිටපත: 30BY35 home plan by ER AYUSH TOMAR 9997233546.",
        "src": "house_plans/30BY35_home_plan_by_ER._AYUSH_TOMAR_9997.jpg",
        "isDefault": true
      },
      {
        "id": "draw-house-15",
        "title": "Spacious 3-Bedroom House 2",
        "title_si": "විශාල කාමර 3ක සැලැස්ම 2",
        "desc": "Architectural Floor Plan Template. Original: 3d home drawings.",
        "desc_si": "ආකෘතිමය නිවාස බිම් සැලැස්ම. මුල් පිටපත: 3d home drawings.",
        "src": "house_plans/3d_home_drawings.jpg.jpg",
        "isDefault": true
      },
      {
        "id": "draw-house-16",
        "title": "Eco-Friendly Concept Layout 2",
        "title_si": "පරිසර හිතකාමී සංකල්ප සැලැස්ම 2",
        "desc": "Architectural Floor Plan Template. Original: 476 of La Vie Amricaine Ouvrage illustr etc 11301498326.",
        "desc_si": "ආකෘතිමය නිවාස බිම් සැලැස්ම. මුල් පිටපත: 476 of La Vie Amricaine Ouvrage illustr etc 11301498326.",
        "src": "house_plans/476_of__La_Vie_Am_ricaine._Ouvrage_illus.jpg",
        "isDefault": true
      },
      {
        "id": "draw-house-17",
        "title": "Classic Cottage Layout 2",
        "title_si": "සාම්ප්‍රදායික කොටේජ් සැලැස්ම 2",
        "desc": "Architectural Floor Plan Template. Original: 48 and 50 King Street Houses New York New York County NY HAB.",
        "desc_si": "ආකෘතිමය නිවාස බිම් සැලැස්ම. මුල් පිටපත: 48 and 50 King Street Houses New York New York County NY HAB.",
        "src": "house_plans/48_and_50_King_Street__Houses___New_York.png",
        "isDefault": true
      },
      {
        "id": "draw-house-18",
        "title": "Open Concept Floor Plan 2",
        "title_si": "විවෘත සංකල්ප සැලැස්ම 2",
        "desc": "Architectural Floor Plan Template. Original: 48 and 50 King Street Houses New York New York County NY HAB.",
        "desc_si": "ආකෘතිමය නිවාස බිම් සැලැස්ම. මුල් පිටපත: 48 and 50 King Street Houses New York New York County NY HAB.",
        "src": "house_plans/48_and_50_King_Street__Houses___New_York.png",
        "isDefault": true
      },
      {
        "id": "draw-house-19",
        "title": "Minimalist Studio Layout 2",
        "title_si": "කුඩා ස්ටූඩියෝ සැලැස්ම 2",
        "desc": "Architectural Floor Plan Template. Original: 48 and 50 King Street Houses New York New York County NY HAB.",
        "desc_si": "ආකෘතිමය නිවාස බිම් සැලැස්ම. මුල් පිටපත: 48 and 50 King Street Houses New York New York County NY HAB.",
        "src": "house_plans/48_and_50_King_Street__Houses___New_York.png",
        "isDefault": true
      },
      {
        "id": "draw-house-20",
        "title": "Urban Duplex Blueprint 2",
        "title_si": "නාගරික ඩියුප්ලෙක්ස් සැලැස්ම 2",
        "desc": "Architectural Floor Plan Template. Original: 4johan.",
        "desc_si": "ආකෘතිමය නිවාස බිම් සැලැස්ම. මුල් පිටපත: 4johan.",
        "src": "house_plans/4johan.jpg.jpg",
        "isDefault": true
      }
    ];
}

function saveState() {
    const activeProj = getActiveProject();
    if (activeProj) {
        activeProj.budget = state.budget;
        activeProj.notes = state.notes;
        activeProj.expenses = state.expenses;
        activeProj.payments = state.payments;
        activeProj.drawings = state.drawings;
    }
    localStorage.setItem('kapuwatta_project_state', JSON.stringify(state));
    updateUI();
}

function getTodayOffsetDate(daysOffset) {
    const d = new Date();
    d.setDate(d.getDate() + daysOffset);
    return d.toISOString().split('T')[0];
}

// --- CURRENCY FORMATTER ---
function formatCurrency(amount) {
    return "Rs. " + Number(amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// --- LANGUAGE TRANSLATIONS ---
function translateUI() {
    updateShopMap();
    populateAllocationDropdown();
    const lang = state.language;
    
    const activeProj = getActiveProject();
    const type = activeProj ? activeProj.type : 'commercial';
    const sect = SECTION_TRANSLATIONS[type][lang];
    
    const breakdownTitleEl = document.getElementById('breakdown-card-title');
    const comparisonTitleEl = document.getElementById('comparison-card-title');
    if (breakdownTitleEl) breakdownTitleEl.textContent = sect.breakdownTitle;
    if (comparisonTitleEl) comparisonTitleEl.textContent = sect.comparisonTitle;
    
    // Translate project select options
    const select = document.getElementById('project-select');
    if (select) {
        [...select.options].forEach(opt => {
            const proj = state.projects.find(p => p.id === opt.value);
            if (proj) {
                opt.textContent = getTranslatedProjectName(proj.name, lang);
            }
        });
    }
    
    // Toggle active state on language buttons
    document.getElementById('btn-lang-en').classList.toggle('active', lang === 'en');
    document.getElementById('btn-lang-si').classList.toggle('active', lang === 'si');
    
    // Translate standard text tags
    const translatableElements = document.querySelectorAll('[data-en]');
    translatableElements.forEach(el => {
        const text = el.getAttribute(`data-${lang}`);
        if (text) {
            if (el.tagName === 'INPUT') {
                el.placeholder = el.getAttribute(`data-${lang}-placeholder`) || text;
            } else {
                const icon = el.querySelector('i');
                if (icon) {
                    el.innerHTML = '';
                    el.appendChild(icon);
                    el.appendChild(document.createTextNode(' ' + text));
                } else {
                    el.textContent = text;
                }
            }
        }
    });

    // Translate select placeholders and options
    document.querySelectorAll('option[data-en]').forEach(opt => {
        opt.textContent = opt.getAttribute(`data-${lang}`);
    });

    // Inputs placeholders
    const searchExpense = document.getElementById('expense-search');
    if (searchExpense) {
        searchExpense.placeholder = searchExpense.getAttribute(`data-${lang}-placeholder`) || "Search items...";
    }
    const searchPayment = document.getElementById('payment-search');
    if (searchPayment) {
        searchPayment.placeholder = searchPayment.getAttribute(`data-${lang}-placeholder`) || "Search payments...";
    }

    // Update title
    document.title = document.getElementById('page-title').getAttribute(`data-${lang}`);
}

// --- INTERFACE THEME ---
function applyTheme() {
    if (state.theme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('btn-theme-toggle').innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        document.body.classList.remove('dark-mode');
        document.getElementById('btn-theme-toggle').innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

function calculateMetrics() {
    const activeProj = getActiveProject();
    const type = activeProj ? activeProj.type : 'commercial';

    let totalExpenses = 0;
    let shop1Direct = 0;
    let shop2Direct = 0;
    let shop3Direct = 0; // Kitchen & Bath for residential
    let sharedCost = 0; // shared for commercial/annex, section4 for residential

    state.expenses.forEach(exp => {
        totalExpenses += exp.total;
        
        if (type === 'residential') {
            if (exp.shop === 'shop1') shop1Direct += exp.total;
            else if (exp.shop === 'shop2') shop2Direct += exp.total;
            else if (exp.shop === 'shared') shop3Direct += exp.total; // Kitchen/Bath
            else if (exp.shop === 'section4') sharedCost += exp.total; // Foundation/Shared
        } else {
            if (exp.shop === 'shop1') shop1Direct += exp.total;
            else if (exp.shop === 'shop2') shop2Direct += exp.total;
            else if (exp.shop === 'shared') sharedCost += exp.total;
        }
    });

    const totalPaid = state.payments.reduce((acc, pay) => acc + pay.amount, 0);
    const outstanding = totalExpenses - totalPaid;
    const budget = state.budget;

    let shop1SharedAllocation = 0;
    let shop2SharedAllocation = 0;
    let shop3SharedAllocation = 0;
    
    if (type === 'residential') {
        shop1SharedAllocation = sharedCost / 3;
        shop2SharedAllocation = sharedCost / 3;
        shop3SharedAllocation = sharedCost / 3;
    } else {
        shop1SharedAllocation = sharedCost / 2;
        shop2SharedAllocation = sharedCost / 2;
    }

    const shop1Total = shop1Direct + shop1SharedAllocation;
    const shop2Total = shop2Direct + shop2SharedAllocation;
    const shop3Total = shop3Direct + shop3SharedAllocation;

    return {
        totalExpenses,
        totalPaid,
        outstanding,
        budget,
        shop1Direct,
        shop2Direct,
        shop3Direct,
        sharedCost,
        shop1Total,
        shop2Total,
        shop3Total,
        shop1SharedAllocation,
        shop2SharedAllocation,
        shop3SharedAllocation
    };
}

// --- UPDATE GRAPHICS (CHART.JS) ---
function updateCharts(metrics) {
    const lang = state.language;

    // 1. Category Chart
    const categories = Object.keys(CATEGORY_MAP);
    const categoryTotals = {};
    categories.forEach(cat => categoryTotals[cat] = 0);
    
    state.expenses.forEach(exp => {
        if (categoryTotals[exp.category] !== undefined) {
            categoryTotals[exp.category] += exp.total;
        } else {
            categoryTotals["Other"] = (categoryTotals["Other"] || 0) + exp.total;
        }
    });

    const categoryLabels = categories.map(cat => CATEGORY_MAP[cat][lang]);
    const categoryData = categories.map(cat => categoryTotals[cat]);
    const categoryColors = [
        '#f59e0b', '#3b82f6', '#10b981', '#ef4444', 
        '#8b5cf6', '#ec4899', '#14b8a6', '#f97316', 
        '#06b6d4', '#6366f1', '#84cc16', '#6b7280'
    ];

    const ctxCategory = document.getElementById('categoryChart').getContext('2d');
    if (categoryChart) categoryChart.destroy();
    
    const hasExpenses = categoryData.some(val => val > 0);
    
    categoryChart = new Chart(ctxCategory, {
        type: 'doughnut',
        data: {
            labels: hasExpenses ? categoryLabels : [lang === 'en' ? 'No Data' : 'දත්ත නොමැත'],
            datasets: [{
                data: hasExpenses ? categoryData : [1],
                backgroundColor: hasExpenses ? categoryColors : ['#e2e8f0'],
                borderWidth: state.theme === 'dark' ? 2 : 1,
                borderColor: state.theme === 'dark' ? '#131926' : '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: state.theme === 'dark' ? '#f1f5f9' : '#1e293b',
                        font: { family: 'Inter, Noto Sans Sinhala' }
                    }
                }
            }
        }
    });

    // 2. Shop Chart (Comparison)
    const ctxShop = document.getElementById('shopChart').getContext('2d');
    if (shopChart) shopChart.destroy();

    const activeProj = getActiveProject();
    const type = activeProj ? activeProj.type : 'commercial';
    const sect = SECTION_TRANSLATIONS[type][lang];

    let shopLabels, directCosts, sharedAllocations, sharedLabel;

    if (type === 'residential') {
        shopLabels = [
            sect.shop1,
            sect.shop2,
            sect.shared,
            sect.section4
        ];
        directCosts = [metrics.shop1Direct, metrics.shop2Direct, metrics.shop3Direct, metrics.sharedCost];
        sharedAllocations = [metrics.shop1SharedAllocation, metrics.shop2SharedAllocation, metrics.shop3SharedAllocation, 0];
        sharedLabel = lang === 'en' ? 'Shared Share (33.3%)' : 'පොදු වියදම් කොටස (33.3%)';
    } else {
        shopLabels = [
            sect.shop1,
            sect.shop2,
            sect.shared
        ];
        directCosts = [metrics.shop1Direct, metrics.shop2Direct, metrics.sharedCost];
        sharedAllocations = [metrics.shop1SharedAllocation, metrics.shop2SharedAllocation, 0];
        sharedLabel = lang === 'en' ? 'Shared Share (50%)' : 'පොදු වියදම් කොටස (50%)';
    }
    
    shopChart = new Chart(ctxShop, {
        type: 'bar',
        data: {
            labels: shopLabels,
            datasets: [
                {
                    label: lang === 'en' ? 'Direct Cost' : 'සෘජු වියදම',
                    data: directCosts,
                    backgroundColor: '#f59e0b',
                    borderRadius: 4
                },
                {
                    label: sharedLabel,
                    data: sharedAllocations,
                    backgroundColor: '#3b82f6',
                    borderRadius: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true,
                    ticks: { color: state.theme === 'dark' ? '#94a3b8' : '#64748b' },
                    grid: { color: state.theme === 'dark' ? '#1e293b' : '#e2e8f0' }
                },
                y: {
                    stacked: true,
                    ticks: { color: state.theme === 'dark' ? '#94a3b8' : '#64748b' },
                    grid: { color: state.theme === 'dark' ? '#1e293b' : '#e2e8f0' }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: state.theme === 'dark' ? '#f1f5f9' : '#1e293b',
                        font: { family: 'Inter, Noto Sans Sinhala' }
                    }
                }
            }
        }
    });
}

// --- INTERACTIVE MAP NAVIGATION ---
window.filterBySiteSection = function(sectionId) {
    const navItem = document.querySelector(`.nav-item[data-tab="expenses"]`);
    if (navItem) navItem.click();

    const selectFilter = document.getElementById('filter-shop-select');
    if (selectFilter) {
        selectFilter.value = sectionId;
        renderExpensesLedgerTable();
    }

    document.querySelector('.list-card').scrollIntoView({ behavior: 'smooth' });
};

// --- UPDATE UI RENDERING ---
function updateUI() {
    const metrics = calculateMetrics();
    const lang = state.language;

    translateUI();
    applyTheme();

    // Stats
    document.getElementById('val-total-expenses').textContent = formatCurrency(metrics.totalExpenses);
    document.getElementById('val-total-paid').textContent = formatCurrency(metrics.totalPaid);
    document.getElementById('val-outstanding').textContent = formatCurrency(metrics.outstanding);
    document.getElementById('val-total-budget').textContent = formatCurrency(metrics.budget);

    const outstandingCard = document.querySelector('.metric-card.outstanding h3');
    if (metrics.outstanding > 0) {
        outstandingCard.style.color = 'var(--color-danger)';
    } else {
        outstandingCard.style.color = 'inherit';
    }

    // Render Cost Map dynamically
    renderVisualCostMap();

    // Budget bar
    const budgetPct = metrics.budget > 0 ? Math.min((metrics.totalExpenses / metrics.budget) * 100, 100) : 0;
    const progressText = metrics.budget > 0 ? Math.round((metrics.totalExpenses / metrics.budget) * 100) + "%" : "0%";
    document.getElementById('budget-progress-percentage').textContent = progressText;
    document.getElementById('budget-progress-bar').style.width = budgetPct + "%";
    
    const progressBar = document.getElementById('budget-progress-bar');
    if (metrics.totalExpenses > metrics.budget) {
        progressBar.style.background = 'var(--color-danger)';
    } else {
        progressBar.style.background = 'linear-gradient(90deg, var(--accent-color) 0%, var(--accent-hover) 100%)';
    }

    // Dynamic section breakdowns
    const breakdownList = document.getElementById('project-sections-breakdown-list');
    if (breakdownList) {
        const activeProj = getActiveProject();
        const type = activeProj ? activeProj.type : 'commercial';
        const sect = SECTION_TRANSLATIONS[type][lang];
        
        let breakdownHTML = '';
        if (type !== 'residential') {
            breakdownHTML = `
                <div class="shop-item" style="padding: 12px 0; border-bottom: 1px solid var(--border-color);">
                    <div class="shop-details" style="display: flex; justify-content: space-between; align-items: center;">
                        <h4 style="font-weight: 600; font-size: 14px;">${sect.shop1Long}</h4>
                        <span class="shop-cost" style="font-weight: 700; color: var(--text-primary);">${formatCurrency(metrics.shop1Total)}</span>
                    </div>
                    <div class="shop-sub-info" style="font-size: 12px; color: var(--text-secondary); margin-top: 4px;">
                        <span>Direct:</span> <strong>${formatCurrency(metrics.shop1Direct)}</strong> | 
                        <span>50% Shared:</span> <strong>${formatCurrency(metrics.shop1SharedAllocation)}</strong>
                    </div>
                </div>
                <div class="shop-item" style="padding: 12px 0; border-bottom: 1px solid var(--border-color);">
                    <div class="shop-details" style="display: flex; justify-content: space-between; align-items: center;">
                        <h4 style="font-weight: 600; font-size: 14px;">${sect.shop2Long}</h4>
                        <span class="shop-cost" style="font-weight: 700; color: var(--text-primary);">${formatCurrency(metrics.shop2Total)}</span>
                    </div>
                    <div class="shop-sub-info" style="font-size: 12px; color: var(--text-secondary); margin-top: 4px;">
                        <span>Direct:</span> <strong>${formatCurrency(metrics.shop2Direct)}</strong> | 
                        <span>50% Shared:</span> <strong>${formatCurrency(metrics.shop2SharedAllocation)}</strong>
                    </div>
                </div>
                <div class="shop-item shared" style="padding: 12px 0 0 0;">
                    <div class="shop-details" style="display: flex; justify-content: space-between; align-items: center;">
                        <h4 style="font-weight: 600; font-size: 14px; color: var(--accent-color);">${sect.sharedLong}</h4>
                        <span class="shop-cost" style="font-weight: 700; color: var(--accent-color);">${formatCurrency(metrics.sharedCost)}</span>
                    </div>
                    <p class="help-text" style="font-size: 11px; color: var(--text-secondary); margin-top: 4px; line-height: 1.4;">${sect.sharedHelp}</p>
                </div>
            `;
        } else if (type === 'residential') {
            breakdownHTML = `
                <div class="shop-item" style="padding: 10px 0; border-bottom: 1px solid var(--border-color);">
                    <div class="shop-details" style="display: flex; justify-content: space-between; align-items: center;">
                        <h4 style="font-weight: 600; font-size: 14px;">${sect.shop1Long}</h4>
                        <span class="shop-cost" style="font-weight: 700; color: var(--text-primary);">${formatCurrency(metrics.shop1Total)}</span>
                    </div>
                    <div class="shop-sub-info" style="font-size: 12px; color: var(--text-secondary); margin-top: 4px;">
                        <span>Direct:</span> <strong>${formatCurrency(metrics.shop1Direct)}</strong> | 
                        <span>33.3% Shared:</span> <strong>${formatCurrency(metrics.shop1SharedAllocation)}</strong>
                    </div>
                </div>
                <div class="shop-item" style="padding: 10px 0; border-bottom: 1px solid var(--border-color);">
                    <div class="shop-details" style="display: flex; justify-content: space-between; align-items: center;">
                        <h4 style="font-weight: 600; font-size: 14px;">${sect.shop2Long}</h4>
                        <span class="shop-cost" style="font-weight: 700; color: var(--text-primary);">${formatCurrency(metrics.shop2Total)}</span>
                    </div>
                    <div class="shop-sub-info" style="font-size: 12px; color: var(--text-secondary); margin-top: 4px;">
                        <span>Direct:</span> <strong>${formatCurrency(metrics.shop2Direct)}</strong> | 
                        <span>33.3% Shared:</span> <strong>${formatCurrency(metrics.shop2SharedAllocation)}</strong>
                    </div>
                </div>
                <div class="shop-item" style="padding: 10px 0; border-bottom: 1px solid var(--border-color);">
                    <div class="shop-details" style="display: flex; justify-content: space-between; align-items: center;">
                        <h4 style="font-weight: 600; font-size: 14px;">${sect.shop3Long}</h4>
                        <span class="shop-cost" style="font-weight: 700; color: var(--text-primary);">${formatCurrency(metrics.shop3Total)}</span>
                    </div>
                    <div class="shop-sub-info" style="font-size: 12px; color: var(--text-secondary); margin-top: 4px;">
                        <span>Direct:</span> <strong>${formatCurrency(metrics.shop3Direct)}</strong> | 
                        <span>33.3% Shared:</span> <strong>${formatCurrency(metrics.shop3SharedAllocation)}</strong>
                    </div>
                </div>
                <div class="shop-item shared" style="padding: 10px 0 0 0;">
                    <div class="shop-details" style="display: flex; justify-content: space-between; align-items: center;">
                        <h4 style="font-weight: 600; font-size: 14px; color: var(--accent-color);">${sect.sharedLong}</h4>
                        <span class="shop-cost" style="font-weight: 700; color: var(--accent-color);">${formatCurrency(metrics.sharedCost)}</span>
                    </div>
                    <p class="help-text" style="font-size: 11px; color: var(--text-secondary); margin-top: 4px; line-height: 1.4;">${sect.sharedHelp}</p>
                </div>
            `;
        }
        breakdownList.innerHTML = breakdownHTML;
    }

    updateCharts(metrics);

    // Render tables
    renderRecentExpensesTable();
    renderExpensesLedgerTable();
    renderPaymentsLedgerTable();
    renderReportsTable(metrics);
    renderDrawingsGallery();
}

// 1. Dashboard Recent Table
function renderRecentExpensesTable() {
    const lang = state.language;
    const tbody = document.getElementById('recent-expenses-tbody');
    tbody.innerHTML = '';

    const sorted = [...state.expenses].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);

    if (sorted.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-secondary);">${lang === 'en' ? 'No recent expenses recorded.' : 'මෑතකාලීන වියදම් කිසිවක් ඇතුළත් කර නැත.'}</td></tr>`;
        return;
    }

    sorted.forEach(exp => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${exp.date}</td>
            <td><strong>${exp.name}</strong></td>
            <td>${CATEGORY_MAP[exp.category][lang]}</td>
            <td><span class="badge badge-${exp.shop}">${(SHOP_MAP[exp.shop] && SHOP_MAP[exp.shop][lang]) ? SHOP_MAP[exp.shop][lang] : exp.shop}</span></td>
            <td>${formatCurrency(exp.total)}</td>
        `;
        tbody.appendChild(tr);
    });
}

// 2. Expenses Tab Ledger Table
function renderExpensesLedgerTable() {
    const lang = state.language;
    const tbody = document.getElementById('expenses-ledger-tbody');
    tbody.innerHTML = '';

    const searchQuery = document.getElementById('expense-search').value.toLowerCase();
    const filterShop = document.getElementById('filter-shop-select').value;
    const filterCategory = document.getElementById('filter-category-select').value;

    let filtered = state.expenses.filter(exp => {
        const matchesSearch = exp.name.toLowerCase().includes(searchQuery) || exp.category.toLowerCase().includes(searchQuery);
        const matchesShop = filterShop === 'all' || exp.shop === filterShop;
        const matchesCategory = filterCategory === 'all' || exp.category === filterCategory;
        return matchesSearch && matchesShop && matchesCategory;
    });

    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    const filteredTotal = filtered.reduce((acc, exp) => acc + exp.total, 0);
    document.getElementById('val-filtered-total').textContent = formatCurrency(filteredTotal);

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: var(--text-secondary);">${lang === 'en' ? 'No expense items found matching the filters.' : 'පෙරහන්වලට ගැළපෙන වියදම් අයිතම කිසිවක් හමු නොවීය.'}</td></tr>`;
        return;
    }

    filtered.forEach(exp => {
        const tr = document.createElement('tr');
        
        let photoCell = '<td class="td-receipt-cell"><i class="fa-solid fa-image-slash" style="opacity:0.25;"></i></td>';
        if (exp.photo) {
            photoCell = `<td class="td-receipt-cell"><img class="receipt-thumbnail" src="${exp.photo}" onclick="previewReceiptImage('${exp.id}')" title="${lang==='en'?'View Receipt':'රිසිට්පත බලන්න'}"></td>`;
        }

        tr.innerHTML = `
            ${photoCell}
            <td>${exp.date}</td>
            <td>
                <strong>${exp.name}</strong>
            </td>
            <td>${CATEGORY_MAP[exp.category][lang]}</td>
            <td><span class="badge badge-${exp.shop}">${(SHOP_MAP[exp.shop] && SHOP_MAP[exp.shop][lang]) ? SHOP_MAP[exp.shop][lang] : exp.shop}</span></td>
            <td style="font-size:12px; color: var(--text-secondary);">
                ${exp.qty.toLocaleString()} x ${formatCurrency(exp.unitPrice)}
            </td>
            <td><strong>${formatCurrency(exp.total)}</strong></td>
            <td>
                <div class="action-btns">
                    <button class="action-btn edit" onclick="editExpense('${exp.id}')" title="${lang==='en'?'Edit':'සංස්කරණය කරන්න'}">
                        <i class="fa-solid fa-pencil"></i>
                    </button>
                    <button class="action-btn delete" onclick="deleteExpense('${exp.id}')" title="${lang==='en'?'Delete':'මකා දමන්න'}">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Preview receipt photo wrapper
window.previewReceiptImage = function(expId) {
    const exp = state.expenses.find(e => e.id === expId);
    if (!exp || !exp.photo) return;
    
    const lang = state.language;
    document.getElementById('preview-drawing-title').textContent = lang === 'en' 
        ? `Receipt Preview: ${exp.name}` 
        : `රිසිට්පත් පෙරදසුන: ${exp.name}`;
    document.getElementById('preview-drawing-img').src = exp.photo;
    
    document.getElementById('preview-drawing-modal').classList.add('active');
};

// 3. Payments Tab Ledger Table
function renderPaymentsLedgerTable() {
    const lang = state.language;
    const tbody = document.getElementById('payments-ledger-tbody');
    tbody.innerHTML = '';

    const searchQuery = document.getElementById('payment-search').value.toLowerCase();

    let filtered = state.payments.filter(pay => {
        return pay.recipient.toLowerCase().includes(searchQuery) || pay.notes.toLowerCase().includes(searchQuery);
    });

    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    const totalPaid = state.payments.reduce((acc, pay) => acc + pay.amount, 0);
    document.getElementById('val-payment-total').textContent = formatCurrency(totalPaid);

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-secondary);">${lang === 'en' ? 'No payment records found.' : 'ගෙවීම් වාර්තා කිසිවක් හමු නොවීය.'}</td></tr>`;
        return;
    }

    filtered.forEach(pay => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${pay.date}</td>
            <td><strong>${pay.recipient}</strong></td>
            <td><span class="badge" style="background-color: var(--accent-light); color: var(--accent-hover);">${pay.method}</span></td>
            <td style="font-size:12px; color: var(--text-secondary);">${pay.notes || '-'}</td>
            <td><strong>${formatCurrency(pay.amount)}</strong></td>
            <td>
                <div class="action-btns">
                    <button class="action-btn edit" onclick="editPayment('${pay.id}')" title="${lang==='en'?'Edit':'සංස්කරණය කරන්න'}">
                        <i class="fa-solid fa-pencil"></i>
                    </button>
                    <button class="action-btn delete" onclick="deletePayment('${pay.id}')" title="${lang==='en'?'Delete':'මකා දමන්න'}">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// 4. Reports Tab Table
function renderReportsTable(metrics) {
    const lang = state.language;
    const activeProj = getActiveProject();
    const type = activeProj ? activeProj.type : 'commercial';
    const sect = SECTION_TRANSLATIONS[type][lang];

    const reportTitle = document.getElementById('report-project-title');
    if (reportTitle) {
        reportTitle.textContent = activeProj.name.toUpperCase() + (lang === 'en' ? ' REPORT' : ' වාර්තාව');
    }

    document.getElementById('report-gen-date').textContent = new Date().toLocaleDateString();

    document.getElementById('rep-budget').textContent = formatCurrency(metrics.budget);
    document.getElementById('rep-expenses').textContent = formatCurrency(metrics.totalExpenses);
    document.getElementById('rep-paid').textContent = formatCurrency(metrics.totalPaid);
    document.getElementById('rep-due').textContent = formatCurrency(metrics.outstanding);

    // Render report shop cards dynamically based on project type
    const shopGrid = document.getElementById('project-report-shop-grid');
    if (shopGrid) {
        if (type === 'residential') {
            shopGrid.innerHTML = `
                <div class="report-shop-card">
                    <h4 style="text-transform: uppercase;">${sect.shop1} ${lang === 'en' ? 'Costs' : 'වියදම්'}</h4>
                    <div class="row-stat">
                        <span>${lang === 'en' ? 'Direct Cost' : 'සෘජු වියදම'}</span>
                        <span>${formatCurrency(metrics.shop1Direct)}</span>
                    </div>
                    <div class="row-stat">
                        <span>${lang === 'en' ? 'Shared Allocation (33.3%)' : 'පොදු වියදම්වලින් 33.3% ක්'}</span>
                        <span>${formatCurrency(metrics.shop1SharedAllocation)}</span>
                    </div>
                    <hr class="mini-divider">
                    <div class="row-stat total-stat">
                        <span>${lang === 'en' ? 'Total Cost' : 'මුළු වියදම'}</span>
                        <span>${formatCurrency(metrics.shop1Total)}</span>
                    </div>
                </div>
                <div class="report-shop-card">
                    <h4 style="text-transform: uppercase;">${sect.shop2} ${lang === 'en' ? 'Costs' : 'වියදම්'}</h4>
                    <div class="row-stat">
                        <span>${lang === 'en' ? 'Direct Cost' : 'සෘජු වියදම'}</span>
                        <span>${formatCurrency(metrics.shop2Direct)}</span>
                    </div>
                    <div class="row-stat">
                        <span>${lang === 'en' ? 'Shared Allocation (33.3%)' : 'පොදු වියදම්වලින් 33.3% ක්'}</span>
                        <span>${formatCurrency(metrics.shop2SharedAllocation)}</span>
                    </div>
                    <hr class="mini-divider">
                    <div class="row-stat total-stat">
                        <span>${lang === 'en' ? 'Total Cost' : 'මුළු වියදම'}</span>
                        <span>${formatCurrency(metrics.shop2Total)}</span>
                    </div>
                </div>
                <div class="report-shop-card">
                    <h4 style="text-transform: uppercase;">${sect.shared} ${lang === 'en' ? 'Costs' : 'වියදම්'}</h4>
                    <div class="row-stat">
                        <span>${lang === 'en' ? 'Direct Cost' : 'සෘජු වියදම'}</span>
                        <span>${formatCurrency(metrics.shop3Direct)}</span>
                    </div>
                    <div class="row-stat">
                        <span>${lang === 'en' ? 'Shared Allocation (33.3%)' : 'පොදු වියදම්වලින් 33.3% ක්'}</span>
                        <span>${formatCurrency(metrics.shop3SharedAllocation)}</span>
                    </div>
                    <hr class="mini-divider">
                    <div class="row-stat total-stat">
                        <span>${lang === 'en' ? 'Total Cost' : 'මුළු වියදම'}</span>
                        <span>${formatCurrency(metrics.shop3Total)}</span>
                    </div>
                </div>
                <div class="report-shop-card">
                    <h4 style="text-transform: uppercase;">${sect.section4} ${lang === 'en' ? 'Costs' : 'වියදම්'}</h4>
                    <div class="row-stat">
                        <span>${lang === 'en' ? 'Shared Foundation/Base Cost' : 'පොදු අත්තිවාරම/මුළු වියදම'}</span>
                        <span>${formatCurrency(metrics.sharedCost)}</span>
                    </div>
                    <hr class="mini-divider" style="margin-top: 36px;">
                    <div class="row-stat total-stat">
                        <span>${lang === 'en' ? 'Total Foundation' : 'මුළු අත්තිවාරම'}</span>
                        <span>${formatCurrency(metrics.sharedCost)}</span>
                    </div>
                </div>
            `;
        } else {
            shopGrid.innerHTML = `
                <div class="report-shop-card">
                    <h4 style="text-transform: uppercase;">${sect.shop1} ${lang === 'en' ? 'Costs' : 'වියදම්'}</h4>
                    <div class="row-stat">
                        <span>${lang === 'en' ? 'Direct Cost' : 'සෘජු වියදම'}</span>
                        <span>${formatCurrency(metrics.shop1Direct)}</span>
                    </div>
                    <div class="row-stat">
                        <span>${lang === 'en' ? 'Shared Allocation (50%)' : 'පොදු වියදම්වලින් 50% ක්'}</span>
                        <span>${formatCurrency(metrics.shop1SharedAllocation)}</span>
                    </div>
                    <hr class="mini-divider">
                    <div class="row-stat total-stat">
                        <span>${lang === 'en' ? 'Total Cost' : 'මුළු වියදම'}</span>
                        <span>${formatCurrency(metrics.shop1Total)}</span>
                    </div>
                </div>
                <div class="report-shop-card">
                    <h4 style="text-transform: uppercase;">${sect.shop2} ${lang === 'en' ? 'Costs' : 'වියදම්'}</h4>
                    <div class="row-stat">
                        <span>${lang === 'en' ? 'Direct Cost' : 'සෘජු වියදම'}</span>
                        <span>${formatCurrency(metrics.shop2Direct)}</span>
                    </div>
                    <div class="row-stat">
                        <span>${lang === 'en' ? 'Shared Allocation (50%)' : 'පොදු වියදම්වලින් 50% ක්'}</span>
                        <span>${formatCurrency(metrics.shop2SharedAllocation)}</span>
                    </div>
                    <hr class="mini-divider">
                    <div class="row-stat total-stat">
                        <span>${lang === 'en' ? 'Total Cost' : 'මුළු වියදම'}</span>
                        <span>${formatCurrency(metrics.shop2Total)}</span>
                    </div>
                </div>
            `;
        }
    }

    // Render table headers dynamically
    const thead = document.getElementById('report-category-thead');
    if (thead) {
        if (type === 'residential') {
            thead.innerHTML = `
                <tr>
                    <th>${lang === 'en' ? 'Expense Category' : 'වියදම් කාණ්ඩය'}</th>
                    <th>${sect.shop1}</th>
                    <th>${sect.shop2}</th>
                    <th>${sect.shared}</th>
                    <th>${sect.section4}</th>
                    <th>${lang === 'en' ? 'Category Total' : 'කාණ්ඩයේ මුළු එකතුව'}</th>
                </tr>
            `;
        } else {
            thead.innerHTML = `
                <tr>
                    <th>${lang === 'en' ? 'Expense Category' : 'වියදම් කාණ්ඩය'}</th>
                    <th>${sect.shop1}</th>
                    <th>${sect.shop2}</th>
                    <th>${sect.shared}</th>
                    <th>${lang === 'en' ? 'Category Total' : 'කාණ්ඩයේ මුළු එකතුව'}</th>
                </tr>
            `;
        }
    }

    // Render table body dynamically
    const tbody = document.getElementById('report-category-tbody');
    tbody.innerHTML = '';
    const categories = Object.keys(CATEGORY_MAP);
    
    categories.forEach(cat => {
        let shop1CatTotal = 0;
        let shop2CatTotal = 0;
        let sharedCatTotal = 0;
        let section4CatTotal = 0;

        state.expenses.forEach(exp => {
            if (exp.category === cat) {
                if (exp.shop === 'shop1') shop1CatTotal += exp.total;
                else if (exp.shop === 'shop2') shop2CatTotal += exp.total;
                else if (exp.shop === 'shared') sharedCatTotal += exp.total;
                else if (exp.shop === 'section4') section4CatTotal += exp.total;
            }
        });

        const catTotal = shop1CatTotal + shop2CatTotal + sharedCatTotal + section4CatTotal;

        if (catTotal === 0) return;

        const tr = document.createElement('tr');
        if (type === 'residential') {
            tr.innerHTML = `
                <td><strong>${CATEGORY_MAP[cat][lang]}</strong></td>
                <td>${formatCurrency(shop1CatTotal)}</td>
                <td>${formatCurrency(shop2CatTotal)}</td>
                <td>${formatCurrency(sharedCatTotal)}</td>
                <td>${formatCurrency(section4CatTotal)}</td>
                <td><strong>${formatCurrency(catTotal)}</strong></td>
            `;
        } else {
            tr.innerHTML = `
                <td><strong>${CATEGORY_MAP[cat][lang]}</strong></td>
                <td>${formatCurrency(shop1CatTotal)}</td>
                <td>${formatCurrency(shop2CatTotal)}</td>
                <td>${formatCurrency(sharedCatTotal)}</td>
                <td><strong>${formatCurrency(catTotal)}</strong></td>
            `;
        }
        tbody.appendChild(tr);
    });
}

// 5. Drawings & Plans Gallery Grid
function renderDrawingsGallery() {
    const lang = state.language;
    const grid = document.getElementById('drawings-gallery-grid');
    if (!grid) return;
    grid.innerHTML = '';

    state.drawings.forEach(draw => {
        const title = lang === 'en' ? draw.title : (draw.title_si || draw.title);
        const desc = lang === 'en' ? draw.desc : (draw.desc_si || draw.desc);
        
        const card = document.createElement('div');
        card.className = 'drawing-card';
        
        let badgeHtml = '';
        if (draw.isDefault) {
            badgeHtml = `<div class="drawing-badge-main" data-en="Main Plan" data-si="ප්‍රධාන සැලැස්ම">${lang === 'en' ? 'Main Plan' : 'ප්‍රධාන සැලැස්ම'}</div>`;
        }

        let deleteBtnHtml = '';
        if (!draw.isDefault) {
            deleteBtnHtml = `
                <button class="btn btn-danger btn-sm" onclick="deleteDrawing('${draw.id}')">
                    <i class="fa-solid fa-trash"></i>
                </button>
            `;
        }

        card.innerHTML = `
            <div class="drawing-thumbnail">
                ${badgeHtml}
                <img src="${draw.src}" alt="${title}">
            </div>
            <div class="drawing-body">
                <h4>${title}</h4>
                <p>${desc}</p>
                <div class="drawing-actions">
                    <button class="btn btn-primary btn-sm" onclick="previewDrawing('${draw.id}')">
                        <i class="fa-solid fa-expand"></i>
                        <span data-en="View Photo" data-si="විවෘත කරන්න">${lang === 'en' ? 'View Photo' : 'විවෘත කරන්න'}</span>
                    </button>
                    ${deleteBtnHtml}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// --- DRAWING ACTIONS ---
window.previewDrawing = function(id) {
    const draw = state.drawings.find(d => d.id === id);
    if (!draw) return;

    const lang = state.language;
    const title = lang === 'en' ? draw.title : (draw.title_si || draw.title);

    document.getElementById('preview-drawing-title').textContent = title;
    document.getElementById('preview-drawing-img').src = draw.src;
    
    document.getElementById('preview-drawing-modal').classList.add('active');
};

window.deleteDrawing = function(id) {
    const lang = state.language;
    const confirmMsg = lang === 'en' 
        ? "Are you sure you want to delete this drawing sheet?" 
        : "මෙම සැලසුම් පත්‍රිකාව ඉවත් කිරීමට ඔබට විශ්වාසද?";
    
    if (confirm(confirmMsg)) {
        state.drawings = state.drawings.filter(d => d.id !== id);
        saveState();
    }
};

// --- IMAGE COMPRESSION HELPER ---
function compressImage(base64Data, callback) {
    const img = new Image();
    img.src = base64Data;
    img.onload = function() {
        const canvasTemp = document.createElement('canvas');
        const maxDimension = 640;
        let width = img.width;
        let height = img.height;

        if (width > maxDimension || height > maxDimension) {
            if (width > height) {
                height = Math.round((height * maxDimension) / width);
                width = maxDimension;
            } else {
                width = Math.round((width * maxDimension) / height);
                height = maxDimension;
            }
        }

        canvasTemp.width = width;
        canvasTemp.height = height;

        const ctxTemp = canvasTemp.getContext('2d');
        ctxTemp.drawImage(img, 0, 0, width, height);

        const compressedBase64 = canvasTemp.toDataURL("image/jpeg", 0.7);
        callback(compressedBase64);
    };
    img.onerror = function() {
        callback(base64Data);
    };
}

// --- LIVE CAMERA CONTROLLER ---
function startCamera(targetInput) {
    activePhotoTargetInput = targetInput;
    const cameraModal = document.getElementById('camera-modal');
    const video = document.getElementById('camera-video');
    
    const lang = state.language;

    // Secure context check for navigator.mediaDevices
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert(lang === 'en' 
            ? "Camera access is not supported or blocked by your browser.\n\nIMPORTANT: Modern browsers only allow camera access under secure connections (HTTPS or http://localhost). Since you are running the app locally, please make sure you open http://localhost:8080 in your browser instead of double-clicking the HTML file." 
            : "කැමරාව ක්‍රියාත්මක කිරීමට බ්‍රව්සරය ඉඩ නොදේ.\n\nවැදගත්: නවීන බ්‍රව්සර මඟින් කැමරා භාවිතයට ඉඩ දෙන්නේ සුරක්ෂිත සබඳතා (HTTPS හෝ http://localhost) යටතේ පමණි. ඔබ index.html ගොනුව කෙලින්ම විවෘත කර ඇත්නම්, කරුණාකර http://localhost:8080 වෙත පිවිසෙන්න.");
        return;
    }

    cameraModal.classList.add('active');
    
    // Reset video stream source
    video.srcObject = null;

    navigator.mediaDevices.getUserMedia({
        video: { facingMode: currentCameraFacingMode }
    })
    .then(stream => {
        mediaStream = stream;
        video.srcObject = stream;
    })
    .catch(err => {
        console.error("Camera access error", err);
        alert(lang === 'en' 
            ? "Could not access device camera. Please check camera permissions in your browser settings." 
            : "වෙබ් කැමරාව ක්‍රියාත්මක කිරීමට නොහැකි විය. කරුණාකර බ්‍රව්සර් කැමරා අවසර පරීක්ෂා කරන්න.");
        cameraModal.classList.remove('active');
    });
}

function stopCamera() {
    if (mediaStream) {
        mediaStream.getTracks().forEach(track => track.stop());
        mediaStream = null;
    }
    const video = document.getElementById('camera-video');
    video.srcObject = null;
    document.getElementById('camera-modal').classList.remove('active');
}

function switchCamera() {
    if (mediaStream) {
        mediaStream.getTracks().forEach(track => track.stop());
    }
    currentCameraFacingMode = currentCameraFacingMode === "user" ? "environment" : "user";
    startCamera(activePhotoTargetInput);
}

function capturePhotoFromCamera() {
    const video = document.getElementById('camera-video');
    if (!video.srcObject) return;

    const canvasTemp = document.createElement('canvas');
    const maxDim = 640;
    let w = video.videoWidth;
    let h = video.videoHeight;

    if (w > maxDim || h > maxDim) {
        if (w > h) {
            h = Math.round((h * maxDim) / w);
            w = maxDim;
        } else {
            w = Math.round((w * maxDim) / h);
            h = maxDim;
        }
    }

    canvasTemp.width = w;
    canvasTemp.height = h;

    const ctxTemp = canvasTemp.getContext('2d');
    ctxTemp.drawImage(video, 0, 0, w, h);
    
    const dataURL = canvasTemp.toDataURL("image/jpeg", 0.7);

    handleCapturedPhotoData(dataURL);
    stopCamera();
}

function handleCapturedPhotoData(dataURL) {
    const lang = state.language;

    if (activePhotoTargetInput === 'expense') {
        document.getElementById('expense-photo-base64').value = dataURL;
        document.getElementById('img-expense-preview-src').src = dataURL;
        document.getElementById('expense-photo-preview').style.display = 'inline-block';
    } 
    else if (activePhotoTargetInput === 'quick') {
        document.getElementById('quick-expense-photo-base64').value = dataURL;
        document.getElementById('img-quick-preview-src').src = dataURL;
        document.getElementById('quick-photo-preview').style.display = 'inline-block';
    }
    else if (activePhotoTargetInput === 'progress') {
        const promptMsg = lang === 'en'
            ? "Enter a title for this construction progress photo:"
            : "මෙම ඉදිකිරීම් ප්‍රගති ඡායාරූපය සඳහා කෙටි නමක් ඇතුළත් කරන්න:";
        
        const titleText = prompt(promptMsg, lang === 'en' ? "Site Progress Update" : "ඉදිකිරීම් ප්‍රගති ඡායාරූපය");
        if (titleText !== null && titleText.trim() !== '') {
            const newDrawing = {
                id: "draw-" + Date.now(),
                title: titleText.trim(),
                title_si: titleText.trim(),
                desc: "Live captured site progress photo",
                desc_si: "කැමරාවෙන් ලබා ගත් ඉදිකිරීම් ප්‍රගති ඡායාරූපයකි",
                src: dataURL,
                isDefault: false
            };
            state.drawings.push(newDrawing);
            saveState();
        }
    }
}

// Connect camera buttons
document.getElementById('btn-expense-capture-photo').addEventListener('click', () => startCamera('expense'));
document.getElementById('btn-quick-capture-photo').addEventListener('click', () => startCamera('quick'));
document.getElementById('btn-capture-progress-photo').addEventListener('click', () => startCamera('progress'));
document.getElementById('btn-capture-camera-frame').addEventListener('click', capturePhotoFromCamera);
document.getElementById('btn-switch-camera').addEventListener('click', switchCamera);

function setupPhotoUploadInput(inputSelector, base64HiddenSelector, previewContainerSelector, imgPreviewSrcSelector) {
    const fileInput = document.getElementById(inputSelector);
    const hiddenInput = document.getElementById(base64HiddenSelector);
    const previewBox = document.getElementById(previewContainerSelector);
    const imgPreview = document.getElementById(imgPreviewSrcSelector);

    fileInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(evt) {
            compressImage(evt.target.result, function(compressedBase64) {
                hiddenInput.value = compressedBase64;
                imgPreview.src = compressedBase64;
                previewBox.style.display = 'inline-block';
            });
        };
        reader.readAsDataURL(file);
    });
}

setupPhotoUploadInput('expense-photo', 'expense-photo-base64', 'expense-photo-preview', 'img-expense-preview-src');
setupPhotoUploadInput('quick-expense-photo', 'quick-expense-photo-base64', 'quick-photo-preview', 'img-quick-preview-src');

document.getElementById('btn-expense-upload-photo').addEventListener('click', () => {
    document.getElementById('expense-photo').click();
});
document.getElementById('btn-quick-upload-photo').addEventListener('click', () => {
    document.getElementById('quick-expense-photo').click();
});

document.getElementById('btn-remove-expense-photo').addEventListener('click', () => {
    document.getElementById('expense-photo').value = '';
    document.getElementById('expense-photo-base64').value = '';
    document.getElementById('expense-photo-preview').style.display = 'none';
});

document.getElementById('btn-remove-quick-photo').addEventListener('click', () => {
    document.getElementById('quick-expense-photo').value = '';
    document.getElementById('quick-expense-photo-base64').value = '';
    document.getElementById('quick-photo-preview').style.display = 'none';
});


// --- DRAWING PAD CANVAS SKETCH LOGIC ---
function initCanvasDrawing() {
    canvas = document.getElementById('sketch-canvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseleave', stopDrawing);

    canvas.addEventListener('touchstart', startDrawingTouch, { passive: false });
    canvas.addEventListener('touchmove', drawTouch, { passive: false });
    canvas.addEventListener('touchend', stopDrawing);
}

function getCanvasCoordinates(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY
    };
}

function startDrawing(e) {
    isDrawing = true;
    ctx.beginPath();
    const coords = getCanvasCoordinates(e);
    ctx.moveTo(coords.x, coords.y);
}

function draw(e) {
    if (!isDrawing) return;
    const coords = getCanvasCoordinates(e);
    
    ctx.strokeStyle = isEraser ? '#0f4c81' : brushColor;
    ctx.lineWidth = brushSize;
    
    ctx.lineTo(coords.x, coords.y);
    ctx.stroke();
}

function startDrawingTouch(e) {
    e.preventDefault();
    if (e.touches.length === 1) {
        isDrawing = true;
        ctx.beginPath();
        const touch = e.touches[0];
        const coords = getCanvasCoordinates(touch);
        ctx.moveTo(coords.x, coords.y);
    }
}

function drawTouch(e) {
    e.preventDefault();
    if (!isDrawing || e.touches.length !== 1) return;
    const touch = e.touches[0];
    const coords = getCanvasCoordinates(touch);
    
    ctx.strokeStyle = isEraser ? '#0f4c81' : brushColor;
    ctx.lineWidth = brushSize;
    
    ctx.lineTo(coords.x, coords.y);
    ctx.stroke();
}

function stopDrawing() {
    isDrawing = false;
}

document.querySelectorAll('.color-swatch').forEach(swatch => {
    swatch.addEventListener('click', function() {
        document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
        this.classList.add('active');

        if (this.id === 'canvas-tool-eraser') {
            isEraser = true;
        } else {
            isEraser = false;
            const swatchHex = this.getAttribute('data-color');
            brushColor = BLUEPRINT_COLORS[swatchHex] || '#ffffff';
        }
    });
});

document.getElementById('sketch-brush-size').addEventListener('change', function() {
    brushSize = parseInt(this.value) || 5;
});

document.getElementById('btn-toggle-grid').addEventListener('click', function() {
    const wrapper = document.querySelector('.canvas-wrapper');
    const isGridHidden = wrapper.classList.toggle('has-grid');
    const lang = state.language;
    
    if (isGridHidden) {
        this.querySelector('span').textContent = lang === 'en' ? "Hide Grid" : "නෙට් රේඛා සඟවන්න";
    } else {
        this.querySelector('span').textContent = lang === 'en' ? "Show Grid" : "නෙට් රේඛා පෙන්වන්න";
    }
});

document.getElementById('btn-clear-canvas').addEventListener('click', function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

document.getElementById('btn-save-sketch').addEventListener('click', function() {
    const titleInput = document.getElementById('sketch-title');
    const titleText = titleInput.value.trim();
    const lang = state.language;

    if (!titleText) {
        alert(lang === 'en' ? "Please enter a title for your sketch." : "කරුණාකර සිතුවමට නමක් ඇතුළත් කරන්න.");
        titleInput.focus();
        return;
    }

    const dataURL = canvas.toDataURL("image/png");
    
    const newDrawing = {
        id: "draw-" + Date.now(),
        title: titleText,
        title_si: titleText,
        desc: "Interactive sketch pad drawing plan",
        desc_si: "ඩිජිටල් ඇඳීම් පුවරුවෙන් අඳින ලද සැලැස්මකි",
        src: dataURL,
        isDefault: false
    };

    state.drawings.push(newDrawing);
    saveState();

    titleInput.value = '';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('sketch-pad-modal').classList.remove('active');
});

// --- DYNAMIC BLUEPRINT TEMPLATE GENERATOR (NEW) ---

function initTemplateGenerator() {
    templateCanvas = document.getElementById('template-preview-canvas');
    if (!templateCanvas) return;
    templateCtx = templateCanvas.getContext('2d');

    // Attach listeners
    const typeSelect = document.getElementById('template-structure-type');
    const lengthInput = document.getElementById('template-length');
    const widthInput = document.getElementById('template-width');
    const titleInput = document.getElementById('template-title');
    let isTitleManuallyEdited = false;

    titleInput.addEventListener('input', () => {
        isTitleManuallyEdited = true;
    });

    const updatePreview = () => {
        const type = typeSelect.value;
        let length = parseFloat(lengthInput.value);
        let width = parseFloat(widthInput.value);
        
        if (isNaN(length) || length < 5) length = 20;
        if (isNaN(width) || width < 5) width = 12;

        const lang = state.language;
        if (!isTitleManuallyEdited || !titleInput.value.trim()) {
            const labels = {
                room: { en: "Single Room Plan", si: "තනි කාමර සැලැස්ම" },
                store: { en: "Store Room Plan", si: "ගබඩා කාමර සැලැස්ම" },
                house: { en: "Simple House Layout", si: "සරල නිවාස සැලැස්ම" }
            };
            titleInput.value = `${labels[type][lang]} (${length}x${width} ft)`;
        }

        // Redraw
        drawTemplateBlueprint(type, length, width);
    };

    typeSelect.addEventListener('change', updatePreview);
    lengthInput.addEventListener('input', updatePreview);
    widthInput.addEventListener('input', updatePreview);

    // Initial draw on modal load trigger
    document.getElementById('btn-open-template-modal').addEventListener('click', () => {
        isTitleManuallyEdited = false;
        document.getElementById('template-generator-modal').classList.add('active');
        updatePreview();
    });

    // Save action
    document.getElementById('btn-save-template-plan').addEventListener('click', function() {
        const titleText = titleInput.value.trim();
        const type = typeSelect.value;
        let length = parseFloat(lengthInput.value);
        let width = parseFloat(widthInput.value);
        
        if (isNaN(length) || length < 5) length = 20;
        if (isNaN(width) || width < 5) width = 12;
        const lang = state.language;

        if (!titleText) {
            alert(lang === 'en' ? "Please enter a title." : "කරුණාකර සැලැස්ම සඳහා නමක් ඇතුළත් කරන්න.");
            return;
        }

        const dataURL = templateCanvas.toDataURL("image/png");
        
        const typeDescs = {
            room: { en: `Custom Single Room floor plan. Dimensions: ${length}ft x ${width}ft.`, si: `තනි කාමර බිම් සැලැස්ම. ප්‍රමාණය: අඩි ${length} x ${width}.` },
            store: { en: `Custom Store Room floor plan. Dimensions: ${length}ft x ${width}ft.`, si: `ගබඩා කාමර බිම් සැලැස්ම. ප්‍රමාණය: අඩි ${length} x ${width}.` },
            house: { en: `Custom Simple 4-Room House floor plan. Dimensions: ${length}ft x ${width}ft.`, si: `සරල කාමර 4ක නිවාස බිම් සැලැස්ම. ප්‍රමාණය: අඩි ${length} x ${width}.` }
        };

        const newDrawing = {
            id: "draw-" + Date.now(),
            title: titleText,
            title_si: titleText,
            desc: typeDescs[type]['en'],
            desc_si: typeDescs[type]['si'],
            src: dataURL,
            isDefault: false
        };

        state.drawings.push(newDrawing);
        saveState();

        document.getElementById('template-generator-modal').classList.remove('active');
    });
}

// Helper to draw blueprint windows
function drawBlueprintWindow(ctxT, x, y, w, h, isVertical) {
    ctxT.fillStyle = "#0f4c81"; // Blueprint Blue background
    ctxT.fillRect(x - 1, y - 1, w + 2, h + 2);
    ctxT.strokeStyle = "#ffffff";
    ctxT.lineWidth = 2;
    ctxT.strokeRect(x, y, w, h);
    
    // Draw window double-line panel
    ctxT.beginPath();
    if (isVertical) {
        ctxT.moveTo(x + w / 2, y);
        ctxT.lineTo(x + w / 2, y + h);
    } else {
        ctxT.moveTo(x, y + h / 2);
        ctxT.lineTo(x + w, y + h / 2);
    }
    ctxT.stroke();
}

function drawTemplateBlueprint(type, length, width) {
    const ctxT = templateCtx;
    const canvasT = templateCanvas;
    const lang = state.language;

    const area = length * width;
    document.getElementById('template-calc-area').textContent = lang === 'en' 
        ? `${area.toLocaleString()} Sq.Ft` 
        : `වර්ග අඩි ${area.toLocaleString()}`;

    // 1. Draw Blueprint Background & Grids
    ctxT.fillStyle = "#0f4c81"; // Blueprint Blue
    ctxT.fillRect(0, 0, canvasT.width, canvasT.height);

    ctxT.strokeStyle = "rgba(255, 255, 255, 0.08)";
    ctxT.lineWidth = 1;
    const gridSize = 25;
    for (let x = 0; x < canvasT.width; x += gridSize) {
        ctxT.beginPath(); ctxT.moveTo(x, 0); ctxT.lineTo(x, canvasT.height); ctxT.stroke();
    }
    for (let y = 0; y < canvasT.height; y += gridSize) {
        ctxT.beginPath(); ctxT.moveTo(0, y); ctxT.lineTo(canvasT.width, y); ctxT.stroke();
    }

    // 2. Calculate Scaling & Centering
    const margin = 50;
    const maxDrawW = canvasT.width - 2 * margin; // 400px
    const maxDrawH = canvasT.height - 2 * margin; // 250px

    const scale = Math.min(maxDrawW / length, maxDrawH / width);

    const drawW = length * scale;
    const drawH = width * scale;
    const offsetX = (canvasT.width - drawW) / 2;
    const offsetY = (canvasT.height - drawH) / 2;

    // 3. Draw Outer and Inner Walls
    const wallThickness = Math.max(3, scale * 0.75); // approx 9 inches scale wall

    ctxT.strokeStyle = "#ffffff";
    ctxT.lineWidth = 2;
    
    // Outer Rectangle
    ctxT.strokeRect(offsetX, offsetY, drawW, drawH);

    // Inner Rectangle (Store layout has custom thicker inner wall)
    let innerWallThickness = wallThickness;
    if (type === 'store') {
        innerWallThickness = wallThickness * 1.3;
    }
    ctxT.strokeRect(offsetX + innerWallThickness, offsetY + innerWallThickness, drawW - 2 * innerWallThickness, drawH - 2 * innerWallThickness);

    // 4. Draw Specific Structures
    ctxT.fillStyle = "#0f4c81"; // Blueprint Blue to erase wall segments

    if (type === 'room') {
        const doorW = 3 * scale;
        const doorStart = 2 * scale;
        // Erase bottom wall segment
        ctxT.fillRect(offsetX + doorStart, offsetY + drawH - wallThickness - 2, doorW, wallThickness + 4);
        
        // Door panel
        ctxT.beginPath();
        ctxT.moveTo(offsetX + doorStart, offsetY + drawH - wallThickness);
        ctxT.lineTo(offsetX + doorStart, offsetY + drawH - wallThickness - doorW);
        ctxT.stroke();
        
        // Door swing arc
        ctxT.beginPath();
        ctxT.arc(offsetX + doorStart, offsetY + drawH - wallThickness, doorW, -Math.PI / 2, 0);
        ctxT.stroke();

        // Windows (double line) - 4ft wide
        const winW = 4 * scale;
        drawBlueprintWindow(ctxT, offsetX + (drawW - winW) / 2, offsetY, winW, wallThickness, false);
        drawBlueprintWindow(ctxT, offsetX + drawW - wallThickness, offsetY + (drawH - winW) / 2, wallThickness, winW, true);

        // Labels
        ctxT.fillStyle = "#ffffff";
        ctxT.font = "bold 14px Inter, Noto Sans Sinhala";
        ctxT.textAlign = "center";
        ctxT.fillText(lang === 'en' ? "SINGLE ROOM" : "තනි කාමරය", offsetX + drawW / 2, offsetY + drawH / 2 - 6);
        ctxT.font = "11px Inter";
        ctxT.fillText(`${length}ft x ${width}ft (${area} Sq.Ft)`, offsetX + drawW / 2, offsetY + drawH / 2 + 10);
    } 
    else if (type === 'store') {
        // Wide Double Cargo Door - 6ft wide center bottom
        const gateW = 6 * scale;
        const gateStart = (drawW - gateW) / 2;
        ctxT.fillRect(offsetX + gateStart, offsetY + drawH - innerWallThickness - 3, gateW, innerWallThickness + 6);
        
        // Gate panels swinging outwards
        const panelW = gateW / 2;
        ctxT.beginPath();
        ctxT.moveTo(offsetX + gateStart, offsetY + drawH - innerWallThickness);
        ctxT.lineTo(offsetX + gateStart - panelW * 0.7, offsetY + drawH - innerWallThickness + panelW * 0.7);
        ctxT.stroke();

        ctxT.beginPath();
        ctxT.moveTo(offsetX + gateStart + gateW, offsetY + drawH - innerWallThickness);
        ctxT.lineTo(offsetX + gateStart + gateW + panelW * 0.7, offsetY + drawH - innerWallThickness + panelW * 0.7);
        ctxT.stroke();

        // Tiny ventilation high window
        const winW = 3 * scale;
        drawBlueprintWindow(ctxT, offsetX + (drawW - winW) / 2, offsetY, winW, innerWallThickness, false);

        // Labels
        ctxT.fillStyle = "#ffffff";
        ctxT.font = "bold 14px Inter, Noto Sans Sinhala";
        ctxT.textAlign = "center";
        ctxT.fillText(lang === 'en' ? "STORE ROOM" : "ගබඩා කාමරය", offsetX + drawW / 2, offsetY + drawH / 2 - 6);
        ctxT.font = "11px Inter";
        ctxT.fillText(`${length}ft x ${width}ft (${area} Sq.Ft)`, offsetX + drawW / 2, offsetY + drawH / 2 + 10);
    }
    else if (type === 'house') {
        const innerWallThick = wallThickness * 0.6;
        ctxT.lineWidth = innerWallThick;

        // Vertical division wall at 55%
        const vertX = offsetX + drawW * 0.55;
        // Horizontal division wall at 50%
        const horizY = offsetY + drawH * 0.5;

        // Interior wall drawing
        ctxT.beginPath();
        ctxT.moveTo(vertX, offsetY + wallThickness); 
        ctxT.lineTo(vertX, offsetY + drawH - wallThickness);
        ctxT.moveTo(offsetX + wallThickness, horizY); 
        ctxT.lineTo(offsetX + drawW - wallThickness, horizY);
        ctxT.stroke();

        // Draw door openings and swings
        const doorW = 3 * scale;

        // 1. Living room -> Bedroom door (Horizontal partition)
        const door1Start = offsetX + wallThickness + 1.5 * scale;
        ctxT.fillRect(door1Start, horizY - innerWallThick/2 - 2, doorW, innerWallThick + 4);
        ctxT.strokeStyle = "#ffffff";
        ctxT.lineWidth = 2;
        ctxT.beginPath();
        ctxT.moveTo(door1Start, horizY);
        ctxT.lineTo(door1Start, horizY + doorW);
        ctxT.stroke();
        ctxT.beginPath();
        ctxT.arc(door1Start, horizY, doorW, Math.PI / 2, 0, true);
        ctxT.stroke();

        // 2. Living room -> Kitchen door (Vertical partition)
        const door2Start = offsetY + wallThickness + 1.5 * scale;
        ctxT.fillRect(vertX - innerWallThick/2 - 2, door2Start, innerWallThick + 4, doorW);
        ctxT.beginPath();
        ctxT.moveTo(vertX, door2Start);
        ctxT.lineTo(vertX + doorW, door2Start);
        ctxT.stroke();
        ctxT.beginPath();
        ctxT.arc(vertX, door2Start, doorW, 0, Math.PI / 2);
        ctxT.stroke();

        // 3. Kitchen -> Bath door (Horizontal partition)
        const door3Start = offsetX + drawW - wallThickness - 4.5 * scale;
        ctxT.fillRect(door3Start, horizY - innerWallThick/2 - 2, doorW, innerWallThick + 4);
        ctxT.beginPath();
        ctxT.moveTo(door3Start, horizY);
        ctxT.lineTo(door3Start, horizY + doorW);
        ctxT.stroke();
        ctxT.beginPath();
        ctxT.arc(door3Start, horizY, doorW, Math.PI / 2, 0, true);
        ctxT.stroke();

        // 4. Bedroom -> Bath door (Vertical partition)
        const door4Start = offsetY + drawH - wallThickness - 4.5 * scale;
        ctxT.fillRect(vertX - innerWallThick/2 - 2, door4Start, innerWallThick + 4, doorW);
        ctxT.beginPath();
        ctxT.moveTo(vertX, door4Start);
        ctxT.lineTo(vertX + doorW, door4Start);
        ctxT.stroke();
        ctxT.beginPath();
        ctxT.arc(vertX, door4Start, doorW, 0, Math.PI / 2);
        ctxT.stroke();

        // 5. Main Entrance Door (Left outer wall of Living Room)
        const mainDoorStart = offsetY + wallThickness + 2.5 * scale;
        ctxT.fillRect(offsetX - 2, mainDoorStart, wallThickness + 4, doorW);
        ctxT.beginPath();
        ctxT.moveTo(offsetX + wallThickness, mainDoorStart);
        ctxT.lineTo(offsetX + wallThickness + doorW, mainDoorStart);
        ctxT.stroke();
        ctxT.beginPath();
        ctxT.arc(offsetX + wallThickness, mainDoorStart, doorW, 0, Math.PI / 2);
        ctxT.stroke();

        // Windows
        const winW = 3.5 * scale;
        drawBlueprintWindow(ctxT, offsetX + 3 * scale, offsetY, winW, wallThickness, false);
        drawBlueprintWindow(ctxT, offsetX + drawW - 5.5 * scale, offsetY, winW, wallThickness, false);
        drawBlueprintWindow(ctxT, offsetX + 4 * scale, offsetY + drawH - wallThickness, winW, wallThickness, false);
        drawBlueprintWindow(ctxT, offsetX, offsetY + drawH - 5 * scale, wallThickness, winW, true);
        drawBlueprintWindow(ctxT, offsetX + drawW - wallThickness, offsetY + 3 * scale, wallThickness, winW, true);
        // Small bathroom exhaust window
        drawBlueprintWindow(ctxT, offsetX + drawW - wallThickness, offsetY + drawH - 3 * scale, wallThickness, 1.5 * scale, true);

        // Room Labels
        ctxT.fillStyle = "#ffffff";
        ctxT.font = "bold 10px Inter, Noto Sans Sinhala";
        ctxT.textAlign = "center";
        
        ctxT.fillText(lang === 'en' ? "LIVING ROOM" : "සාලය", offsetX + drawW * 0.28, offsetY + drawH * 0.25);
        ctxT.fillText(lang === 'en' ? "BEDROOM" : "නිදන කාමරය", offsetX + drawW * 0.28, offsetY + drawH * 0.75);
        ctxT.fillText(lang === 'en' ? "KITCHEN" : "කුස්සිය", offsetX + drawW * 0.78, offsetY + drawH * 0.25);
        ctxT.fillText(lang === 'en' ? "BATHROOM" : "නාන කාමරය", offsetX + drawW * 0.78, offsetY + drawH * 0.75);
    }

    // 5. Draw Dimension Text Borders
    ctxT.fillStyle = "#ffffff";
    ctxT.font = "11px Inter";
    ctxT.textAlign = "center";

    // Length label at the top
    ctxT.fillText(`${length}' - 0"`, offsetX + drawW / 2, offsetY - 12);
    // Width label at the left (rotate text for standard blueprint looks)
    ctxT.save();
    ctxT.translate(offsetX - 15, offsetY + drawH / 2);
    ctxT.rotate(-Math.PI / 2);
    ctxT.fillText(`${width}' - 0"`, 0, 0);
    ctxT.restore();
}

// --- UPLOAD DRAWING SHEET FORM ---
document.getElementById('upload-drawing-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const titleInput = document.getElementById('upload-title');
    const fileInput = document.getElementById('upload-file');
    const titleText = titleInput.value.trim();
    const file = fileInput.files[0];
    const lang = state.language;

    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
        compressImage(evt.target.result, function(compressedBase64) {
            const newDrawing = {
                id: "draw-" + Date.now(),
                title: titleText,
                title_si: titleText,
                desc: "Uploaded project blueprint document",
                desc_si: "උඩුගත කරන ලද සැලසුම් රූප රාමුවකි",
                src: compressedBase64,
                isDefault: false
            };

            state.drawings.push(newDrawing);
            saveState();

            titleInput.value = '';
            fileInput.value = '';
            document.getElementById('upload-drawing-modal').classList.remove('active');
        });
    };
    reader.readAsDataURL(file);
});

// --- OPEN MODALS CLICKS ---
document.getElementById('btn-open-upload-modal').addEventListener('click', () => {
    document.getElementById('upload-drawing-modal').classList.add('active');
});

document.getElementById('btn-open-sketch-modal').addEventListener('click', () => {
    document.getElementById('sketch-title').value = '';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.querySelector('.canvas-wrapper').classList.add('has-grid');
    document.getElementById('sketch-pad-modal').classList.add('active');
});

// --- UNIVERSAL MODAL CLOSE TRIGGERS ---
document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const targetId = this.getAttribute('data-close-target');
        if (targetId) {
            document.getElementById(targetId).classList.remove('active');
            if (targetId === 'camera-modal') {
                stopCamera();
            }
        }
    });
});

window.addEventListener('click', (e) => {
    document.querySelectorAll('.modal').forEach(m => {
        if (e.target === m) {
            m.classList.remove('active');
            if (m.id === 'camera-modal') {
                stopCamera();
            }
        }
    });
});

// --- FORM EVENT HANDLERS ---

const expPriceInput = document.getElementById('expense-unit-price');
const expQtyInput = document.getElementById('expense-qty');
const expTotalInput = document.getElementById('expense-total');

function calculateExpenseTotal() {
    const price = parseFloat(expPriceInput.value) || 0;
    const qty = parseFloat(expQtyInput.value) || 0;
    expTotalInput.value = (price * qty).toFixed(2);
}

expPriceInput.addEventListener('input', calculateExpenseTotal);
expQtyInput.addEventListener('input', calculateExpenseTotal);

// Expense Form Submission
document.getElementById('expense-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const id = document.getElementById('expense-id').value;
    const date = document.getElementById('expense-date').value;
    const name = document.getElementById('expense-name').value.trim();
    const category = document.getElementById('expense-category').value;
    const shop = document.getElementById('expense-shop').value;
    const unitPrice = parseFloat(expPriceInput.value) || 0;
    const qty = parseFloat(expQtyInput.value) || 1;
    const total = parseFloat(expTotalInput.value) || (unitPrice * qty);
    const photo = document.getElementById('expense-photo-base64').value; // photo attribute

    if (id) {
        // Edit Mode
        const idx = state.expenses.findIndex(exp => exp.id === id);
        if (idx !== -1) {
            state.expenses[idx] = { id, date, name, category, shop, unitPrice, qty, total, photo };
        }
    } else {
        // Add Mode
        const newId = 'exp-' + Date.now();
        state.expenses.push({ id: newId, date, name, category, shop, unitPrice, qty, total, photo });
    }

    resetExpenseForm();
    saveState();
});

function resetExpenseForm() {
    document.getElementById('expense-id').value = '';
    document.getElementById('expense-name').value = '';
    document.getElementById('expense-unit-price').value = '';
    document.getElementById('expense-qty').value = '1';
    document.getElementById('expense-total').value = '0.00';
    document.getElementById('expense-date').value = new Date().toISOString().split('T')[0];
    
    // Clear photo field
    document.getElementById('expense-photo').value = '';
    document.getElementById('expense-photo-base64').value = '';
    document.getElementById('expense-photo-preview').style.display = 'none';

    document.getElementById('btn-save-expense').textContent = state.language === 'en' ? 'Save Item' : 'සුරකින්න';
    document.getElementById('btn-cancel-expense').style.display = 'none';
}

document.getElementById('btn-cancel-expense').addEventListener('click', resetExpenseForm);

// Payments Form Submission
document.getElementById('payment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const id = document.getElementById('payment-id').value;
    const date = document.getElementById('payment-date').value;
    const recipient = document.getElementById('payment-recipient').value.trim();
    const amount = parseFloat(document.getElementById('payment-amount').value) || 0;
    const method = document.getElementById('payment-method').value;
    const notes = document.getElementById('payment-notes').value.trim();

    if (id) {
        // Edit Mode
        const idx = state.payments.findIndex(pay => pay.id === id);
        if (idx !== -1) {
            state.payments[idx] = { id, date, recipient, amount, method, notes };
        }
    } else {
        // Add Mode
        const newId = 'pay-' + Date.now();
        state.payments.push({ id: newId, date, recipient, amount, method, notes });
    }

    resetPaymentForm();
    saveState();
});

function resetPaymentForm() {
    document.getElementById('payment-id').value = '';
    document.getElementById('payment-recipient').value = '';
    document.getElementById('payment-amount').value = '';
    document.getElementById('payment-notes').value = '';
    document.getElementById('payment-date').value = new Date().toISOString().split('T')[0];
    
    document.getElementById('btn-save-payment').textContent = state.language === 'en' ? 'Record Payment' : 'ගෙවීම සුරකින්න';
    document.getElementById('btn-cancel-payment').style.display = 'none';
}

document.getElementById('btn-cancel-payment').addEventListener('click', resetPaymentForm);

// --- EDIT/DELETE OPERATIONS (ATTACHED GLOBALLY) ---
window.editExpense = function(id) {
    const exp = state.expenses.find(e => e.id === id);
    if (!exp) return;

    document.getElementById('expense-id').value = exp.id;
    document.getElementById('expense-date').value = exp.date;
    document.getElementById('expense-name').value = exp.name;
    document.getElementById('expense-category').value = exp.category;
    document.getElementById('expense-shop').value = exp.shop;
    document.getElementById('expense-unit-price').value = exp.unitPrice;
    document.getElementById('expense-qty').value = exp.qty;
    document.getElementById('expense-total').value = exp.total.toFixed(2);

    // Photo restore
    if (exp.photo) {
        document.getElementById('expense-photo-base64').value = exp.photo;
        document.getElementById('img-expense-preview-src').src = exp.photo;
        document.getElementById('expense-photo-preview').style.display = 'inline-block';
    } else {
        document.getElementById('expense-photo-base64').value = '';
        document.getElementById('expense-photo-preview').style.display = 'none';
    }

    document.getElementById('expense-form').scrollIntoView({ behavior: 'smooth' });

    document.getElementById('btn-save-expense').textContent = state.language === 'en' ? 'Update Item' : 'යාවත්කාලීන කරන්න';
    document.getElementById('btn-cancel-expense').style.display = 'inline-block';
};

window.deleteExpense = function(id) {
    const confirmMsg = state.language === 'en' 
        ? "Are you sure you want to delete this expense?" 
        : "මෙම වියදම ඉවත් කිරීමට ඔබට විශ්වාසද?";
    
    if (confirm(confirmMsg)) {
        state.expenses = state.expenses.filter(e => e.id !== id);
        saveState();
    }
};

window.editPayment = function(id) {
    const pay = state.payments.find(p => p.id === id);
    if (!pay) return;

    document.getElementById('payment-id').value = pay.id;
    document.getElementById('payment-date').value = pay.date;
    document.getElementById('payment-recipient').value = pay.recipient;
    document.getElementById('payment-amount').value = pay.amount;
    document.getElementById('payment-method').value = pay.method;
    document.getElementById('payment-notes').value = pay.notes;

    document.getElementById('payment-form').scrollIntoView({ behavior: 'smooth' });

    document.getElementById('btn-save-payment').textContent = state.language === 'en' ? 'Update Payment' : 'ගෙවීම යාවත්කාලීන කරන්න';
    document.getElementById('btn-cancel-payment').style.display = 'inline-block';
};

window.deletePayment = function(id) {
    const confirmMsg = state.language === 'en' 
        ? "Are you sure you want to delete this payment record?" 
        : "මෙම ගෙවීම් වාර්තාව ඉවත් කිරීමට ඔබට විශ්වාසද?";
    
    if (confirm(confirmMsg)) {
        state.payments = state.payments.filter(p => p.id !== id);
        saveState();
    }
};

// --- NAVIGATION & TABS ---
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(s => s.classList.remove('active'));

        this.classList.add('active');
        const targetTab = this.getAttribute('data-tab');
        document.getElementById('tab-' + targetTab).classList.add('active');

        updateHeaderTitle(targetTab);

        // Close sidebar on mobile/tablet after navigation
        const sidebar = document.querySelector('.sidebar');
        if (sidebar && window.innerWidth <= 1024) {
            sidebar.classList.remove('active');
        }
    });
});

// Mobile Sidebar Toggle
(function() {
    const toggleBtn = document.getElementById('btn-sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            sidebar.classList.toggle('active');
        });

        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 1024 && sidebar.classList.contains('active')) {
                if (!sidebar.contains(e.target) && e.target !== toggleBtn && !toggleBtn.contains(e.target)) {
                    sidebar.classList.remove('active');
                }
            }
        });
    }
})();

document.addEventListener('click', function(e) {
    const targetLink = e.target.closest('[data-tab-link]');
    if (targetLink) {
        e.preventDefault();
        const tabName = targetLink.getAttribute('data-tab-link');
        const navItem = document.querySelector(`.nav-item[data-tab="${tabName}"]`);
        if (navItem) navItem.click();
    }
});

function updateHeaderTitle(tab) {
    const titleText = document.getElementById('tab-title-text');
    const subtitleText = document.getElementById('tab-subtitle-text');
    const lang = state.language;

    const titles = {
        dashboard: {
            en: { title: "Dashboard Overview", sub: "Real-time construction financial analytics" },
            si: { title: "ප්‍රධාන දළ විශ්ලේෂණය", sub: "තථ්‍ය කාලීන ඉදිකිරීම් මූල්‍ය විශ්ලේෂණය" }
        },
        expenses: {
            en: { title: "Expenses Ledger", sub: "Manage construction materials, transport and other item costs" },
            si: { title: "වියදම් ලේඛනය", sub: "අමුද්‍රව්‍ය, ප්‍රවාහන සහ වෙනත් වියදම් කළමනාකරණය" }
        },
        payments: {
            en: { title: "Payments Tracker", sub: "Track advances and settlements paid to suppliers & labor" },
            si: { title: "ගෙවීම් සටහන්", sub: "සපයන්නන් සහ කම්කරුවන් සඳහා කරන ලද ගෙවීම් සහ අත්තිකාරම්" }
        },
        drawings: {
            en: { title: "Drawing Sheets & Site Progress", sub: "Blueprint layout sketches, uploads, and site photos" },
            si: { title: "සැලසුම් සහ ඉදිකිරීම් ප්‍රගතිය", sub: "නව සැලසුම්, සිතුවම් සහ ඉදිකිරීම්වල සජීවී ඡායාරූප" }
        },
        reports: {
            en: { title: "Project Financial Reports", sub: "Detailed cost division statement and data exports" },
            si: { title: "මූල්‍ය වාර්තා සහ උපස්ථ", sub: "වියදම් ප්‍රකාශනය සහ දත්ත බාගත කිරීම්" }
        }
    };

    titleText.textContent = titles[tab][lang].title;
    titleText.setAttribute('data-en', titles[tab]['en'].title);
    titleText.setAttribute('data-si', titles[tab]['si'].title);

    subtitleText.textContent = titles[tab][lang].sub;
    subtitleText.setAttribute('data-en', titles[tab]['en'].sub);
    subtitleText.setAttribute('data-si', titles[tab]['si'].sub);
}

// --- BUDGET MANAGER MODAL LOGIC ---
function initBudgetManager() {
    const modal = document.getElementById('budget-manager-modal');
    const trigger = document.getElementById('btn-manage-budget');
    const amountInput = document.getElementById('budget-manager-amount');
    const currentValDisplay = document.getElementById('budget-manager-current-val');

    if (!modal || !trigger) return;

    // Open modal
    trigger.addEventListener('click', function() {
        currentValDisplay.textContent = formatCurrency(state.budget);
        amountInput.value = '';
        modal.classList.add('active');
    });

    // Action 1: Set Custom Budget
    document.getElementById('btn-budget-set-custom').addEventListener('click', function() {
        const floatVal = parseFloat(amountInput.value);
        const lang = state.language;
        if (!isNaN(floatVal) && floatVal >= 0) {
            state.budget = floatVal;
            saveState();
            modal.classList.remove('active');
        } else {
            alert(lang === 'en' ? "Please enter a valid positive number." : "කරුණාකර නිවැරදි ධන අගයක් ඇතුළත් කරන්න.");
        }
    });

    // Action 2: Add to Current Budget
    document.getElementById('btn-budget-add-amount').addEventListener('click', function() {
        const floatVal = parseFloat(amountInput.value);
        const lang = state.language;
        if (!isNaN(floatVal) && floatVal > 0) {
            state.budget += floatVal;
            saveState();
            modal.classList.remove('active');
        } else {
            alert(lang === 'en' ? "Please enter a valid positive amount to add." : "අයවැයට එකතු කිරීම සඳහා කරුණාකර නිවැරදි ධන අගයක් ඇතුළත් කරන්න.");
        }
    });

    // Action 3: Zero Budget (0)
    document.getElementById('btn-budget-zero').addEventListener('click', function() {
        const lang = state.language;
        const confirmMsg = lang === 'en'
            ? "Are you sure you want to set the budget to zero?"
            : "අයවැය ශුන්‍ය (0) කිරීමට ඔබට විශ්වාසද?";
        
        if (confirm(confirmMsg)) {
            state.budget = 0;
            saveState();
            modal.classList.remove('active');
        }
    });

    // Action 4: Auto-Fill from Expenses
    document.getElementById('btn-budget-autofill').addEventListener('click', function() {
        const metrics = calculateMetrics();
        state.budget = metrics.totalExpenses;
        saveState();
        modal.classList.remove('active');
    });

    // Action 5: Auto-Fill + 10% Contingency Buffer
    document.getElementById('btn-budget-autofill-buffer').addEventListener('click', function() {
        const metrics = calculateMetrics();
        state.budget = Math.round(metrics.totalExpenses * 1.10);
        saveState();
        modal.classList.remove('active');
    });

    // Action 6: Reset Project Records (Expenses, Payments, and Budget)
    document.getElementById('btn-budget-clear-all').addEventListener('click', function() {
        const lang = state.language;
        const confirmMsg = lang === 'en'
            ? "Are you sure you want to delete all expenses, payments, and reset the budget to zero? This action cannot be undone."
            : "ඔබට සියලුම වියදම්, ගෙවීම් වාර්තා මකා දමා අයවැය ශුන්‍ය කිරීමට විශ්වාසද? මෙම ක්‍රියාව නැවත වෙනස් කළ නොහැක.";
        
        if (confirm(confirmMsg)) {
            state.expenses = [];
            state.payments = [];
            state.budget = 0;
            saveState();
            modal.classList.remove('active');
        }
    });
}

// --- FILTER LISTENERS ---
document.getElementById('expense-search').addEventListener('input', renderExpensesLedgerTable);
document.getElementById('filter-shop-select').addEventListener('change', renderExpensesLedgerTable);
document.getElementById('filter-category-select').addEventListener('change', renderExpensesLedgerTable);
document.getElementById('payment-search').addEventListener('input', renderPaymentsLedgerTable);

// --- MODAL DIALOG CONTROLS ---
const modal = document.getElementById('quick-expense-modal');
const quickBtn = document.getElementById('btn-quick-expense');

quickBtn.addEventListener('click', () => {
    document.getElementById('quick-date').value = new Date().toISOString().split('T')[0];
    document.getElementById('quick-name').value = '';
    document.getElementById('quick-unit-price').value = '';
    document.getElementById('quick-qty').value = '1';
    
    document.getElementById('quick-expense-photo').value = '';
    document.getElementById('quick-expense-photo-base64').value = '';
    document.getElementById('quick-photo-preview').style.display = 'none';

    modal.classList.add('active');
});

// Quick Expense Form Submission
document.getElementById('quick-expense-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const date = document.getElementById('quick-date').value;
    const name = document.getElementById('quick-name').value.trim();
    const category = document.getElementById('quick-category').value;
    const shop = document.getElementById('quick-shop').value;
    const unitPrice = parseFloat(document.getElementById('quick-unit-price').value) || 0;
    const qty = parseFloat(document.getElementById('quick-qty').value) || 1;
    const total = unitPrice * qty;
    const photo = document.getElementById('quick-expense-photo-base64').value; // quick photo

    const newId = 'exp-' + Date.now();
    state.expenses.push({ id: newId, date, name, category, shop, unitPrice, qty, total, photo });

    modal.classList.remove('active');
    saveState();
});

// --- BACKUP & EXPORTS ---

// CSV Export
document.getElementById('btn-export-csv').addEventListener('click', function() {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Date,Item Name,Category,Allocation,Qty,UnitPrice,Total\r\n";

    state.expenses.forEach(exp => {
        const row = [
            exp.date,
            `"${exp.name.replace(/"/g, '""')}"`,
            CATEGORY_MAP[exp.category]['en'],
            exp.shop,
            exp.qty,
            exp.unitPrice,
            exp.total
        ].join(",");
        csvContent += row + "\r\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Kapuwatta_Expenses_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Backup Download JSON
document.getElementById('btn-export-json').addEventListener('click', function() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `Kapuwatta_Backup_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
});

// Backup Import JSON
document.getElementById('input-import-json').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
        try {
            const importedState = JSON.parse(evt.target.result);
            if (Array.isArray(importedState.expenses) && Array.isArray(importedState.payments)) {
                state = {
                    budget: (importedState.budget !== undefined && importedState.budget !== null) ? importedState.budget : 3000000.00,
                    expenses: importedState.expenses,
                    payments: importedState.payments,
                    drawings: importedState.drawings || getDefaultDrawings(),
                    language: importedState.language || state.language,
                    theme: importedState.theme || state.theme
                };
                saveState();
                alert(state.language === 'en' ? "Data restored successfully!" : "දත්ත සාර්ථකව යථා තත්ත්වයට පත් කරන ලදී!");
            } else {
                throw new Error("Invalid file structure");
            }
        } catch (err) {
            alert(state.language === 'en' ? "Failed to read backup file. Make sure it is a valid backup json." : "උපස්ථ ගොනුව කියවීමට නොහැකි විය. එය නිවැරදි json ගොනුවක් බව තහවුරු කරගන්න.");
        }
    };
    reader.readAsText(file);
});

// Clear All Database
document.getElementById('btn-clear-database').addEventListener('click', function() {
    const confirm1 = state.language === 'en' 
        ? "CRITICAL WARNING: This will delete ALL logged items and payment records permanently. Are you sure?" 
        : "අවධානයයි: මෙමගින් ඔබ ඇතුළත් කළ සියලුම වියදම් සහ ගෙවීම් වාර්තා සදහටම මැකී යනු ඇත. ඔබට විශ්වාසද?";
    
    if (confirm(confirm1)) {
        const confirm2 = state.language === 'en'
            ? "Type 'DELETE' to confirm database wipe:"
            : "තහවුරු කිරීම සඳහා 'DELETE' යන වචනය මෙතැන ලියන්න:";
        
        const verification = prompt(confirm2);
        if (verification === 'DELETE') {
            state.expenses = [];
            state.payments = [];
            state.drawings = getDefaultDrawings();
            state.budget = 0;
            saveState();
        } else {
            alert(state.language === 'en' ? "Wipe cancelled. Verification failed." : "මකාදැමීම අවලංගු කරන ලදී.");
        }
    }
});

// --- GLOBAL TOGGLE BUTTONS ---

document.getElementById('btn-lang-en').addEventListener('click', () => {
    state.language = 'en';
    saveState();
});
document.getElementById('btn-lang-si').addEventListener('click', () => {
    state.language = 'si';
    saveState();
});

document.getElementById('btn-theme-toggle').addEventListener('click', () => {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    saveState();
});

function updateShopMap() {
    const activeProj = getActiveProject();
    const type = activeProj ? activeProj.type : 'commercial';
    
    SHOP_MAP['shop1'] = {
        en: SECTION_TRANSLATIONS[type]['en'].shop1,
        si: SECTION_TRANSLATIONS[type]['si'].shop1
    };
    SHOP_MAP['shop2'] = {
        en: SECTION_TRANSLATIONS[type]['en'].shop2,
        si: SECTION_TRANSLATIONS[type]['si'].shop2
    };
    SHOP_MAP['shared'] = {
        en: SECTION_TRANSLATIONS[type]['en'].shared,
        si: SECTION_TRANSLATIONS[type]['si'].shared
    };
    if (SECTION_TRANSLATIONS[type]['en'].section4) {
        SHOP_MAP['section4'] = {
            en: SECTION_TRANSLATIONS[type]['en'].section4,
            si: SECTION_TRANSLATIONS[type]['si'].section4
        };
    } else {
        delete SHOP_MAP['section4'];
    }
}

function renderVisualCostMap() {
    const activeProj = getActiveProject();
    const type = activeProj ? activeProj.type : 'commercial';
    const lang = state.language;
    const sect = SECTION_TRANSLATIONS[type][lang];
    const metrics = calculateMetrics();
    const container = document.getElementById('visual-map-container');
    
    if (!container) return;

    if (type === 'residential') {
        container.style.gridTemplateColumns = 'repeat(3, 1fr)';
        container.style.gridTemplateRows = '160px 100px';
        
        container.innerHTML = `
            <!-- Living Room -->
            <div class="site-map-section shop1-box" onclick="filterBySiteSection('shop1')" title="View Living Room Expenses" style="grid-column: span 1;">
                <span class="map-label">
                    <i class="fa-solid fa-couch"></i> ${sect.shop1}
                </span>
                <span class="map-cost-tag">${formatCurrency(metrics.shop1Direct)}</span>
                <span class="map-sub-label">${lang === 'en' ? 'Direct Cost' : 'සෘජු වියදම'}</span>
            </div>
            <!-- Bedrooms -->
            <div class="site-map-section shop2-box" onclick="filterBySiteSection('shop2')" title="View Bedrooms Expenses" style="grid-column: span 1;">
                <span class="map-label">
                    <i class="fa-solid fa-bed"></i> ${sect.shop2}
                </span>
                <span class="map-cost-tag">${formatCurrency(metrics.shop2Direct)}</span>
                <span class="map-sub-label">${lang === 'en' ? 'Direct Cost' : 'සෘජු වියදම'}</span>
            </div>
            <!-- Kitchen & Bath -->
            <div class="site-map-section shared-box" onclick="filterBySiteSection('shared')" title="View Kitchen & Bath Expenses" style="grid-column: span 1; border-color: rgba(16, 185, 129, 0.4);">
                <span class="map-label" style="color: var(--color-success);">
                    <i class="fa-solid fa-sink"></i> ${sect.shared}
                </span>
                <span class="map-cost-tag">${formatCurrency(metrics.shop3Direct)}</span>
                <span class="map-sub-label">${lang === 'en' ? 'Direct Cost' : 'සෘජු වියදම'}</span>
            </div>
            <!-- Foundation / Shared -->
            <div class="site-map-section section4-box" onclick="filterBySiteSection('section4')" title="View Foundation / Shared Expenses" style="grid-column: span 3; border-color: rgba(139, 92, 246, 0.4);">
                <span class="map-label" style="color: var(--color-purple, #8b5cf6);">
                    <i class="fa-solid fa-trowel-bricks"></i> ${sect.section4}
                </span>
                <span class="map-cost-tag">${formatCurrency(metrics.sharedCost)}</span>
                <span class="map-sub-label">${lang === 'en' ? 'Shared Cost (33.3% Split)' : 'පොදු වියදම (33.3% බෙදීයාම)'}</span>
            </div>
        `;
    } else {
        container.style.gridTemplateColumns = '1fr 1fr';
        container.style.gridTemplateRows = '160px 100px';
        
        let icon1 = 'fa-shop';
        let icon2 = 'fa-shop';
        let icon3 = 'fa-handshake';
        
        if (type === 'annex') {
            icon1 = 'fa-door-open';
            icon2 = 'fa-restroom';
            icon3 = 'fa-handshake';
        } else if (type === 'factory') {
            icon1 = 'fa-industry';
            icon2 = 'fa-warehouse';
            icon3 = 'fa-briefcase';
        } else if (type === 'storeroom') {
            icon1 = 'fa-boxes-stacked';
            icon2 = 'fa-boxes-packing';
            icon3 = 'fa-truck-ramp-box';
        } else if (type === 'hall') {
            icon1 = 'fa-people-roof';
            icon2 = 'fa-masks-theater';
            icon3 = 'fa-restroom';
        } else if (type === 'open_area') {
            icon1 = 'fa-tree';
            icon2 = 'fa-square-parking';
            icon3 = 'fa-person-walking-arrow-right';
        }
        
        container.innerHTML = `
            <!-- Box 1 -->
            <div class="site-map-section shop1-box" onclick="filterBySiteSection('shop1')" title="View ${sect.shop1} Expenses">
                <span class="map-label">
                    <i class="fa-solid ${icon1}"></i> ${sect.shop1}
                </span>
                <span class="map-cost-tag">${formatCurrency(metrics.shop1Direct)}</span>
                <span class="map-sub-label">${lang === 'en' ? 'Direct Cost' : 'සෘජු වියදම'}</span>
            </div>
            <!-- Box 2 -->
            <div class="site-map-section shop2-box" onclick="filterBySiteSection('shop2')" title="View ${sect.shop2} Expenses">
                <span class="map-label">
                    <i class="fa-solid ${icon2}"></i> ${sect.shop2}
                </span>
                <span class="map-cost-tag">${formatCurrency(metrics.shop2Direct)}</span>
                <span class="map-sub-label">${lang === 'en' ? 'Direct Cost' : 'සෘජු වියදම'}</span>
            </div>
            <!-- Box 3 (Shared) -->
            <div class="site-map-section shared-box" onclick="filterBySiteSection('shared')" title="View Shared Expenses">
                <span class="map-label">
                    <i class="fa-solid ${icon3}"></i> ${sect.shared}
                </span>
                <span class="map-cost-tag">${formatCurrency(metrics.sharedCost)}</span>
                <span class="map-sub-label">${lang === 'en' ? 'Shared Cost (50/50 Split)' : 'පොදු වියදම (50/50 බෙදීයාම)'}</span>
            </div>
        `;
    }
}

function populateAllocationDropdown() {
    const activeProj = getActiveProject();
    const type = activeProj ? activeProj.type : 'commercial';
    const lang = state.language;
    const sect = SECTION_TRANSLATIONS[type][lang];
    
    const expenseShop = document.getElementById('expense-shop');
    const quickShop = document.getElementById('quick-shop');
    const filterShop = document.getElementById('filter-shop-select');
    
    // Update the label text dynamically
    const expenseLabel = document.querySelector('label[for="expense-shop"]');
    const quickLabel = document.querySelector('label[for="quick-shop"]');
    if (expenseLabel) expenseLabel.textContent = sect.label;
    if (quickLabel) quickLabel.textContent = sect.label;
    
    if (expenseShop) {
        const val = expenseShop.value;
        if (type === 'residential') {
            expenseShop.innerHTML = `
                <option value="shop1">${sect.shop1} (${lang === 'en' ? 'Direct' : 'සෘජු'})</option>
                <option value="shop2">${sect.shop2} (${lang === 'en' ? 'Direct' : 'සෘජු'})</option>
                <option value="shared">${sect.shared} (${lang === 'en' ? 'Direct' : 'සෘජු'})</option>
                <option value="section4">${sect.section4}</option>
            `;
        } else {
            expenseShop.innerHTML = `
                <option value="shop1">${sect.shop1} (${lang === 'en' ? 'Direct' : 'සෘජු'})</option>
                <option value="shop2">${sect.shop2} (${lang === 'en' ? 'Direct' : 'සෘජු'})</option>
                <option value="shared">${sect.shared} (${lang === 'en' ? 'Shared' : 'පොදු'})</option>
            `;
        }
        if ([...expenseShop.options].some(opt => opt.value === val)) {
            expenseShop.value = val;
        } else {
            expenseShop.selectedIndex = 0;
        }
    }
    
    if (quickShop) {
        const val = quickShop.value;
        if (type === 'residential') {
            quickShop.innerHTML = `
                <option value="shop1">${sect.shop1}</option>
                <option value="shop2">${sect.shop2}</option>
                <option value="shared">${sect.shared}</option>
                <option value="section4">${sect.section4}</option>
            `;
        } else {
            quickShop.innerHTML = `
                <option value="shop1">${sect.shop1}</option>
                <option value="shop2">${sect.shop2}</option>
                <option value="shared">${sect.shared}</option>
            `;
        }
        if ([...quickShop.options].some(opt => opt.value === val)) {
            quickShop.value = val;
        } else {
            quickShop.selectedIndex = 0;
        }
    }
    
    if (filterShop) {
        const val = filterShop.value;
        if (type === 'residential') {
            filterShop.innerHTML = `
                <option value="all">${lang === 'en' ? 'All Sections' : 'සියලුම කොටස්'}</option>
                <option value="shop1">${sect.shop1}</option>
                <option value="shop2">${sect.shop2}</option>
                <option value="shared">${sect.shared}</option>
                <option value="section4">${sect.section4}</option>
            `;
        } else {
            filterShop.innerHTML = `
                <option value="all">${lang === 'en' ? 'All Sections' : 'සියලුම කොටස්'}</option>
                <option value="shop1">${sect.shop1}</option>
                <option value="shop2">${sect.shop2}</option>
                <option value="shared">${sect.shared}</option>
            `;
        }
        if ([...filterShop.options].some(opt => opt.value === val)) {
            filterShop.value = val;
        } else {
            filterShop.value = 'all';
        }
    }
}

function selectProject(projectId) {
    state.activeProjectId = projectId;
    
    const activeProj = getActiveProject();
    state.expenses = activeProj.expenses || [];
    state.payments = activeProj.payments || [];
    state.drawings = activeProj.drawings || [];
    state.budget = activeProj.budget !== undefined ? activeProj.budget : 3000000.00;
    state.notes = activeProj.notes || "";
    
    const select = document.getElementById('project-select');
    if (select) select.value = state.activeProjectId;
    
    const textarea = document.getElementById('project-notepad-textarea');
    if (textarea) textarea.value = state.notes;
    
    const renameInput = document.getElementById('project-rename-input');
    if (renameInput) renameInput.value = activeProj.name;
    
    resetExpenseForm();
    resetPaymentForm();
    
    updateShopMap();
    populateAllocationDropdown();
    updateUI();
    
    localStorage.setItem('kapuwatta_project_state', JSON.stringify(state));
}

let notepadSaveTimeout = null;
function handleNotepadInput() {
    const textarea = document.getElementById('project-notepad-textarea');
    const status = document.getElementById('notepad-status');
    const lang = state.language;
    
    if (!textarea || !status) return;
    
    status.textContent = lang === 'en' ? 'Saving...' : 'සුරකිමින්...';
    status.style.opacity = '1';
    
    if (notepadSaveTimeout) clearTimeout(notepadSaveTimeout);
    
    notepadSaveTimeout = setTimeout(() => {
        state.notes = textarea.value;
        const activeProj = getActiveProject();
        if (activeProj) {
            activeProj.notes = state.notes;
        }
        localStorage.setItem('kapuwatta_project_state', JSON.stringify(state));
        
        status.textContent = lang === 'en' ? 'Saved' : 'සුරකින ලදී';
        setTimeout(() => {
            status.style.opacity = '0.5';
        }, 1500);
    }, 600);
}

function initProjectWorkspace() {
    const select = document.getElementById('project-select');
    if (select) {
        select.innerHTML = '';
        state.projects.forEach(p => {
            const opt = document.createElement('option');
            opt.value = p.id;
            opt.textContent = getTranslatedProjectName(p.name, state.language);
            select.appendChild(opt);
        });
        select.value = state.activeProjectId;
        
        select.addEventListener('change', function() {
            selectProject(this.value);
        });
    }

    const manageBtn = document.getElementById('btn-manage-projects');
    if (manageBtn) {
        manageBtn.addEventListener('click', () => {
            const modal = document.getElementById('project-manager-modal');
            const renameInput = document.getElementById('project-rename-input');
            const activeProj = getActiveProject();
            if (renameInput && activeProj) {
                renameInput.value = activeProj.name;
            }
            if (modal) modal.classList.add('active');
        });
    }

    const createForm = document.getElementById('project-create-form');
    if (createForm) {
        createForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const nameInput = document.getElementById('project-create-name');
            const typeSelect = document.getElementById('project-create-type');
            if (!nameInput || !typeSelect) return;
            
            const newProj = {
                id: 'proj-' + Date.now(),
                name: nameInput.value.trim(),
                type: typeSelect.value,
                budget: 0,
                expenses: [],
                payments: [],
                drawings: getDefaultDrawings(),
                notes: ""
            };
            
            state.projects.push(newProj);
            state.activeProjectId = newProj.id;
            
            if (select) {
                const opt = document.createElement('option');
                opt.value = newProj.id;
                opt.textContent = newProj.name;
                select.appendChild(opt);
            }
            
            selectProject(newProj.id);
            
            nameInput.value = '';
            document.getElementById('project-manager-modal').classList.remove('active');
        });
    }

    const renameBtn = document.getElementById('btn-project-rename');
    const renameInput = document.getElementById('project-rename-input');
    if (renameBtn && renameInput) {
        renameBtn.addEventListener('click', () => {
            const newName = renameInput.value.trim();
            const lang = state.language;
            if (!newName) {
                alert(lang === 'en' ? "Please enter a valid project name." : "කරුණාකර නිවැරදි ව්‍යාපෘති නමක් ඇතුළත් කරන්න.");
                return;
            }
            const activeProj = getActiveProject();
            if (activeProj) {
                activeProj.name = newName;
                saveState();
                
                if (select) {
                    const opt = select.querySelector(`option[value="${activeProj.id}"]`);
                    if (opt) opt.textContent = newName;
                }
                
                document.getElementById('project-manager-modal').classList.remove('active');
            }
        });
    }

    const deleteBtn = document.getElementById('btn-project-delete');
    if (deleteBtn) {
        deleteBtn.addEventListener('click', () => {
            const lang = state.language;
            if (state.projects.length <= 1) {
                alert(lang === 'en' 
                    ? "Cannot delete the only project. Create another project first." 
                    : "පවතින එකම ව්‍යාපෘතිය මකා දැමිය නොහැක. පළමුව වෙනත් ව්‍යාපෘතියක් සාදන්න.");
                return;
            }
            
            const activeProj = getActiveProject();
            const confirmMsg = lang === 'en'
                ? `Are you sure you want to delete the project "${activeProj.name}"? All associated budget, expenses, payments, and notes will be permanently lost.`
                : `ඔබට "${activeProj.name}" ව්‍යාපෘතිය මකා දැමීමට විශ්වාසද? මෙයට අදාළ අයවැය, වියදම්, ගෙවීම් සහ සටහන් සියල්ල සදහටම මැකී යනු ඇත.`;
            
            if (confirm(confirmMsg)) {
                const nextActiveProj = state.projects.find(p => p.id !== activeProj.id);
                state.projects = state.projects.filter(p => p.id !== activeProj.id);
                
                if (select) {
                    const opt = select.querySelector(`option[value="${activeProj.id}"]`);
                    if (opt) opt.remove();
                }
                
                selectProject(nextActiveProj.id);
                document.getElementById('project-manager-modal').classList.remove('active');
            }
        });
    }

    const notepadTextarea = document.getElementById('project-notepad-textarea');
    if (notepadTextarea) {
        notepadTextarea.value = state.notes;
        notepadTextarea.addEventListener('input', handleNotepadInput);
    }
    
    const saveNotesBtn = document.getElementById('btn-save-notes');
    if (saveNotesBtn) {
        saveNotesBtn.addEventListener('click', () => {
            if (notepadTextarea) {
                state.notes = notepadTextarea.value;
                saveState();
                const status = document.getElementById('notepad-status');
                const lang = state.language;
                if (status) {
                    status.textContent = lang === 'en' ? 'Saved' : 'සුරකින ලදී';
                    status.style.opacity = '1';
                    setTimeout(() => { status.style.opacity = '0.5'; }, 1500);
                }
            }
        });
    }
    
    selectProject(state.activeProjectId);
}

// --- INITIALIZE APPLICATION ---
window.addEventListener('DOMContentLoaded', () => {
    loadState();
    initProjectWorkspace();
    
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('expense-date').value = today;
    document.getElementById('payment-date').value = today;
    
    initCanvasDrawing();
    initTemplateGenerator(); // Init Blueprint Template Generator
    initBudgetManager(); // Init Project Budget Manager
});
