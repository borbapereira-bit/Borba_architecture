export type Project = {
  slug: string;
  name: string;
  location: string;
  statusLine: string; // e.g. "BUILT · 2024–2026"
  status: string;
  year: string;
  paragraphs: string[];
  facts: { label: string; value: string }[];
  heroImage: string;
  images: string[];
  featured: boolean; // whether to show on homepage
};

export const projects: Project[] = [
  {
    slug: "582-radcliffe",
    name: "582 Radcliffe",
    location: "Pacific Palisades, Los Angeles",
    statusLine: "SCHEMATIC DESIGN · 2025–2026",
    status: "Schematic Design",
    year: "2025–2026",
    paragraphs: [
      "Located in Pacific Palisades, the 582 Radcliffe project is conceived as a fire-reconstruction home that respects the original burned structure's footprint to support an expedited permitting path under special recovery ordinances. Within this compact footprint, the design preserves a generous backyard while adding a basement to replace the lost detached garage and provide space for utilities, storage, entertainment, and a guest suite.",
      "The plan unfolds gradually from the entry sequence, where a lower wood ceiling compresses the corridor before opening into the main living, dining, and kitchen area connected to the backyard. Upstairs, the primary suite opens to an ocean-view balcony with a reading nook and spa-like bathroom, complemented by two additional suites. Traditional Palisades materials — brick, stucco, metal roofing, and wood details — are reinterpreted through contemporary proportions, allowing the house to blend with its surroundings while keeping landscape and views central.",
    ],
    facts: [
      { label: "Type", value: "Single Family" },
      { label: "Area", value: "3,800 SF" },
      { label: "Program", value: "4 bd / 4.5 ba + JADU" },
      { label: "Floors", value: "3-Story" },
      { label: "Status", value: "Schematic Design" },
      { label: "Year", value: "2025–2026" },
    ],
    heroImage: "/images/RADCLIFFE_RENDER4.png",
    images: [
      "/images/RADCLIFFE_RENDER4.png",
      "/images/RADCLIFFE_RENDER3.png",
      "/images/RADCLIFFE_RENDER2.png",
    ],
    featured: true,
  },
  {
    slug: "3316-pearl",
    name: "3316 Pearl",
    location: "Santa Monica, California",
    statusLine: "BUILT · 2024–2026",
    status: "Built",
    year: "2024–2026",
    paragraphs: [
      "Built within the footprint of an existing detached garage, the 3316 Pearl ADU transforms a tight Santa Monica lot into a compact two-story residence with a strong indoor-outdoor connection. The exterior relates to the main house through white stucco, black-framed windows, and a restrained material palette, while the second floor introduces a modern white shake shingle as a subtle reference to East Coast coastal saltbox architecture, meaningful to the owners' personal history.",
      "The asymmetrical roof responds to two conditions: reducing the perceived volume beside the one-story main house and maintaining required clearance from existing overhead power lines. A formal entry faces the driveway, creating a compressed arrival sequence before the space expands into the main living area and opens through a 12-foot-wide bi-folding door to the lush backyard. Upstairs, vaulted ceilings, skylights, and carefully placed windows bring light, scale, and spatial richness to the compact plan.",
    ],
    facts: [
      { label: "Type", value: "Detached ADU" },
      { label: "Area", value: "1,000 SF" },
      { label: "Program", value: "2 bd / 1.5 ba" },
      { label: "Floors", value: "2-Story" },
      { label: "Status", value: "Built" },
      { label: "Year", value: "2024–2026" },
    ],
    heroImage: "/images/ADU_HERO.jpg",
    images: [
      "/images/ADU_HERO.jpg",
      "/images/ADU_EXTERIOR.jpg",
      "/images/ADU_INTERIOR.jpg",
    ],
    featured: true,
  },
  {
    slug: "campeche-796",
    name: "Campeche 796",
    location: "Florianópolis, Brazil",
    statusLine: "BUILT · 2014–2020",
    status: "Built",
    year: "2014–2020",
    paragraphs: [
      "Campeche 796 is a six-unit townhome development in Florianópolis, Brazil, organized across two neighboring lots. Combining the properties allowed for a wider shared driveway at the center of the site, creating more generous spacing between the townhomes that flank it. Although dense in its planning, the project avoids feeling compressed.",
      "The site slopes down toward the rear, and the townhomes follow the natural grade, minimizing extensive cut and fill. Each unit is arranged over three floors, with three bedrooms, two and a half bathrooms, a garage, and social spaces oriented toward both the shared driveway and exterior views. The box-like volumes are carefully scaled, broken down, and proportioned — a harmonious composition and a subtle nod to Brazilian modern architecture.",
    ],
    facts: [
      { label: "Type", value: "6 Townhomes" },
      { label: "Area", value: "6,840 SF" },
      { label: "Program", value: "3 bd / 2.5 ba per unit" },
      { label: "Floors", value: "3-Story" },
      { label: "Status", value: "Built" },
      { label: "Year", value: "2014–2020" },
    ],
    heroImage: "/images/CAMPECHE_HERO.jpg",
    images: [
      "/images/CAMPECHE_HERO.jpg",
      "/images/CAMPECHE_DRIVE.jpg",
      "/images/CAMPECHE_INT.jpg",
    ],
    featured: true,
  },
  {
    slug: "itaiande",
    name: "Itaiandé",
    location: "Aiuruoca, Minas Gerais, Brazil",
    statusLine: "SCHEMATIC DESIGN · 2019–2020",
    status: "Schematic Design",
    year: "2019–2020",
    paragraphs: [
      "A mountain cabin set on a steep site in the heart of Brazil. To minimize soil disturbance, the house is raised on piles, allowing the architecture to follow the terrain rather than reshape it. A central core contains the entry, kitchen, and dining area, while the living room sits four feet lower, opening toward expansive views, a balcony, and a suite to one side.",
      "A side deck creates an outdoor place for barbecues and cold evenings by the fire. Conceived as one of two similar houses on the lot, the design integrates interior and exterior spaces through framed views, exposed wood roof structure, and stucco walls — a rural architectural language shaped by regional and mid-century organic influences.",
    ],
    facts: [
      { label: "Type", value: "Single Family" },
      { label: "Area", value: "1,480 SF" },
      { label: "Program", value: "2 bd / 2.5 ba" },
      { label: "Floors", value: "Single-story" },
      { label: "Status", value: "Schematic Design" },
      { label: "Year", value: "2019–2020" },
    ],
    heroImage: "/images/ITAIANDE_RENDER2.png",
    images: [
      "/images/ITAIANDE_RENDER2.png",
      "/images/ITAIANDE_RENDER3.png",
      "/images/ITAIANDE_SECTION.png",
    ],
    featured: true,
  },
  {
    slug: "braga-48",
    name: "Braga 48",
    location: "São Paulo, Brazil",
    statusLine: "DESIGN DEVELOPMENT · 2019–2021",
    status: "Design Development",
    year: "2019–2021",
    paragraphs: [
      "Braga 48 is a multi-family high-rise in São Paulo conceived as a fully low-income housing project. Taking advantage of a special ordinance that does not require minimum parking stalls per unit, the design makes a 9-story building possible on a compact urban lot. The plan organizes the units around a vertical circulation core, distributing them across a broad 180-degree orientation to capture light, air, and existing views.",
      "The tower's exterior volume is shaped by setback restrictions, resulting in three interconnected masses. By emphasizing one volume while allowing the others to recede through material choices, the composition breaks down the scale of the building into a balanced urban form. Balconies with floor-to-ceiling sliding glass doors extend the living area outdoors, while dedicated mechanical zones keep condensers off the balconies and simplify maintenance.",
    ],
    facts: [
      { label: "Type", value: "High-rise Multi-family" },
      { label: "Area", value: "24,120 SF" },
      { label: "Program", value: "39 Micro-units · 312 SF avg." },
      { label: "Floors", value: "9-Story" },
      { label: "Status", value: "Design Development" },
      { label: "Year", value: "2019–2021" },
    ],
    heroImage: "/images/BRAGA_EXT.png",
    images: [
      "/images/BRAGA_HERO.png",
      "/images/BRAGA_EXT.png",
      "/images/BRAGA_INT.png",
      "/images/BRAGA_SITEPLAN.png",
      "/images/BRAGA_TYPFLOORPLAN.png",
    ],
    featured: false,
  },
  {
    slug: "houston-multifamily",
    name: "Houston Multi-Family",
    location: "Houston, Texas",
    statusLine: "BUILT · 2024–2026",
    status: "Built",
    year: "2024–2026",
    paragraphs: [
      "This multi-family reconstruction project in Houston involved the rebuilding of two residential buildings damaged by fire. Working within the limitations of the existing footprints and the surrounding building context, the design updates the original structures while preserving their relationship to the overall property. One building was reconfigured to add an additional bathroom, improving the functionality of the unit layout.",
      "The entry areas were redesigned to increase separation between buildings, becoming the main opportunity for architectural improvement. New stair configurations bring more daylight to the units and create a more generous exterior arrival space. The material palette follows the existing complex but is reinterpreted with a simpler, more contemporary language. Inside, vaulted ceilings on the upper floors create a greater sense of volume and spaciousness.",
    ],
    facts: [
      { label: "Type", value: "Multi-family" },
      { label: "Area", value: "20,750 SF" },
      { label: "Program", value: "24 units · 2 bd / 2 ba" },
      { label: "Floors", value: "2-Story · 2 Buildings" },
      { label: "Status", value: "Built" },
      { label: "Year", value: "2024–2026" },
    ],
    heroImage: "/images/HOUSTON_EXT.png",
    images: [
      "/images/HOUSTON_EXT.png",
      "/images/HOUSTON_INT.png",
      "/images/HOUSTON_PLAN1.png",
      "/images/HOUSTON_PLAN2.png",
    ],
    featured: false,
  },
  {
    slug: "639-w-6th-street",
    name: "639 W. 6th Street",
    location: "San Pedro, Los Angeles",
    statusLine: "DESIGN DEVELOPMENT · 2021–2022",
    status: "Design Development",
    year: "2021–2022",
    paragraphs: [
      "This mixed-use multi-family development is in San Pedro, Los Angeles. Taking advantage of the seven-foot grade difference between 6th Street and the rear alley, the project places two parking levels along the alley while preserving the commercial and pedestrian frontage at street level. Above the parking podium, amenity spaces and garden units create a transition to the four-story residential structure containing 39 units.",
      "The building was designed to allow either modular or conventional construction without altering the overall layout. To comply with the San Pedro CPIO ordinance, the ground-floor commercial component supports the required street activation. The restricted façade palette follows local requirements and references the red brick buildings of the nearby Arts District. Floor-to-ceiling glass doors and private balconies connect each unit to exterior space, light, air, and views.",
    ],
    facts: [
      { label: "Type", value: "Multi-family Mixed-use" },
      { label: "Area", value: "30,720 SF" },
      { label: "Program", value: "39 units + 1 Commercial" },
      { label: "Floors", value: "4-Story + 2-Story Podium" },
      { label: "Status", value: "Design Development" },
      { label: "Year", value: "2021–2022" },
    ],
    heroImage: "/images/SANPEDRO_EXT3.png",
    images: [
      "/images/SANPEDRO_EXT3.png",
      "/images/SANPEDRO_RENDER2.png",
      "/images/SANPEDRO_PLAN1.png",
    ],
    featured: false,
  },
  {
    slug: "rochdale",
    name: "Rochdale",
    location: "Osasco, Brazil",
    statusLine: "SCHEMATIC DESIGN · 2015–2016",
    status: "Schematic Design",
    year: "2015–2016",
    paragraphs: [
      "Rochdale is a neighborhood in Osasco, Brazil, shaped by the river that crosses the area. Along its margins, irregular occupation has created unsafe living conditions, with recurring floods, fragile infrastructure, and limited public space. The project proposes the redevelopment of the riverfront area, reconnecting it to the existing urban grid while improving the connection between both sides of the river.",
      "Guided by principles of social inclusion and anti-displacement, the urban design preserves existing houses in good condition, reorganizes narrow streets and alleys, and introduces public spaces that function as a shared backyard for the community. New civic amenities, including health care facilities and public sports areas, are integrated into the plan. A new riverside avenue, supported by public transportation and bike paths, strengthens mobility and connects the neighborhood to other parts of the city.",
    ],
    facts: [
      { label: "Type", value: "Urban Design" },
      { label: "Area", value: "16 Acres" },
      { label: "Program", value: "Community Masterplan" },
      { label: "Floors", value: "Urban Scale" },
      { label: "Status", value: "Schematic Design" },
      { label: "Year", value: "2015–2016" },
    ],
    heroImage: "/images/ROCHDALE_AERIAL.png",
    images: [
      "/images/ROCHDALE_AERIAL.png",
      "/images/ROCHDALE_SPORT.png",
      "/images/ROCHDALE_SPORT2.png",
      "/images/ROCHDALE_SPORT5.png",
      "/images/ROCHDALE_PLAN3.png",
    ],
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
