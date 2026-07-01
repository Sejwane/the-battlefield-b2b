// data/products.ts

export interface Product {
  id: string;
  brand: string;
  title: string;
  priceExVat: number;
  image: string;
  category: string;
  isBulkAvailable: boolean;
  isGiftingAvailable: boolean;
  specifications: string[];
}

export const appleProducts: Product[] = [
  {
    id: "apple-mbp-16",
    brand: "Apple",
    title: "MacBook Pro 16-inch (M3 Max)",
    priceExVat: 79999.00,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    category: "Laptops",
    isBulkAvailable: true,
    isGiftingAvailable: true,
    specifications: ["M3 Max Chip", "36GB Unified Memory", "1TB SSD", "Liquid Retina XDR display"]
  },
  {
    id: "apple-ipad-pro",
    brand: "Apple",
    title: "iPad Pro 12.9-inch (Wi-Fi + Cellular)",
    priceExVat: 28999.00,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    category: "Tablets",
    isBulkAvailable: true,
    isGiftingAvailable: true,
    specifications: ["M2 Chip", "256GB Storage", "5G Cellular", "Supports Apple Pencil"]
  },
  {
    id: "apple-imac-24",
    brand: "Apple",
    title: "iMac 24-inch Desktop",
    priceExVat: 34500.00,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    category: "Desktops",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["M3 Chip", "8-core CPU", "10-core GPU", "8GB Unified Memory", "256GB SSD"]
  },
  {
    id: "apple-iphone-15-pro",
    brand: "Apple",
    title: "iPhone 15 Pro Max (Titanium)",
    priceExVat: 29999.00,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80",
    category: "Mobile",
    isBulkAvailable: true,
    isGiftingAvailable: true,
    specifications: ["A17 Pro chip", "Natural Titanium", "256GB Storage", "Pro camera system"]
  }
];


export const hpProducts: Product[] = [
  {
    id: "hp-elitebook-840",
    brand: "HP",
    title: "HP EliteBook 840 G9 Enterprise",
    priceExVat: 32500.00,
    image: "https://images.unsplash.com/photo-1527443195645-1133f7f28990?auto=format&fit=crop&w=800&q=80",
    category: "Laptops",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["Intel Core i7 12th Gen", "16GB RAM", "512GB SSD", "Windows 11 Pro"]
  },
  {
    id: "hp-zbook-firefly",
    brand: "HP",
    title: "HP ZBook Firefly 14 inch G10",
    priceExVat: 41999.00,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
    category: "Workstations",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["Intel Core i7 13th Gen", "32GB RAM", "1TB NVMe", "NVIDIA RTX A500"]
  },
  {
    id: "hp-prodesk-400",
    brand: "HP",
    title: "HP ProDesk 400 G7 Microtower",
    priceExVat: 14500.00,
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800&q=80",
    category: "Desktops",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["Intel Core i5 10th Gen", "8GB RAM", "256GB SSD", "Includes Keyboard & Mouse"]
  }
];

export const lenovoProducts: Product[] = [
  {
    id: "lenovo-thinkpad-x1",
    brand: "Lenovo",
    title: "ThinkPad X1 Carbon Gen 11",
    priceExVat: 38999.00,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80", // using a placeholder laptop
    category: "Laptops",
    isBulkAvailable: true,
    isGiftingAvailable: true,
    specifications: ["Intel Core i7 13th Gen", "32GB LPDDR5", "1TB PCIe SSD", "14-inch WUXGA"]
  },
  {
    id: "lenovo-thinkcentre-tiny",
    brand: "Lenovo",
    title: "ThinkCentre M70q Gen 3 Tiny",
    priceExVat: 12500.00,
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800&q=80", // using a placeholder desktop
    category: "Desktops",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["Intel Core i5 12th Gen", "16GB RAM", "512GB SSD", "Ultra-compact 1L chassis"]
  },
  {
    id: "lenovo-thinkstation-p360",
    brand: "Lenovo",
    title: "ThinkStation P360 Tower",
    priceExVat: 45000.00,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80", // using a placeholder workstation
    category: "Workstations",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["Intel Core i9 12th Gen", "64GB ECC RAM", "2TB NVMe", "NVIDIA RTX A2000"]
  },
  {
    id: "lenovo-thunderbolt-dock",
    brand: "Lenovo",
    title: "ThinkPad Universal Thunderbolt 4 Dock",
    priceExVat: 6500.00,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80", // using a placeholder accessory
    category: "Accessories",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["Thunderbolt 4", "Supports 4x 4K Displays", "100W Power Delivery", "Enterprise Management"]
  }
];

