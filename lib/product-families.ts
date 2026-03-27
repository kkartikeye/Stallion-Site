export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductDetail = {
  name: string;
  description: string;
  specs: ProductSpec[];
  imageSrc?: string;
  imageAlt?: string;
};

export type ProductFamily = {
  slug: string;
  eyebrow: string;
  title: string;
  overviewTitle: string;
  heroDescription: string;
  overviewDescription: string;
  body: string[];
  heroImageSrc: string;
  heroLegend: string;
  gallery: Array<{
    src: string;
    alt: string;
    legend: string;
  }>;
  highlights: ProductSpec[];
  representativeParts: string[];
  details: ProductDetail[];
};

export const productFamilies: ProductFamily[] = [
  {
    slug: "steering-systems",
    eyebrow: "Steering Systems",
    title: "Steering columns, spindles, arms, and related steering-side components",
    overviewTitle: "Steering systems for truck, bus, and heavy-duty vehicle programs.",
    heroDescription:
      "Representative steering-side components across steering columns, arms, tubes, and related heavy-duty vehicle parts.",
    overviewDescription:
      "This family covers steering-side assemblies and machined parts used in truck and bus applications, including column assemblies, steering arms, turning tubes, and related program-specific components.",
    body: [
      "The steering range is centered on mechanical steering-side parts made for heavy-duty use, with representative products spanning column assemblies, steering arms, turning tubes, and spindle-related components.",
      "It is the kind of family where buyers usually care about fit, durability, finish quality, and repeat production support rather than one-off catalog ordering. That makes a grouped family view more useful than isolated product listings.",
    ],
    heroImageSrc: "/images/Steering-Column-Assemblies..jpg",
    heroLegend: "Steering Column Assemblies",
    gallery: [
      {
        src: "/images/Black-Steering-Column-Assembly..jpg",
        alt: "Black steering column assembly",
        legend: "Black Steering Column",
      },
      {
        src: "/images/Steering-Spindles-Tata-Vehicles..jpg",
        alt: "Steering spindles for Tata vehicles",
        legend: "Steering Spindles",
      },
      {
        src: "/images/Automotive-Steering-Arms..jpg",
        alt: "Automotive steering arms",
        legend: "Steering Arms",
      },
    ],
    highlights: [
      { label: "Applications", value: "Truck and bus steering systems" },
      { label: "Representative parts", value: "Columns, spindles, arms, turning tubes" },
      { label: "Typical materials", value: "Alloy steel, mild steel, stainless steel" },
      { label: "Supply fit", value: "Repeat OEM and program-led production" },
    ],
    representativeParts: [
      "Steering Column Assemblies",
      "Black Steering Column Assembly",
      "1.5 kg Steering Column Assemblies",
      "Steering Spindles for Tata vehicles",
      "Automotive Steering Arms",
      "Turning Tubes",
    ],
    details: [
      {
        name: "Black Steering Column Assembly",
        description:
          "A heavy-duty steering-column assembly suited to mechanical steering applications where polished finish and stainless-steel construction are preferred.",
        imageSrc: "/images/Black-Steering-Column-Assembly..jpg",
        imageAlt: "Black steering column assembly",
        specs: [
          { label: "Material", value: "Stainless steel" },
          { label: "Surface", value: "Polished" },
          { label: "Vehicle type", value: "Heavy-duty vehicle" },
          { label: "System", value: "Mechanical" },
        ],
      },
      {
        name: "1.5 kg Steering Column Assemblies",
        description:
          "A bus and truck steering-column variant built in mild steel, with a 1.5 kg weight profile and polished finish for heavy-duty applications.",
        imageSrc: "/images/1-5kg-Steering-Column-Assemblies..jpg",
        imageAlt: "1.5 kg steering column assemblies",
        specs: [
          { label: "Application", value: "Bus and truck" },
          { label: "Material", value: "Mild steel" },
          { label: "Finish", value: "Polished" },
          { label: "Weight", value: "1.5 kg" },
        ],
      },
      {
        name: "Steering Column Assemblies",
        description:
          "A repeat-production steering-column product family for truck and bus programs, centered on mechanical operation and alloy-steel construction.",
        imageSrc: "/images/Steering-Column-Assemblies..jpg",
        imageAlt: "Steering column assemblies",
        specs: [
          { label: "Application", value: "Bus and truck" },
          { label: "Material", value: "Alloy steel" },
          { label: "Part type", value: "Steering column" },
          { label: "Vehicle type", value: "Heavy-duty vehicle" },
        ],
      },
      {
        name: "Steering Spindles for Tata Vehicles",
        description:
          "A steering-side spindle component associated with Tata vehicle applications, suited to steering-system programs that need customer- or vehicle-specific parts.",
        imageSrc: "/images/Steering-Spindles-Tata-Vehicles..jpg",
        imageAlt: "Steering spindles for Tata vehicles",
        specs: [
          { label: "Application", value: "Tata vehicle steering systems" },
          { label: "Part type", value: "Steering spindle" },
          { label: "Production fit", value: "Program-specific supply" },
          { label: "Support model", value: "Drawing-led manufacturing" },
        ],
      },
      {
        name: "Automotive Steering Arms",
        description:
          "Steering-arm components for heavy-duty automotive use, with steel construction and powder-coated finish.",
        imageSrc: "/images/Automotive-Steering-Arms..jpg",
        imageAlt: "Automotive steering arms",
        specs: [
          { label: "Material", value: "Steel" },
          { label: "Surface", value: "Powder coated" },
          { label: "Application", value: "Automotive industry" },
          { label: "Vehicle type", value: "Heavy-duty vehicle" },
        ],
      },
    ],
  },
  {
    slug: "lever-and-pedal-systems",
    eyebrow: "Lever And Pedal Systems",
    title: "Shift, clutch, and pedal-side parts for heavy-duty vehicle control systems",
    overviewTitle: "Lever systems for shifting, clutch actuation, and pedal-side control.",
    heroDescription:
      "Representative lever-side products across gear shifting, clutch yokes, pedal levers, and related heavy-duty vehicle control parts.",
    overviewDescription:
      "This family reflects Stallion’s legacy range of gear-shifting levers, clutch levers, yokes, and pedal-side components used in truck, bus, and other automotive applications.",
    body: [
      "The lever family is useful to read as one group because the products support related vehicle-side functions such as shifting, clutch linkage, and pedal movement.",
      "For buyers, the value is not just the individual lever but the ability to support repeated production across linked control-side parts with the right material, finish, and assembly fit.",
    ],
    heroImageSrc: "/images/Black-Gear-Shift-Lever..jpg",
    heroLegend: "Lever Systems",
    gallery: [
      {
        src: "/images/Black-Gear-Shift-Lever..jpg",
        alt: "Black gear shift lever",
        legend: "Shift Lever",
      },
      {
        src: "/images/Clutch-Pedal-Levers..jpg",
        alt: "Clutch pedal levers",
        legend: "Pedal Levers",
      },
      {
        src: "/images/clutch-brake-pedal.png",
        alt: "Clutch brake pedal assembly",
        legend: "Pedal Assembly",
      },
    ],
    highlights: [
      { label: "Applications", value: "Gear shifting and pedal actuation" },
      { label: "Representative parts", value: "Shift levers, lock nuts, pedal levers, yokes" },
      { label: "Typical materials", value: "Stainless steel and alloy steel" },
      { label: "Production fit", value: "Batch and repeat supply requirements" },
    ],
    representativeParts: [
      "Brake Clutch Lever Set",
      "Gear Shifting Levers",
      "Black Gear Shift Lever",
      "Clutch Yokes Lever",
      "Clutch Pedal Levers",
      "Gear Shifting Levers Lock Nuts",
    ],
    details: [
      {
        name: "Brake Clutch Lever Set",
        description:
          "A stainless-steel lever set built for truck and bus applications where coated finish and heavier lever-side hardware are required.",
        imageSrc: "/images/Brake-Clutch-Lever-Set..jpg",
        imageAlt: "Brake clutch lever set",
        specs: [
          { label: "Application", value: "Trucks and buses" },
          { label: "Material", value: "Stainless steel" },
          { label: "Surface", value: "Coated" },
          { label: "Weight", value: "3 kg" },
        ],
      },
      {
        name: "Gear Shifting Levers",
        description:
          "Powder-coated stainless-steel shifting levers for automotive applications, designed for lubricated mechanical operation.",
        imageSrc: "/images/Gear-Shifting-Levers..jpg",
        imageAlt: "Gear shifting levers",
        specs: [
          { label: "Application", value: "Automobile industry" },
          { label: "Material", value: "Stainless steel" },
          { label: "Surface", value: "Powder coated" },
          { label: "Lubrication", value: "Oil or grease" },
        ],
      },
      {
        name: "Clutch Yokes Lever",
        description:
          "A polished alloy-steel yoke lever suited to automotive clutch-side linkage requirements with oil or grease lubrication.",
        imageSrc: "/images/Clutch-Yokes-Lever..jpg",
        imageAlt: "Clutch yokes lever",
        specs: [
          { label: "Application", value: "Automobile industry" },
          { label: "Material", value: "Alloy steel" },
          { label: "Surface", value: "Polished" },
          { label: "Lubrication", value: "Oil or grease" },
        ],
      },
      {
        name: "Clutch Pedal Levers",
        description:
          "Pedal-side lever components for automotive use, built in stainless steel with polished finish and a 2 kg weight profile.",
        imageSrc: "/images/Clutch-Pedal-Levers..jpg",
        imageAlt: "Clutch pedal levers",
        specs: [
          { label: "Application", value: "Automobile industry" },
          { label: "Material", value: "Stainless steel" },
          { label: "Surface", value: "Polished" },
          { label: "Weight", value: "2 kg" },
        ],
      },
    ],
  },
  {
    slug: "crown-wheels-and-gears",
    eyebrow: "Driveline Components",
    title: "Machined crown wheels, gear blanks, and related drivetrain-side parts",
    overviewTitle: "Driveline-side components for blanks, shafts, and finished gear-related parts.",
    heroDescription:
      "Representative drivetrain-side parts including machined crown wheels, gear blanks, shafts, spline-rolled parts, and precision turned components.",
    overviewDescription:
      "This family groups together crown-wheel and gear-side parts that call for controlled machining, grinding, hardening, finishing attention, and repeat manufacturing support.",
    body: [
      "The crown-wheel and gear-side range is naturally more technical than some of the assembly-led product families, so the emphasis here is on material, finish, and machining fit.",
      "For sourcing teams, it is often more useful to view this as a driveline-family capability rather than a set of isolated items, especially when requirements evolve from blanks to machined or finished parts.",
    ],
    heroImageSrc: "/images/finished crown wheel.png",
    heroLegend: "Finished Crown Wheels",
    gallery: [
      {
        src: "/images/finished crown wheel.png",
        alt: "Finished crown wheels",
        legend: "Finished Crown Wheels",
      },
      {
        src: "/images/gear-blanks.png",
        alt: "Round gear blanks",
        legend: "Gear Blanks",
      },
    ],
    highlights: [
      { label: "Applications", value: "Driveline and transmission-side programs" },
      { label: "Representative parts", value: "Crown wheels, gear blanks, gear shafts, rolled parts" },
      { label: "Typical materials", value: "Steel, alloy steel, and turned blank stock" },
      { label: "Capability fit", value: "Machining, grinding, hardening, and repeat supply" },
    ],
    representativeParts: [
      "Machined Crown Wheel",
      "Round Gear Blanks",
      "Gear Shafts",
      "Pinion Ground Shaft",
      "Spline Rolled Components",
      "Precision Turned Components",
    ],
    details: [
      {
        name: "Machined Crown Wheel",
        description:
          "A polished stainless-steel crown wheel for mechanical vehicle-engine applications where dimensional consistency and wear resistance matter.",
        imageSrc: "/images/Machined-Crown-Wheel..jpg",
        imageAlt: "Machined crown wheel",
        specs: [
          { label: "Application", value: "Vehicle engine" },
          { label: "Material", value: "Stainless steel" },
          { label: "Surface", value: "Polished" },
          { label: "Size", value: "2 inch pipe size" },
        ],
      },
      {
        name: "Round Gear Blanks",
        description:
          "Mild-steel gear blanks intended for downstream automotive applications, supplied with coated finish and standard-size profile.",
        imageSrc: "/images/gear-blanks.png",
        imageAlt: "Round gear blanks",
        specs: [
          { label: "Application", value: "Automobile industry" },
          { label: "Material", value: "Mild steel" },
          { label: "Surface", value: "Coated" },
          { label: "Vehicle type", value: "4 wheeler" },
        ],
      },
      {
        name: "Pinion Ground Shaft",
        description:
          "A polished alloy shaft for four-wheeler mechanical use, suited to programs requiring defined shaft size and finishing control.",
        imageSrc: "/images/Pinion-Ground-Shaft..jpg",
        imageAlt: "Pinion ground shaft",
        specs: [
          { label: "Part type", value: "Ground shaft" },
          { label: "Material", value: "Alloy" },
          { label: "Surface", value: "Polished" },
          { label: "Size", value: "85 mm" },
        ],
      },
      {
        name: "Spline Rolled Components",
        description:
          "Rolled steel components for automotive applications where polished finish and repeatable spline-form production are required.",
        imageSrc: "/images/Spline-Rolled-Components..jpg",
        imageAlt: "Spline rolled components",
        specs: [
          { label: "Part type", value: "Spline rolled" },
          { label: "Material", value: "Steel" },
          { label: "Surface", value: "Polished" },
          { label: "Application", value: "Automotive industry" },
        ],
      },
      {
        name: "Gear Shafts",
        description:
          "Gear shafts and related driveline shafts produced for transmission-side and mechanical programs where machining control, finishing discipline, and repeatability matter.",
        specs: [
          { label: "Part type", value: "Gear shaft" },
          { label: "Application", value: "Driveline and transmission-side parts" },
          { label: "Material", value: "Alloy steel" },
          { label: "Production fit", value: "Drawing-led repeat supply" },
        ],
      },
    ],
  },
  {
    slug: "clutch-housings-and-actuation",
    eyebrow: "Clutch And Housing Parts",
    title: "Clutch housings, release yokes, and actuation-side components",
    overviewTitle: "Clutch housings and actuation-side parts for heavy-duty systems.",
    heroDescription:
      "Representative clutch-side parts including housings, yokes, and related heavy-duty vehicle actuation components.",
    overviewDescription:
      "This product family covers clutch housings and associated actuation parts used in truck, bus, and heavy-duty mechanical systems.",
    body: [
      "The clutch-side range brings together housing components and actuation parts that often sit within the same sourcing conversation for truck and heavy-duty vehicle programs.",
      "Grouping them this way makes it easier to present the application fit, material choices, and manufacturing style without overloading the main products page with one long component stack.",
    ],
    heroImageSrc: "/images/engine-clutch-housing.png",
    heroLegend: "Clutch Housing Components",
    gallery: [
      {
        src: "/images/engine-clutch-housing.png",
        alt: "Engine clutch housing",
        legend: "Clutch Housing",
      },
      {
        src: "/images/Clutch-Release-Yoke..jpg",
        alt: "Clutch release yoke",
        legend: "Release Yoke",
      },
      {
        src: "/images/clutch-brake-pedal.png",
        alt: "Clutch brake pedal assembly",
        legend: "Pedal Assembly",
      },
    ],
    highlights: [
      { label: "Applications", value: "Truck clutch and actuation systems" },
      { label: "Representative parts", value: "Housings, yokes, and pedal assemblies" },
      { label: "Typical materials", value: "Alloy steel castings and steel parts" },
      { label: "Surface options", value: "Powder-coated and polished finishes" },
    ],
    representativeParts: [
      "Engine Clutch Housing",
      "Cross Shaft Clutch Housing",
      "Clutch Release Yoke",
      "Clutch Break Pedal Assembly",
    ],
    details: [
      {
        name: "Engine Clutch Housing",
        description:
          "A powder-coated clutch-housing component for truck and bus use, built from alloy-steel casting for mechanical systems.",
        imageSrc: "/images/engine-clutch-housing.png",
        imageAlt: "Engine clutch housing",
        specs: [
          { label: "Application", value: "Trucks and buses" },
          { label: "Material", value: "Alloy steel casting" },
          { label: "Surface", value: "Powder coated" },
          { label: "Vehicle type", value: "4 wheeler" },
        ],
      },
      {
        name: "Clutch Release Yoke",
        description:
          "A black steel release yoke for heavy-duty clutch actuation, suited to mechanical automotive applications.",
        imageSrc: "/images/Clutch-Release-Yoke..jpg",
        imageAlt: "Clutch release yoke",
        specs: [
          { label: "Part type", value: "Clutch release yoke" },
          { label: "Material", value: "Steel" },
          { label: "Color", value: "Black" },
          { label: "Vehicle type", value: "Heavy-duty vehicle" },
        ],
      },
      {
        name: "Cross Shaft Clutch Housing",
        description:
          "A powder-coated alloy-steel clutch housing for truck-clutch applications, suited to heavier-duty mechanical load conditions.",
        imageSrc: "/images/Cross-Shaft-Clutch-Housing..jpg",
        imageAlt: "Cross shaft clutch housing",
        specs: [
          { label: "Application", value: "Truck clutches" },
          { label: "Material", value: "Alloy steel" },
          { label: "Surface", value: "Powder coated" },
          { label: "Load capacity", value: "50 tonne" },
        ],
      },
    ],
  },
  {
    slug: "hubs-pulleys-and-support-parts",
    eyebrow: "Running And Support Parts",
    title: "Wheel hubs, brake drums, pulleys, hinges, and related support components",
    overviewTitle: "Support components for running systems, engines, and vehicle-side hardware.",
    heroDescription:
      "Representative support components including wheel hubs, brake drums, pulleys, hinges, track rollers, and bracket-type heavy-duty vehicle parts.",
    overviewDescription:
      "Beyond assemblies and lever systems, the product range also includes a wider set of support components used across heavy-duty vehicle, suspension-side, and engineering applications.",
    body: [
      "This family works best as a grouped support-components page because the parts are functionally different but still sit within the same broader sourcing context for commercial vehicle programs.",
      "It is also a better place to show image-led variety, since these parts often tell their story visually through form, scale, and end use.",
    ],
    heroImageSrc: "/images/Cast-Iron-Diesel-Engine-Pulley..jpg",
    heroLegend: "Support Components",
    gallery: [
      {
        src: "/images/Truck-Wheel-Hubs..jpg",
        alt: "Truck wheel hubs",
        legend: "Truck Wheel Hubs",
      },
      {
        src: "/images/Truck-Brake-Drum..jpg",
        alt: "Truck brake drum",
        legend: "Brake Drum",
      },
      {
        src: "/images/Cast-Iron-Diesel-Engine-Pulley..jpg",
        alt: "Cast iron diesel engine pulley",
        legend: "Engine Pulley",
      },
    ],
    highlights: [
      { label: "Applications", value: "Heavy-duty vehicle running systems" },
      { label: "Representative parts", value: "Hubs, drums, pulleys, rollers, and brackets" },
      { label: "Typical materials", value: "Cast iron, ductile iron, steel, and formed parts" },
      { label: "Vehicle fit", value: "Truck, bus, and engineering applications" },
    ],
    representativeParts: [
      "Truck Wheel Hubs",
      "Truck Brake Drum",
      "Cast Iron Diesel Engine Pulley",
      "Track Rollers",
      "Spring Hanger Brackets",
      "Automobile Door Hinge",
      "Engine Mounting Arms Steering Arms",
    ],
    details: [
      {
        name: "Truck Wheel Hubs",
        description:
          "Heavy-duty wheel-hub components in ductile iron, produced for automotive applications with polished finish and standard-size fitment.",
        imageSrc: "/images/Truck-Wheel-Hubs..jpg",
        imageAlt: "Truck wheel hubs",
        specs: [
          { label: "Part type", value: "Wheel hubs" },
          { label: "Material", value: "Ductile iron" },
          { label: "Surface", value: "Polished" },
          { label: "Vehicle type", value: "Heavy-duty vehicle" },
        ],
      },
      {
        name: "Truck Brake Drum",
        description:
          "Cast-iron brake drums for bus and heavy-duty truck programs, with a defined 16.5-inch size and polished finish.",
        imageSrc: "/images/Truck-Brake-Drum..jpg",
        imageAlt: "Truck brake drum",
        specs: [
          { label: "Application", value: "Bus and heavy-duty truck" },
          { label: "Material", value: "Cast iron" },
          { label: "Size", value: "16.5 inch" },
          { label: "Surface", value: "Polished" },
        ],
      },
      {
        name: "Cast Iron Diesel Engine Pulley",
        description:
          "A powder-coated cast-iron pulley for vehicle-engine applications, suited to heavy-duty use and defined dimensional fitment.",
        imageSrc: "/images/Cast-Iron-Diesel-Engine-Pulley..jpg",
        imageAlt: "Cast iron diesel engine pulley",
        specs: [
          { label: "Application", value: "Vehicle engine" },
          { label: "Material", value: "Cast iron" },
          { label: "Size", value: "150 mm" },
          { label: "Load capacity", value: "1 tonne" },
        ],
      },
      {
        name: "Automobile Door Hinge",
        description:
          "A color-coated iron hinge for bus applications, sized at 4x5 inch for vehicle-door-side hardware requirements.",
        imageSrc: "/images/Automobile-Door-Hinge..jpg",
        imageAlt: "Automobile door hinge",
        specs: [
          { label: "Application", value: "Buses" },
          { label: "Material", value: "Iron" },
          { label: "Surface", value: "Color coated" },
          { label: "Size", value: "4 x 5 inch" },
        ],
      },
      {
        name: "Track Rollers",
        description:
          "Track rollers for automotive and engineering use where controlled machining, wear resistance, and dependable repeat production are important.",
        specs: [
          { label: "Part type", value: "Track roller" },
          { label: "Application", value: "Automotive and engineering programs" },
          { label: "Material", value: "Steel" },
          { label: "Production fit", value: "Machined repeat supply" },
        ],
      },
      {
        name: "Spring Hanger Brackets",
        description:
          "Machined and fabricated spring hanger brackets for suspension-side and support-component programs that call for dimensional consistency and batch production support.",
        specs: [
          { label: "Part type", value: "Spring hanger bracket" },
          { label: "Application", value: "Heavy-duty vehicle suspension-side parts" },
          { label: "Material", value: "Steel" },
          { label: "Production fit", value: "Fabricated and machined supply" },
        ],
      },
    ],
  },
  {
    slug: "cnc-machined-components",
    eyebrow: "CNC Machined Components",
    title: "Precision machined and turned parts for customer-specific production programs",
    overviewTitle: "CNC and turned components for drawing-led production requirements.",
    heroDescription:
      "Representative CNC-machined and turned components for automotive, engineering, and customer-specific production programs, including flanges, valve bodies, shafts, and precision turned parts.",
    overviewDescription:
      "This family focuses on CNC-machined and turned parts where material, finish, size range, tolerance expectations, and customer-specific machining requirements drive the manufacturing conversation.",
    body: [
      "The CNC page works best as its own family because the products are less about one common vehicle-side function and more about a manufacturing route: machining, turning, and customer-driven specification control.",
      "That makes it a good place to show both representative machined parts and the broader production model behind them.",
    ],
    heroImageSrc: "/images/machine-shop.png",
    heroLegend: "CNC Production",
    gallery: [
      {
        src: "/images/machine-shop.png",
        alt: "Machine shop",
        legend: "Machine Shop",
      },
      {
        src: "/images/spring-pins.png",
        alt: "Spring pins lever pins",
        legend: "Pins And Turned Parts",
      },
      {
        src: "/images/Turning-Tubes..jpg",
        alt: "Turning tubes",
        legend: "Turned Components",
      },
    ],
    highlights: [
      { label: "Applications", value: "Automotive, engineering, and OEM components" },
      { label: "Representative parts", value: "Machined parts, turned parts, flanges, valve bodies, shafts" },
      { label: "Size coverage", value: "Small parts through larger turned components" },
      { label: "Production fit", value: "Drawing-led machining and repeat supply" },
    ],
    representativeParts: [
      "CNC Machined Parts",
      "Precision Turned Components",
      "Machined Flanges",
      "Valve Bodies",
      "Stainless Steel Shafts",
      "CNC Machine Parts",
      "Cross Shaft Clutch Housing",
      "Spring Pins Lever Pins",
    ],
    details: [
      {
        name: "CNC Machined Parts",
        description:
          "Nickel-plated CNC machined parts in stainless steel for more demanding applications, including arms and armament-related components.",
        imageSrc: "/images/CNC-Machined-Parts..jpg",
        imageAlt: "CNC machined parts",
        specs: [
          { label: "Material", value: "Stainless steel" },
          { label: "Surface", value: "Nickel plating" },
          { label: "Application", value: "Arms and armaments" },
          { label: "CNC", value: "Yes" },
        ],
      },
      {
        name: "Precision Turned Components",
        description:
          "Round stainless-steel turned components used for gear blanks and other machined parts where polished finish and cylindrical geometry are required.",
        imageSrc: "/images/Precision-Turned-Components..jpg",
        imageAlt: "Precision turned components",
        specs: [
          { label: "Material", value: "Stainless steel" },
          { label: "Shape", value: "Round" },
          { label: "Surface", value: "Polishing" },
          { label: "Usage", value: "Gear blanks" },
        ],
      },
      {
        name: "CNC Machine Parts",
        description:
          "Polished stainless-steel CNC machine parts covering a wider size range for auto-part applications and customer-specific machining needs.",
        imageSrc: "/images/Cnc-Machine-Parts..jpg",
        imageAlt: "CNC machine parts",
        specs: [
          { label: "Material", value: "Stainless steel" },
          { label: "Surface", value: "Polishing" },
          { label: "Size range", value: "100-500 mm" },
          { label: "Application", value: "Auto parts" },
        ],
      },
      {
        name: "Spring Pins Lever Pins",
        description:
          "Pin-type automotive parts used in lever-side applications, with polished finish and mechanical operation for heavy-duty use.",
        imageSrc: "/images/spring-pins.png",
        imageAlt: "Spring pins lever pins",
        specs: [
          { label: "Part type", value: "Lever pins" },
          { label: "Surface", value: "Polished" },
          { label: "Application", value: "Automotive industry" },
          { label: "Vehicle type", value: "Heavy-duty vehicle" },
        ],
      },
      {
        name: "Machined Flanges",
        description:
          "Machined flanges for automotive and engineering assemblies where turning, facing, drilling, and dimensional consistency matter across repeat batches.",
        specs: [
          { label: "Part type", value: "Machined flange" },
          { label: "Application", value: "Automotive and engineering assemblies" },
          { label: "Support model", value: "Drawing-led machining" },
          { label: "Production fit", value: "Repeat supply" },
        ],
      },
      {
        name: "Valve Bodies",
        description:
          "Customer-specific valve bodies produced through high-tolerance machining for programs that depend on controlled geometry, machining accuracy, and specification conformity.",
        specs: [
          { label: "Part type", value: "Valve body" },
          { label: "Application", value: "Customer-specific machining programs" },
          { label: "Support model", value: "Drawing-led manufacturing" },
          { label: "CNC", value: "Yes" },
        ],
      },
      {
        name: "Stainless Steel Shafts",
        description:
          "Machined stainless-steel shafts for automotive and engineering use where finish quality, shaft geometry, and repeat dimensional control are important.",
        specs: [
          { label: "Part type", value: "Shaft" },
          { label: "Material", value: "Stainless steel" },
          { label: "Application", value: "Automotive and engineering programs" },
          { label: "Production fit", value: "Repeat machining" },
        ],
      },
    ],
  },
];

export function getProductFamily(slug: string) {
  return productFamilies.find((family) => family.slug === slug);
}

export function getProductSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getProductBySlugs(familySlug: string, productSlug: string) {
  const family = getProductFamily(familySlug);

  if (!family) {
    return null;
  }

  const product = family.details.find((item) => getProductSlug(item.name) === productSlug);

  if (!product) {
    return null;
  }

  return {
    family,
    product,
  };
}
