import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'restro_pos',
    title: 'RESTRO_POS',
    status: 'BUILT',
    category: 'Full Stack',
    year: '2025–2026',
    oneLiner: 'Production-ready restaurant operations and point-of-sale platform operating in live commercial environments.',
    summary: 'A robust multi-role restaurant management and billing engine engineered to bridge front-of-house service with kitchen orchestration, real-time inventory adjustments, and managerial financial reporting. Designed for commercial stability and active revenue generation.',
    problem: 'Traditional offline restaurant billing systems suffer from synchronization delays between waiters, kitchen order tickets (KOT), and inventory management. This results in order discrepancies, billing bottlenecks during peak hours, and zero real-time visibility across branches.',
    solution: 'Engineered an asynchronous, cloud-backed POS platform using React, TypeScript, and Firebase. Features role-based operational surfaces for waiters, kitchen staff, cashiers, and managers with optimistic UI updates and resilient offline-fallback handling.',
    whatTalketBuilt: [
      'Architected end-to-end multi-role state machine in React & TypeScript handling simultaneous tables, order modifiers, and split payments.',
      'Designed real-time Firebase Firestore data model with sub-second synchronization between table order entry and kitchen display units (KDS).',
      'Implemented automated inventory decrementation algorithms tied directly to recipe-level bill-of-materials.',
      'Developed owner-facing analytics dashboards tracking table turnaround time, hourly revenue velocity, and staff performance metrics.',
      'Structured multi-tenant data isolation enabling scalable multi-branch expansion.'
    ],
    technologies: ['React', 'TypeScript', 'Firebase Firestore', 'Firebase Auth', 'Tailwind CSS', 'Vite'],
    architecture: [
      { step: '01', title: 'Customer Order', description: 'Table order captured via staff interface with modifiers', tech: 'React / TS' },
      { step: '02', title: 'Waiter / Cashier', description: 'Instant optimistic UI updates with validation', tech: 'Client State' },
      { step: '03', title: 'Order Dispatch', description: 'Real-time sync to Firestore document listeners', tech: 'Firebase DB' },
      { step: '04', title: 'Kitchen / KOT', description: 'Instant print trigger and kitchen display queue updates', tech: 'KDS Listener' },
      { step: '05', title: 'Billing Engine', description: 'Tax breakdown, discounts, dynamic split billing', tech: 'Rules Engine' },
      { step: '06', title: 'Inventory Deduction', description: 'Atomic transactions decrementing ingredient inventory', tech: 'Cloud Transactions' },
      { step: '07', title: 'Management Intelligence', description: 'Aggregated analytics and end-of-day revenue reconciliation', tech: 'Owner Dashboard' }
    ],
    metrics: [
      { label: 'Operational State', value: 'Active Commercial Usage' },
      { label: 'Business Impact', value: 'Revenue Generating' },
      { label: 'Latency', value: '<250ms Sync Speed' },
      { label: 'Reliability', value: '99.9% Uptime' }
    ],
    githubUrl: 'https://github.com/Talket/Restro_POS',
    demoUrl: undefined,
    deploymentInfo: 'Production deployment with live restaurant client adoption in Gujarat. Multi-branch cloud architecture on Firebase.',
    challenges: [
      'Preventing race conditions when multiple waitstaff attempt to add items or settle the exact same table concurrently.',
      'Ensuring POS remains operational during brief local network interruptions without losing uncommitted tickets.',
      'Balancing high-frequency real-time listeners with Firestore read/write quota economics.'
    ],
    lessonsLearned: [
      'Transactional guarantees are non-negotiable when physical inventory and money are in the loop.',
      'Real workers prioritize minimum-tap UX over visual flair during 8:00 PM restaurant rushes.',
      'Optimistic state updates must have immediate rollback mechanisms with clear visual error toasts.'
    ],
    futureWork: [
      'Direct thermal printer Bluetooth/network socket integration via WebUSB / ESC-POS protocols.',
      'Predictive inventory exhaustion alerts based on historical day-of-week consumption patterns.'
    ],
    featured: true,
    interactiveType: 'architecture'
  },
  {
    id: 'after12th',
    title: 'AFTER12TH',
    status: 'BUILT',
    category: 'Mobile',
    year: '2025',
    oneLiner: 'AI-assisted career navigation Android platform serving 500+ active students on Google Play.',
    summary: 'A student-centric guidance ecosystem published on Google Play. Combines intelligent career roadmaps, college admission prerequisites, and Cloudflare Workers AI inference to answer personalized academic questions based on Class 12 streams.',
    problem: 'High school graduates in India face overwhelming, unstructured options after 12th board exams with minimal access to high-quality career counselors, leading to uninformed stream transitions and career misalignment.',
    solution: 'Built and published a native Flutter mobile app integrated with Cloudflare Workers AI and Firebase. Provides personalized stream-to-career mappings, entrance exam schedules, and conversational AI career advisory.',
    whatTalketBuilt: [
      'Designed and engineered the complete Flutter mobile application following clean architectural separation between presentation and data layers.',
      'Integrated Cloudflare Workers AI edge endpoints to provide rapid, context-aware student advisory without expensive GPU overhead.',
      'Structured hierarchical career tree database covering STEM, Commerce, and Humanities streams in Firebase Firestore.',
      'Implemented user personalization profiles, bookmarking, search indexing, and offline cached career guides.',
      'Successfully navigated Google Play Store compliance, target SDK updates, and release management to acquire 500+ real users.'
    ],
    technologies: ['Flutter', 'Dart', 'Firebase', 'Cloudflare Workers AI', 'Android Studio', 'Google Play Console'],
    architecture: [
      { step: '01', title: 'Student Profile Input', description: 'Stream selection (Science/Commerce/Arts) & interest survey', tech: 'Flutter Form' },
      { step: '02', title: 'Local Cache Check', description: 'Offline-first career roadmap availability check', tech: 'Hive / SharedPreferences' },
      { step: '03', title: 'Cloud Sync', description: 'Sync career database updates and entrance exam alerts', tech: 'Firebase DB' },
      { step: '04', title: 'Edge AI Inference', description: 'Cloudflare Workers AI processes natural language queries', tech: 'Workers AI' },
      { step: '05', title: 'Roadmap Generation', description: 'Visual career timeline, degree choices, and required exams', tech: 'Flutter UI' }
    ],
    metrics: [
      { label: 'Google Play Users', value: '500+ Active Installs' },
      { label: 'User Feedback', value: 'High Engagement' },
      { label: 'Platforms', value: 'Android (Google Play)' },
      { label: 'Response Latency', value: '<800ms AI Stream' }
    ],
    githubUrl: 'https://github.com/Talket/After12th',
    demoUrl: undefined,
    playStoreUrl: 'https://play.google.com/store',
    deploymentInfo: 'Published on Google Play Store. Active user retention and regular content updates.',
    challenges: [
      'Optimizing Flutter build APK size and cold-start time on lower-end Android budget devices.',
      'Managing API token usage and latency when multiple concurrent students query career trajectories.',
      'Formatting unstructured LLM responses into structured timeline widgets in Flutter.'
    ],
    lessonsLearned: [
      'Real user acquisition is where software meets reality: crashes, edge cases, and unexpected UI bugs quickly emerge.',
      'Edge AI providers like Cloudflare Workers provide immense latency and cost benefits for mobile-first backends.'
    ],
    futureWork: [
      'Localized vernacular voice guidance for students in regional Indian languages.',
      'College cutoff comparison matrix powered by crowdsourced student inputs.'
    ],
    featured: true,
    interactiveType: 'counter'
  },
  {
    id: 'criminal_network_analysis',
    title: 'AI Criminal Network Analysis',
    status: 'BUILDING',
    category: 'AI / ML',
    year: '2026',
    oneLiner: 'Multi-stage AI investigative intelligence system fusing edge OCR/HTR hardware with dual-LLM graph synthesis.',
    summary: 'An advanced ongoing investigative intelligence platform designed to extract, reason over, and visualize complex covert relationships from unstructured crime dossiers, handwritten case notes, call records, and financial transactions.',
    problem: 'Law enforcement investigators drown in fragmented, unstructured evidentiary documents — photocopied FIRs, handwritten interrogations, seized phone logs, and bank slips. Correlating entities across cases manually takes weeks and misses non-obvious associative links.',
    solution: 'Architecting a distributed investigative pipeline: edge Raspberry Pi OCR/HTR parsing server, an initial extraction LLM converting raw text into strict JSON entities, a secondary reasoning model filtering hallucinations and deducing hidden connections, and an interactive graph visualization engine with forward predictive intelligence.',
    whatTalketBuilt: [
      'Configured dedicated Raspberry Pi server running FastAPI & Uvicorn for remote OCR/HTR document digitization.',
      'Designed dual-LLM reasoning architecture separating fact extraction from relational inference to curb hallucination.',
      'Built interactive entity-relationship graph explorer linking suspects, phone IMEIs, shell bank accounts, and locations.',
      'Implemented investigator validation loop allowing officers to inspect context chains for every generated link.',
      'Engineered feedback ingestion pipeline to recalibrate connection confidence scores against real-world convictions.'
    ],
    technologies: ['Python', 'FastAPI', 'Raspberry Pi', 'Uvicorn', 'LLMs', 'Graph Data Structures', 'React', 'Docker'],
    architecture: [
      { step: '01', title: 'Heterogeneous Ingestion', description: 'Investigator uploads scanned FIRs, handwritten notes, logs', tech: 'Multi-Format UI' },
      { step: '02', title: 'Edge Hardware OCR/HTR', description: 'Raspberry Pi server performs optical character & handwriting recognition', tech: 'FastAPI / Uvicorn' },
      { step: '03', title: 'Investigator Review', description: 'Human-in-the-loop review of extracted raw text verification', tech: 'Validation UI' },
      { step: '04', title: 'LLM #1 Extraction', description: 'Converts unstructured text into strict relational entity JSON', tech: 'Extraction Model' },
      { step: '05', title: 'Central Persistence', description: 'Normalized entity storage with audit trail metadata', tech: 'Graph DB / SQL' },
      { step: '06', title: 'LLM #2 Reasoning', description: 'Deduces indirect links, flags contradictions, prunes hallucinations', tech: 'Reasoning Model' },
      { step: '07', title: 'Interactive Graph', description: 'Visual network topology with entity centrality and cluster detection', tech: 'Canvas / WebGL' },
      { step: '08', title: 'Predictive Inference', description: 'Forecasts vulnerable accomplice nodes and next associative meetings', tech: 'Pattern Engine' },
      { step: '09', title: 'Outcome Feedback', description: 'Investigator incident reports fine-tune future model weights', tech: 'Feedback Pipeline' }
    ],
    metrics: [
      { label: 'System Stage', value: 'Active Development' },
      { label: 'Edge Processor', value: 'Raspberry Pi Server' },
      { label: 'Pipeline Architecture', value: 'Dual-LLM Reasoning' },
      { label: 'Target Users', value: 'Investigative Agencies' }
    ],
    githubUrl: 'https://github.com/Talket/criminal-network-analysis',
    demoUrl: undefined,
    deploymentInfo: 'Edge server running on dedicated Raspberry Pi with FastAPI daemon. Hybrid cloud/edge orchestration prototype.',
    challenges: [
      'Handling low-resolution Hindi and English handwritten police records (HTR) with sufficient fidelity.',
      'Preventing the reasoning LLM from inventing fictional criminal alliances while still noticing implicit associations.',
      'Graph layout performance when rendering hundreds of deeply interconnected entities and metadata cards.'
    ],
    lessonsLearned: [
      'Multi-stage LLM chains (Extraction -> Verification -> Reasoning) drastically outperform monolithic prompt prompts.',
      'Edge hardware offloading isolates sensitive evidentiary processing and allows flexible air-gapped deployments.'
    ],
    futureWork: [
      'Temporal network animation showing how a syndicate expanded and reorganized across months or years.',
      'Integration of geofence heatmaps directly into entity nodes.'
    ],
    featured: true,
    interactiveType: 'pipeline'
  },
  {
    id: 'ddpm_image_generation',
    title: 'Conditional DDPM Generative AI',
    status: 'BUILT',
    category: 'Generative AI',
    year: '2025',
    oneLiner: 'Conditional Denoising Diffusion Probabilistic Model trained on 60,000 images with 1,000 reverse timesteps.',
    summary: 'A deep learning implementation of conditional Denoising Diffusion Probabilistic Models (DDPM) built using TensorFlow. Trained on the full MNIST dataset to iteratively reverse Gaussian noise perturbation into coherent digit synthesis governed by mathematical noise schedules.',
    problem: 'Generative Adversarial Networks (GANs) frequently suffer from mode collapse and training instability. Understanding modern generative foundation models requires implementing score-based and diffusion principles from scratch.',
    solution: 'Designed and trained a U-Net style conditional diffusion model with sinusoidal time embeddings and linear beta noise scheduling spanning 1,000 timesteps across 60,000 training samples.',
    whatTalketBuilt: [
      'Implemented forward diffusion Markov chain adding scheduled Gaussian noise across 1,000 discrete timesteps.',
      'Constructed parameterized U-Net neural network with residual downsampling and upsampling blocks predicting epsilon noise.',
      'Engineered conditional class embedding injection enabling deterministic digit generation upon inference.',
      'Formulated custom MSE loss functions comparing true added noise vs model predictions.',
      'Trained model over 60,000 images with early stopping and learning rate annealing, verifying convergence through validation loss stability.'
    ],
    technologies: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Matplotlib', 'Jupyter'],
    architecture: [
      { step: '01', title: 'Data Pipeline', description: 'Normalized 60,000 MNIST images [-1, 1] range', tech: 'NumPy / TF' },
      { step: '02', title: 'Forward Diffusion q(x_t|x_0)', description: 'Linear variance schedule beta_1 to beta_T over 1,000 steps', tech: 'Gaussian Perturbation' },
      { step: '03', title: 'U-Net Architecture', description: 'Downsampling, bottleneck with time & class embeddings, upsampling', tech: 'TensorFlow Model' },
      { step: '04', title: 'Loss Minimization', description: 'L2 loss between true epsilon and predicted noise epsilon_theta', tech: 'MSE Loss' },
      { step: '05', title: 'Reverse Sampling p_theta(x_{t-1}|x_t)', description: 'Step-by-step ancestral denoising generating clear digits from pure noise', tech: 'Reverse Process' }
    ],
    metrics: [
      { label: 'Diffusion Timesteps', value: '1,000 Steps' },
      { label: 'Training Corpus', value: '60,000 Images' },
      { label: 'Best Val MSE', value: '~0.039' },
      { label: 'Train-Val Loss Gap', value: '<0.001 (Zero Overfitting)' },
      { label: 'Reconstruction Gain', value: '~10% Loss Reduction' }
    ],
    githubUrl: 'https://github.com/Talket/DDPM-MNIST-Tensorflow',
    demoUrl: undefined,
    deploymentInfo: 'Experimental model checkpoint saved. Inference script generates configurable batches with customizable noise seeds.',
    challenges: [
      'High GPU memory consumption when caching intermediate U-Net activations during backpropagation across batch sizes.',
      'Mathematical tuning of beta schedules to prevent information destruction too early in the forward trajectory.',
      'Balancing conditional guidance weight to prevent oversaturation of generated digit strokes.'
    ],
    lessonsLearned: [
      'Diffusion is fundamentally about learning the score function of data distribution, not merely memorizing image templates.',
      'Sinusoidal positional embeddings derived from Transformers are equally foundational to temporal continuous diffusion.'
    ],
    futureWork: [
      'Accelerating reverse sampling using DDIM (Denoising Diffusion Implicit Models) to reduce inference from 1,000 to 50 steps.',
      'Scaling up architecture to multi-channel CIFAR-10 imagery.'
    ],
    featured: true,
    interactiveType: 'diffusion'
  },
  {
    id: 'waste_classification',
    title: 'Waste Classification AI',
    status: 'BUILT',
    category: 'Computer Vision',
    year: '2025',
    oneLiner: 'Automated Convolutional Neural Network vision pipeline classifying municipal waste streams for ecological recycling.',
    summary: 'An end-to-end computer vision pipeline capable of classifying waste items into organic and recyclable categories to automate municipal sorting facilities. Implements robust data augmentation and multi-layer convolutional feature extraction.',
    problem: 'Manual municipal waste sorting is hazardous, slow, and economically inefficient, causing recyclable materials to be unnecessarily routed to landfills.',
    solution: 'Designed and trained a deep Convolutional Neural Network (CNN) in Python and TensorFlow capable of processing real-world waste imagery under varying illumination, angles, and occlusions.',
    whatTalketBuilt: [
      'Curated and preprocessed multi-thousand image dataset with standard normalization and aspect ratio preservation.',
      'Implemented robust data augmentation pipeline (rotation, zoom, horizontal flips, contrast jitter) to mitigate overfitting.',
      'Constructed CNN architecture with successive Conv2D, BatchNormalization, MaxPooling, and Dropout regularization layers.',
      'Conducted extensive hyperparameter tuning across Adam and SGD optimizers with learning rate schedulers.',
      'Evaluated performance using confusion matrices, precision-recall curves, and ROC-AUC metrics.'
    ],
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'NumPy', 'Matplotlib', 'Scikit-Learn'],
    architecture: [
      { step: '01', title: 'Input Image', description: 'Raw camera capture of refuse item', tech: 'Camera Feed' },
      { step: '02', title: 'Preprocessing', description: 'Resize to 224x224, normalization, color correction', tech: 'OpenCV' },
      { step: '03', title: 'Data Augmentation', description: 'Random affine transforms and illumination shifts', tech: 'TF Augment' },
      { step: '04', title: 'Feature Extraction', description: 'Hierarchical convolution layers detecting edges, shapes, textures', tech: 'CNN Backbone' },
      { step: '05', title: 'Dense Classification', description: 'Fully-connected layers with Softmax probability output', tech: 'Dense / Dropout' },
      { step: '06', title: 'Sorting Decision', description: 'Actuation trigger routing item to organic or recyclable bin', tech: 'Inference Engine' }
    ],
    metrics: [
      { label: 'Evaluation Metrics', value: 'High Accuracy & Precision' },
      { label: 'Framework', value: 'TensorFlow / Keras' },
      { label: 'Input Resolution', value: '224x224 RGB' },
      { label: 'Target', value: 'Automated Waste Segregation' }
    ],
    githubUrl: 'https://github.com/Talket/waste-classification-cnn',
    demoUrl: undefined,
    deploymentInfo: 'Packaged inference script ready for integration with microcontroller actuator / camera sorting rig.',
    challenges: [
      'High visual intra-class variance: crushed plastic bottles look vastly different from transparent plastic containers.',
      'Minimizing inference latency to support real-time conveyor belt sorting speeds (>10 items per second).'
    ],
    lessonsLearned: [
      'Data augmentation is the single most critical factor in real-world computer vision generalization.',
      'Confusion matrices pinpoint specific label ambiguities far better than aggregate accuracy metrics.'
    ],
    futureWork: [
      'Quantization to TensorFlow Lite (TFLite) for low-power edge execution on embedded cameras or Raspberry Pi.',
      'Expanding classes to electronic waste, medical waste, and hazardous batteries.'
    ],
    featured: false,
    interactiveType: 'pipeline'
  },
  {
    id: 'sorting_visualizer',
    title: 'Algorithm & Graph Visualizer',
    status: 'BUILT',
    category: 'Algorithms',
    year: '2025',
    oneLiner: 'Containerized C++ backend and interactive visualizer demonstrating 12+ sorting and graph traversal algorithms.',
    summary: 'An educational computer science visualization engine designed to demonstrate algorithmic state transformations in real time. Features 12+ classic sorting and graph traversal algorithms with step-by-step state tracking, space/time complexity telemetry, and Dockerized backend architecture.',
    problem: 'Abstract algorithmic concepts like pivot partitioning, recursive call stacks, and graph edge relaxations are difficult to intuitively grasp through static textbook pseudocode.',
    solution: 'Engineered an interactive algorithm simulation suite containerized with Docker and docker-compose. Visualizes internal array swaps, comparisons, recursion trees, and shortest-path tree discoveries with adjustable execution velocities.',
    whatTalketBuilt: [
      'Implemented 12+ core algorithms in C++: QuickSort, MergeSort, HeapSort, Dijkstra, BFS, DFS, Prim’s, Kruskal’s, and Bubble/Insertion/Selection.',
      'Designed step-recording state machine producing serializable delta snapshots for each comparison and swap operation.',
      'Containerized execution environment using Docker and docker-compose for deterministic cross-platform execution.',
      'Built interactive frontend controls allowing users to pause, rewind, step-forward, and inject custom array permutations.',
      'Documented mathematical worst-case, average-case, and best-case complexities with real-time operation counters.'
    ],
    technologies: ['C++', 'Algorithms & DSA', 'Docker', 'docker-compose', 'TypeScript', 'Web Canvas'],
    architecture: [
      { step: '01', title: 'Input Configuration', description: 'User selects algorithm, array size, or graph adjacency matrix', tech: 'Input Panel' },
      { step: '02', title: 'C++ Algorithmic Core', description: 'Execution engine processes state changes with step recording', tech: 'C++ Engine' },
      { step: '03', title: 'Docker Container', description: 'Isolated execution sandbox managing compute processes', tech: 'docker-compose' },
      { step: '04', title: 'Snapshot Serialization', description: 'Emits structured timeline of pointers, pivots, and swaps', tech: 'State JSON' },
      { step: '05', title: 'Visual Rendering', description: '60fps Canvas / DOM bar height and node color transitions', tech: 'Canvas Engine' }
    ],
    metrics: [
      { label: 'Algorithms Covered', value: '12+ Algorithms' },
      { label: 'Core Language', value: 'C++ & TypeScript' },
      { label: 'Packaging', value: 'Docker Containerized' },
      { label: 'Operation Modes', value: 'Step-by-Step & Continuous' }
    ],
    githubUrl: 'https://github.com/Talket/Algorithm-Sorting-Visualizer',
    demoUrl: undefined,
    deploymentInfo: 'Containerized with Docker. Configured for instantaneous reproducible local execution.',
    challenges: [
      'Decoupling algorithm execution from UI rendering to prevent browser thread locking during heavy graph calculations.',
      'Representing recursive call stacks (MergeSort / DFS) visually without cluttering the screen.'
    ],
    lessonsLearned: [
      'Writing an algorithm to execute is easy; instrumenting an algorithm to explain its own internal states is significantly harder.',
      'Deep mastery of pointers and memory layout in C++ solidifies fundamental algorithmic thinking.'
    ],
    futureWork: [
      'Visualizing A* heuristic pathfinding on dynamically generated obstacle mazes.',
      'Dynamic Programming 2D memoization table state visualizations (Knapsack, LCS).'
    ],
    featured: false,
    interactiveType: 'algorithm'
  },
  {
    id: 'farmhouse_chalo',
    title: 'FARMHOUSE CHALO',
    status: 'BUILT',
    category: 'Mobile',
    year: '2025',
    oneLiner: 'Live mobile operations management system optimizing table turnover and kitchen order printing.',
    summary: 'A purpose-built restaurant management application engineered for high-throughput resort and farmhouse dining venues. Coordinates waiter table assignments, live menu toggles, KOT printing, and instant bill closing through cloud synchronization.',
    problem: 'Outdoor and expansive farmhouse dining spaces face severe coordination latency between servers walking extensive grounds and the central kitchen, causing delayed orders and lost tickets.',
    solution: 'Engineered a mobile-first operational workflow in Flutter backed by Firebase. Waitstaff manage editable table layouts, fire kitchen order tickets (KOT) directly to kitchen thermal queues, and perform immediate table closure.',
    whatTalketBuilt: [
      'Engineered interactive table grid with dynamic visual status indicators (Vacant, Occupied, KOT Fired, Billed).',
      'Built menu catalog management with real-time 86/out-of-stock toggles to avoid ordering unavailable items.',
      'Implemented KOT generation service structuring items by preparation station (Grill, Main, Beverages).',
      'Developed table settlement workflow integrating discount authorizations and final payment capture.',
      'Secured managerial operations via role-based authentication and financial audit logs.'
    ],
    technologies: ['Flutter', 'Dart', 'Firebase Firestore', 'Firebase Auth', 'Cloud Messaging'],
    architecture: [
      { step: '01', title: 'Table Selection', description: 'Server selects physical dining section & table number', tech: 'Flutter Grid' },
      { step: '02', title: 'Order Compilation', description: 'Item modifiers, quantity controls, and custom notes', tech: 'App State' },
      { step: '03', title: 'KOT Generation', description: 'Cloud document generated with station routing tags', tech: 'Firebase DB' },
      { step: '04', title: 'Kitchen Receipt', description: 'Printed in kitchen; food preparation timer initiated', tech: 'Thermal Service' },
      { step: '05', title: 'Bill Generation', description: 'Calculates taxes, service charge, and discounts', tech: 'Billing Engine' },
      { step: '06', title: 'Table Closing', description: 'Frees table for next guest and records daily revenue ledger', tech: 'Ledger Audit' }
    ],
    metrics: [
      { label: 'Operational Impact', value: 'Live Venue Usage' },
      { label: 'Turnaround Time', value: '~25% Faster Table Prep' },
      { label: 'Platform', value: 'Android (Flutter)' },
      { label: 'Sync Mechanism', value: 'Real-time Firestore' }
    ],
    githubUrl: 'https://github.com/Talket/FarmHouse_Chalo',
    demoUrl: undefined,
    deploymentInfo: 'Active internal deployment at dining venue in Gujarat. Handled live weekend customer traffic.',
    challenges: [
      'Maintaining wireless synchronization across expansive open-air farmhouse grounds with patchy Wi-Fi.',
      'Structuring table-merge operations when large family parties combine multiple adjacent tables.'
    ],
    lessonsLearned: [
      'Operational software must be resilient to user mistake: servers frequently tap the wrong table and require instant undo options.',
      'Clear color-coded statuses (Green/Yellow/Red) dramatically speed up staff recognition.'
    ],
    futureWork: [
      'Automated table reservation integration synced with Google Business and WhatsApp APIs.',
      'Customer-facing QR code reordering for beverage refills.'
    ],
    featured: false,
    interactiveType: 'workflow'
  }
];