export const dellProducts: Product[] = [
  {
    id: "dell-xps-15",
    brand: "Dell",
    title: "Dell XPS 15 (9530)",
    priceExVat: 42999.00,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
    category: "Laptops",
    isBulkAvailable: true,
    isGiftingAvailable: true,
    specifications: ["Intel Core i7 13th Gen", "32GB DDR5 RAM", "1TB SSD", "15.6-inch OLED Touch"]
  },
  {
    id: "dell-latitude-7440",
    brand: "Dell",
    title: "Dell Latitude 7440 Enterprise",
    priceExVat: 28500.00,
    image: "https://images.unsplash.com/photo-1527443195645-1133f7f28990?auto=format&fit=crop&w=800&q=80",
    category: "Laptops",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["Intel Core i5 13th Gen", "16GB RAM", "512GB SSD", "Ultralight Chassis"]
  },
  {
    id: "dell-optiplex-7000",
    brand: "Dell",
    title: "Dell OptiPlex 7000 Micro",
    priceExVat: 15999.00,
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800&q=80",
    category: "Desktops",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["Intel Core i7 12th Gen", "16GB RAM", "512GB NVMe", "Compact Form Factor"]
  },
  {
    id: "dell-ultrasharp-32",
    brand: "Dell",
    title: "Dell UltraSharp 32 4K USB-C Hub Monitor",
    priceExVat: 18500.00,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    category: "Monitors",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["31.5-inch 4K IPS", "USB-C Hub (90W PD)", "RJ45 Ethernet", "ComfortView Plus"]
  }
];

export const microsoftProducts: Product[] = [
  {
    id: "ms-surface-laptop-5",
    brand: "Microsoft",
    title: "Surface Laptop 5 for Business",
    priceExVat: 26999.00,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80", // placeholder laptop
    category: "Laptops",
    isBulkAvailable: true,
    isGiftingAvailable: true,
    specifications: ["15-inch PixelSense Display", "Intel Core i7 12th Gen", "16GB RAM", "512GB SSD"]
  },
  {
    id: "ms-surface-pro-9",
    brand: "Microsoft",
    title: "Surface Pro 9 for Business",
    priceExVat: 24500.00,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80", // placeholder tablet
    category: "Tablets",
    isBulkAvailable: true,
    isGiftingAvailable: true,
    specifications: ["13-inch Touchscreen", "Intel Core i5 12th Gen", "8GB RAM", "256GB SSD"]
  },
  {
    id: "ms-surface-studio-2",
    brand: "Microsoft",
    title: "Surface Studio 2+",
    priceExVat: 89999.00,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80", // placeholder desktop
    category: "Desktops",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["28-inch PixelSense Display", "Intel Core i7", "32GB RAM", "NVIDIA RTX 3060"]
  },
  {
    id: "ms-365-enterprise",
    brand: "Microsoft",
    title: "Microsoft 365 E5 Enterprise License",
    priceExVat: 680.00,
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800&q=80", // placeholder software/box
    category: "Software",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["Annual User License", "Advanced Security", "Office Apps Included", "Cloud Storage"]
  }
];

export const adobeProducts: Product[] = [
  {
    id: "adobe-cc-teams",
    brand: "Adobe",
    title: "Creative Cloud for Teams (All Apps)",
    priceExVat: 18500.00,
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80", // placeholder design imagery
    category: "Software",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["20+ Creative Apps", "1TB Cloud Storage", "Admin Console", "Advanced Support"]
  },
  {
    id: "adobe-acrobat-pro",
    brand: "Adobe",
    title: "Acrobat Pro for Enterprise",
    priceExVat: 4200.00,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
    category: "Software",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["Create & Edit PDFs", "E-Signatures", "Enterprise Security", "Integration with M365"]
  },
  {
    id: "adobe-substance-3d",
    brand: "Adobe",
    title: "Substance 3D Collection",
    priceExVat: 22000.00,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    category: "Software",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["3D Modeler", "3D Painter", "3D Designer", "3D Sampler"]
  },
  {
    id: "adobe-stock-enterprise",
    brand: "Adobe",
    title: "Adobe Stock for Enterprise",
    priceExVat: 15000.00,
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80",
    category: "Software",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["Royalty-Free Assets", "Extended Licenses", "Shared Pooling", "Premium Support"]
  }
];

export const tarsusProducts: Product[] = [
  {
    id: "tarsus-rack-server",
    brand: "Tarsus Distribution",
    title: "Enterprise Rack Server (1U)",
    priceExVat: 45000.00,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80", // placeholder server
    category: "Servers",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["Dual Intel Xeon", "64GB ECC RAM", "4x 1TB SSD", "Redundant Power"]
  },
  {
    id: "tarsus-managed-switch",
    brand: "Tarsus Distribution",
    title: "48-Port Gigabit Managed PoE+ Switch",
    priceExVat: 12500.00,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80", // placeholder switch
    category: "Networking",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["48x Gigabit PoE+", "4x 10G SFP+ Uplinks", "Layer 3 Routing", "740W Power Budget"]
  },
  {
    id: "tarsus-ups-system",
    brand: "Tarsus Distribution",
    title: "Smart-UPS 3000VA LCD 230V",
    priceExVat: 18999.00,
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800&q=80", // placeholder tech box
    category: "Power",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["3000VA / 2700W", "LCD Status Display", "Network Management Card", "Rack/Tower Convertible"]
  },
  {
    id: "tarsus-bulk-cable",
    brand: "Tarsus Distribution",
    title: "CAT6 UTP Networking Cable (305m Box)",
    priceExVat: 2100.00,
    image: "https://images.unsplash.com/photo-1527443195645-1133f7f28990?auto=format&fit=crop&w=800&q=80", // placeholder cables/tech
    category: "Components",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["305 Meter Pull Box", "Solid Copper", "250MHz Bandwidth", "CM Rated"]
  }
];

export const axizProducts: Product[] = [
  {
    id: "axiz-enterprise-storage",
    brand: "Axiz Distribution",
    title: "All-Flash Enterprise Storage Array",
    priceExVat: 125000.00,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80", // placeholder storage/server
    category: "Storage",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["24x NVMe SSD Bays", "Dual Active Controllers", "100GbE Connectivity", "Deduplication"]
  },
  {
    id: "axiz-nextgen-firewall",
    brand: "Axiz Distribution",
    title: "Enterprise Next-Gen Firewall (NGFW)",
    priceExVat: 35000.00,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80", // placeholder security/tech
    category: "Security",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["10 Gbps Threat Prevention", "Machine Learning Core", "Zero Trust Architecture", "Rack Mountable"]
  },
  {
    id: "axiz-wifi6-ap",
    brand: "Axiz Distribution",
    title: "High-Density Wi-Fi 6 Access Point",
    priceExVat: 8500.00,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80", // placeholder networking
    category: "Networking",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["802.11ax Technology", "4x4 MU-MIMO", "WPA3 Security", "Cloud Managed"]
  },
  {
    id: "axiz-cloud-license",
    brand: "Axiz Distribution",
    title: "Virtual Machine Enterprise Subscription",
    priceExVat: 1200.00,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80", // placeholder cloud/data
    category: "Software",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["Per Core Licensing", "High Availability", "Automated Backups", "24/7 Support"]
  }
];

export const coreGroupProducts: Product[] = [
  {
    id: "core-enterprise-mac",
    brand: "Core Group",
    title: "Enterprise Apple Deployment Fleet",
    priceExVat: 150000.00,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80", 
    category: "Enterprise Tech",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["Bulk MacBook Pro Supply", "Mobile Device Management", "Enterprise Support", "Volume Licensing"]
  },
  {
    id: "core-dji-mavic",
    brand: "Core Group",
    title: "DJI Mavic 3 Enterprise Thermal",
    priceExVat: 85000.00,
    image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&w=800&q=80", // placeholder drone
    category: "Drones",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["640 × 512 Thermal Camera", "Mechanical Shutter", "RTK Module Support", "45-min Flight Time"]
  },
  {
    id: "core-nintendo-switch",
    brand: "Core Group",
    title: "Nintendo Switch OLED - Corporate Prize",
    priceExVat: 8500.00,
    image: "https://images.unsplash.com/photo-1618422201471-5d46e38b32eb?auto=format&fit=crop&w=800&q=80", // placeholder gaming
    category: "Gifting",
    isBulkAvailable: true,
    isGiftingAvailable: true,
    specifications: ["7-inch OLED screen", "64GB Internal Storage", "Enhanced Audio", "Premium Gifting"]
  },
  {
    id: "core-premium-audio",
    brand: "Core Group",
    title: "Premium Office Audio Kit",
    priceExVat: 6500.00,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80", // placeholder headphones
    category: "Audio",
    isBulkAvailable: true,
    isGiftingAvailable: true,
    specifications: ["Active Noise Cancelling", "Unified Communications", "All-day Battery", "Multi-device Pairing"]
  }
];

export const carrolBoyesProducts: Product[] = [
  {
    id: "cb-business-card-holder",
    brand: "Carrol Boyes",
    title: "Business Card Holder - Man",
    priceExVat: 1495.00,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80", // placeholder elegant desk item
    category: "Executive Gifts",
    isBulkAvailable: true,
    isGiftingAvailable: true,
    specifications: ["Material: Pewter", "Designer: Carrol Boyes", "Weight: 250g", "Premium Gift Box Included"]
  },
  {
    id: "cb-water-jug",
    brand: "Carrol Boyes",
    title: "Water Jug - Secret",
    priceExVat: 3250.00,
    image: "https://images.unsplash.com/photo-1581622558667-3419a8dc5f83?auto=format&fit=crop&w=800&q=80", // placeholder elegant jug
    category: "Corporate Gifting",
    isBulkAvailable: true,
    isGiftingAvailable: true,
    specifications: ["Material: Cast Aluminium", "Capacity: 1.5L", "Hand Wash Only", "Signature Design"]
  },
  {
    id: "cb-wine-glasses",
    brand: "Carrol Boyes",
    title: "Wine Glasses - Set of 4 (Baobab)",
    priceExVat: 1850.00,
    image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=800&q=80", // placeholder wine glasses
    category: "Client Gifts",
    isBulkAvailable: true,
    isGiftingAvailable: true,
    specifications: ["Material: Crystal/Glass", "Set of 4", "Laser Engraved Detail", "Elegant Packaging"]
  },
  {
    id: "cb-notebook-pen-set",
    brand: "Carrol Boyes",
    title: "A5 Leather Notebook & Pen Set",
    priceExVat: 1100.00,
    image: "https://images.unsplash.com/photo-1506784926709-22f1ec395907?auto=format&fit=crop&w=800&q=80", // placeholder notebook
    category: "Employee Gifts",
    isBulkAvailable: true,
    isGiftingAvailable: true,
    specifications: ["Genuine Leather", "Refillable Ballpoint Pen", "Embossed Logo", "Ideal for Year-End"]
  }
];

export const smegProducts: Product[] = [
  {
    id: "smeg-retro-kettle",
    brand: "Smeg",
    title: "50's Style Retro Variable Temp Kettle",
    priceExVat: 4299.00,
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80", // placeholder kettle
    category: "Office Appliances",
    isBulkAvailable: true,
    isGiftingAvailable: true,
    specifications: ["Capacity: 1.7L", "Variable Temperature Control", "Stainless Steel Body", "Anti-slip feet"]
  },
  {
    id: "smeg-retro-toaster",
    brand: "Smeg",
    title: "50's Style 4-Slice Toaster",
    priceExVat: 4599.00,
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=800&q=80", // placeholder toaster
    category: "Office Appliances",
    isBulkAvailable: true,
    isGiftingAvailable: true,
    specifications: ["4 Extra Wide Slots", "6 Browning Levels", "Defrost/Bagel Functions", "Removable Crumb Tray"]
  },
  {
    id: "smeg-coffee-machine",
    brand: "Smeg",
    title: "Bean to Cup Automatic Coffee Machine",
    priceExVat: 15999.00,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80", // placeholder coffee machine
    category: "Executive Gifts",
    isBulkAvailable: true,
    isGiftingAvailable: true,
    specifications: ["19 Bar Pump Pressure", "Integrated Grinder", "Thermoblock System", "Compact Design"]
  },
  {
    id: "smeg-fab28-fridge",
    brand: "Smeg",
    title: "FAB28 Retro Free-Standing Fridge",
    priceExVat: 28500.00,
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=800&q=80", // placeholder fridge
    category: "Office Appliances",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["Capacity: 270L", "Life Plus 0°C Drawer", "LED Internal Light", "MultiFlow Cooling"]
  }
];

export const sirJuiceProducts: Product[] = [
  {
    id: "sirjuice-orange-case",
    brand: "Sir Juice",
    title: "100% Orange Juice 1.5L (Case of 8)",
    priceExVat: 420.00,
    image: "https://images.unsplash.com/photo-1622597467836-f38240662c8e?auto=format&fit=crop&w=800&q=80", // placeholder orange juice
    category: "Corporate Catering",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["100% Fruit Juice", "No Added Sugar", "Keep Refrigerated", "8 x 1.5L Bottles"]
  },
  {
    id: "sirjuice-apple-case",
    brand: "Sir Juice",
    title: "Cold Pressed Apple Juice 350ml (Case of 12)",
    priceExVat: 245.00,
    image: "https://images.unsplash.com/photo-1570197781417-0cce3f0b2f56?auto=format&fit=crop&w=800&q=80", // placeholder apple juice
    category: "Event Refreshments",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["Cold Pressed", "Ideal for Boardrooms", "12 x 350ml Bottles", "Recyclable PET"]
  },
  {
    id: "sirjuice-wellness-shots",
    brand: "Sir Juice",
    title: "Ginger & Turmeric Wellness Shots (Box of 24)",
    priceExVat: 399.00,
    image: "https://images.unsplash.com/photo-1622485551329-873b1842ff3e?auto=format&fit=crop&w=800&q=80", // placeholder wellness shots
    category: "Health & Wellness",
    isBulkAvailable: true,
    isGiftingAvailable: true,
    specifications: ["Immune Booster", "Contains Raw Ginger", "24 x 100ml Shots", "Perfect for Office Wellness"]
  },
  {
    id: "sirjuice-smoothie-pack",
    brand: "Sir Juice",
    title: "Berry & Mango Smoothie Pack (Case of 12)",
    priceExVat: 310.00,
    image: "https://images.unsplash.com/photo-1626074964464-ce5c4b12204a?auto=format&fit=crop&w=800&q=80", // placeholder smoothies
    category: "Corporate Catering",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["Thick & Fruity", "Dairy-Free", "12 x 350ml Bottles", "Great for Morning Meetings"]
  }
];

export const leCreusetProducts: Product[] = [
  {
    id: "lecreuset-casserole",
    brand: "Le Creuset",
    title: "Signature Cast Iron Round Casserole",
    priceExVat: 6899.00,
    image: "https://images.unsplash.com/photo-1584990347449-a6e14a2a67e7?auto=format&fit=crop&w=800&q=80", // placeholder casserole
    category: "Executive Gifts",
    isBulkAvailable: true,
    isGiftingAvailable: true,
    specifications: ["Material: Enamelled Cast Iron", "Capacity: 4.2L", "Lifetime Guarantee", "Handcrafted in France"]
  },
  {
    id: "lecreuset-mug-set",
    brand: "Le Creuset",
    title: "Stoneware Espresso Mugs (Set of 4)",
    priceExVat: 1250.00,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=80", // placeholder mugs
    category: "Corporate Gifting",
    isBulkAvailable: true,
    isGiftingAvailable: true,
    specifications: ["Material: Premium Stoneware", "Capacity: 100ml", "Scratch Resistant", "Dishwasher Safe"]
  },
  {
    id: "lecreuset-kettle",
    brand: "Le Creuset",
    title: "Traditional Whistling Teakettle",
    priceExVat: 2150.00,
    image: "https://images.unsplash.com/photo-1590757233816-791b8a5fcb86?auto=format&fit=crop&w=800&q=80", // placeholder kettle
    category: "Client Gifts",
    isBulkAvailable: true,
    isGiftingAvailable: true,
    specifications: ["Material: Enamelled Steel", "Capacity: 2.1L", "Heat-Resistant Handle", "Suitable for Induction"]
  },
  {
    id: "lecreuset-nonstick",
    brand: "Le Creuset",
    title: "Toughened Non-Stick Shallow Frying Pan",
    priceExVat: 3450.00,
    image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=800&q=80", // placeholder pan
    category: "Executive Gifts",
    isBulkAvailable: true,
    isGiftingAvailable: true,
    specifications: ["PFOA-free Non-stick", "Size: 28cm", "Oven Safe to 260°C", "Lifetime Guarantee"]
  }
];

export const hausProducts: Product[] = [
  {
    id: "haus-throw-blanket",
    brand: "HAUS",
    title: "Chunky Knit Throw Blanket",
    priceExVat: 1850.00,
    image: "https://images.unsplash.com/photo-1580828369062-85f80b1812a6?auto=format&fit=crop&w=800&q=80", // placeholder throw
    category: "Executive Gifts",
    isBulkAvailable: true,
    isGiftingAvailable: true,
    specifications: ["100% Cotton", "Size: 130x180cm", "Hand-knitted", "Luxury Packaging"]
  },
  {
    id: "haus-table-lamp",
    brand: "HAUS",
    title: "Modernist Marble Table Lamp",
    priceExVat: 2450.00,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80", // placeholder lamp
    category: "Office Decor",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["Solid Marble Base", "Brushed Brass Accents", "LED Bulb Included", "Perfect for Executive Desks"]
  },
  {
    id: "haus-diffuser",
    brand: "HAUS",
    title: "Signature Scent Reed Diffuser",
    priceExVat: 650.00,
    image: "https://images.unsplash.com/photo-1608528577891-eb05feca4802?auto=format&fit=crop&w=800&q=80", // placeholder diffuser
    category: "Client Gifts",
    isBulkAvailable: true,
    isGiftingAvailable: true,
    specifications: ["Volume: 200ml", "Lasts 4-6 Months", "Sandalwood & Citrus", "Premium Glass Bottle"]
  },
  {
    id: "haus-cushion-cover",
    brand: "HAUS",
    title: "Velvet Scatter Cushion Cover",
    priceExVat: 450.00,
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?auto=format&fit=crop&w=800&q=80", // placeholder cushion
    category: "Office Decor",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["100% Cotton Velvet", "Size: 60x60cm", "Hidden Zip", "Feather Inner Available"]
  }
];

export const healthHygieneProducts: Product[] = [
  {
    id: "hh-sanitizer-station",
    brand: "Corporate Hygiene",
    title: "Freestanding Auto Sanitizer Dispenser",
    priceExVat: 1250.00,
    image: "https://images.unsplash.com/photo-1584483766114-2cea87348bf6?auto=format&fit=crop&w=800&q=80", // placeholder dispenser
    category: "Sanitization",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["Touchless Infrared", "1000ml Capacity", "Battery Operated", "Drip Tray Included"]
  },
  {
    id: "hh-air-purifier",
    brand: "Wellness Tech",
    title: "HEPA Office Air Purifier",
    priceExVat: 3400.00,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80", // placeholder purifier
    category: "Air Quality",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["True HEPA Filter", "Covers 50m²", "Quiet Operation", "Smart AQI Sensor"]
  },
  {
    id: "hh-first-aid-pro",
    brand: "Safety First",
    title: "Regulation 7 Office First Aid Kit",
    priceExVat: 850.00,
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=800&q=80", // placeholder first aid
    category: "Safety",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["Wall Mountable", "50+ Person Capacity", "SABS Approved", "Tamper Evident"]
  },
  {
    id: "hh-wellness-pack",
    brand: "Premium Gifting",
    title: "Employee Wellness Care Package",
    priceExVat: 450.00,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80", // placeholder wellness kit
    category: "Employee Gifts",
    isBulkAvailable: true,
    isGiftingAvailable: true,
    specifications: ["Vitamins & Supplements", "Organic Hand Sanitizer", "Essential Oils", "Custom Branding Available"]
  }
];

export const foodBeverageProducts: Product[] = [
  {
    id: "fb-coffee-beans",
    brand: "Premium Pantry",
    title: "Artisan Espresso Blend Beans (1kg x 6)",
    priceExVat: 2100.00,
    image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=800&q=80", // placeholder coffee beans
    category: "Office Pantry",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["100% Arabica", "Medium-Dark Roast", "Bulk Case of 6x 1kg", "Ideal for Bean-to-Cup Machines"]
  },
  {
    id: "fb-mineral-water",
    brand: "Corporate Catering",
    title: "Premium Glass Mineral Water 750ml (Case of 12)",
    priceExVat: 450.00,
    image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=800&q=80", // placeholder water bottles
    category: "Boardroom Refreshments",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["Still & Sparkling Options", "Premium Glass Bottles", "12 x 750ml per Case", "Boardroom Ready"]
  },
  {
    id: "fb-snack-box",
    brand: "Premium Gifting",
    title: "Executive Artisan Snack & Chocolate Box",
    priceExVat: 850.00,
    image: "https://images.unsplash.com/photo-1621939514649-280e2af5a118?auto=format&fit=crop&w=800&q=80", // placeholder snack box
    category: "Client Gifts",
    isBulkAvailable: true,
    isGiftingAvailable: true,
    specifications: ["Handcrafted Chocolates", "Premium Roasted Nuts", "Nougat & Biscuits", "Luxury Gift Packaging"]
  },
  {
    id: "fb-tea-selection",
    brand: "Premium Pantry",
    title: "Luxury Silk Tea Bags Assortment (100 Box)",
    priceExVat: 650.00,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80", // placeholder tea
    category: "Office Pantry",
    isBulkAvailable: true,
    isGiftingAvailable: false,
    specifications: ["Biodegradable Silk Bags", "5 Assorted Blends", "100 Bags per Box", "Individually Wrapped"]
  }
];