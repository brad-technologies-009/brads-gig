const { createApp } = Vue;
        
    const translationsData = {
        english: {
            currentLanguage: 'English',
            contactUs: 'Contact Us',
            support: 'Support',
            myAccount: 'My Account',
            accountSettings: 'Account Settings',
            billing: 'Billing',
            signOut: 'Sign Out',
            products: 'Products',
            solutions: 'Solutions',
            pricing: 'Pricing',
            documentation: 'Documentation',
            learn: 'Learn',
            signIn: 'Sign In',
            createAccount: 'Create Account',
            title: 'BRAD Technologies',
            subtitle: 'Discover the key differences between SOAP and REST APIs and learn how to choose the right protocol for your applications.',
            soapTitle: 'SOAP Protocol',
            soapDescription: 'SOAP (Simple Object Access Protocol) is a protocol standard for exchanging structured information in web services. It uses XML for message format and relies on application layer protocols, most often HTTP or SMTP.',
            soapPoints: ['Strict standards and specifications', 'Built-in error handling', 'High security features (WS-Security)', 'Stateful operations support'],
            exploreSoap: 'Explore SOAP Services',
            restTitle: 'REST Protocol',
            restDescription: 'REST (Representational State Transfer) is an architectural style for designing networked applications. It uses standard HTTP methods (GET, POST, PUT, DELETE) and typically uses JSON for data format.',
            restPoints: ['Lightweight and flexible', 'Stateless operations', 'Cacheable responses', 'Easy integration with web technologies'],
            exploreRest: 'Explore REST Services',
            comparisonTitle: 'SOAP vs. REST: Key Differences',
            feature: 'Feature',
            soap: 'SOAP',
            rest: 'REST',
            comparisonRows: [
                { feature: 'Architecture', soap: 'Protocol', rest: 'Architectural style' },
                { feature: 'Data Format', soap: 'XML only', rest: 'JSON, XML, HTML, plain text' },
                { feature: 'Standards', soap: 'Strict standards (WSDL, SOAP)', rest: 'No official standards, uses HTTP' },
                { feature: 'Performance', soap: 'Slower due to XML parsing', rest: 'Faster, especially with JSON' },
                { feature: 'Security', soap: 'WS-Security, ACID compliance', rest: 'HTTPS, OAuth' },
                { feature: 'State', soap: 'Stateful operations', rest: 'Stateless operations' },
                { feature: 'Use Cases', soap: 'Enterprise apps, financial services', rest: 'Web services, mobile apps, IoT' }
            ],
            ctaTitle: 'Ready to Build Your API Solution?',
            ctaDescription: 'Whether you need the robust security of SOAP or the flexibility of REST, AWS has the tools and services to support your API development.',
            startTrial: 'Start Free Trial',
            contactSales: 'Contact Sales',
            awsServices: 'Brad Technology',
            compute: 'Compute',
            storage: 'Storage',
            databases: 'Databases',
            networking: 'Networking',
            security: 'Security',
            resources: 'Resources',
            documentation: 'Documentation',
            devCenter: 'Developer Center',
            training: 'Training',
            blog: 'AWS Blog',
            faqs: 'FAQs',
            company: 'Company',
            aboutUs: 'About Us',
            leadership: 'Leadership',
            careers: 'Careers',
            press: 'Press',
            partners: 'Partners',
            support: 'Support',
            techSupport: 'Technical Support',
            billingSupport: 'Billing Support',
            forums: 'Forums',
            copyright: '© 2023, Brad Technologies, Inc.',
            searchPlaceholder: 'Search projects...',
            noResults: 'No projects found',
            projectsTitle: 'Featured Projects',
            viewProject: 'View Project'
        },
        deutsch: {
            currentLanguage: 'Deutsch',
            contactUs: 'Kontaktieren Sie uns',
            support: 'Support',
            myAccount: 'Mein Konto',
            accountSettings: 'Kontoeinstellungen',
            billing: 'Abrechnung',
            signOut: 'Abmelden',
            products: 'Produkte',
            solutions: 'Lösungen',
            pricing: 'Preise',
            documentation: 'Dokumentation',
            learn: 'Lernen',
            signIn: 'Anmelden',
            createAccount: 'Konto erstellen',
            title: 'API-Protokolle verstehen: SOAP vs. REST',
            subtitle: 'Entdecken Sie die wichtigsten Unterschiede zwischen SOAP- und REST-APIs und erfahren Sie, wie Sie das richtige Protokoll für Ihre Anwendungen auswählen.',
            soapTitle: 'SOAP-Protokoll',
            soapDescription: 'SOAP (Simple Object Access Protocol) ist ein Protokollstandard für den Austausch strukturierter Informationen in Webdiensten. Es verwendet XML als Nachrichtenformat und stützt sich auf Anwendungsschichtprotokolle, meist HTTP oder SMTP.',
            soapPoints: ['Strenge Standards und Spezifikationen', 'Integrierte Fehlerbehandlung', 'Hohe Sicherheitsfunktionen (WS-Sicherheit)', 'Unterstützung für zustandsbehaftete Operationen'],
            exploreSoap: 'SOAP-Dienste erkunden',
            restTitle: 'REST-Protokoll',
            restDescription: 'REST (Representational State Transfer) ist ein Architekturstil für den Entwurf vernetzter Anwendungen. Es verwendet standardmäßige HTTP-Methoden (GET, POST, PUT, DELETE) und typischerweise JSON für das Datenformat.',
            restPoints: ['Leichtgewichtig und flexibel', 'Zustandslose Operationen', 'Zwischenspeicherbare Antworten', 'Einfache Integration mit Webtechnologien'],
            exploreRest: 'REST-Dienste erkunden',
            comparisonTitle: 'SOAP vs. REST: Hauptunterschiede',
            feature: 'Funktion',
            soap: 'SOAP',
            rest: 'REST',
            comparisonRows: [
                { feature: 'Architektur', soap: 'Protokoll', rest: 'Architekturstil' },
                { feature: 'Datenformat', soap: 'Nur XML', rest: 'JSON, XML, HTML, Klartext' },
                { feature: 'Standards', soap: 'Strenge Standards (WSDL, SOAP)', rest: 'Keine offiziellen Standards, verwendet HTTP' },
                { feature: 'Leistung', soap: 'Langsamer durch XML-Parsing', rest: 'Schneller, besonders mit JSON' },
                { feature: 'Sicherheit', soap: 'WS-Sicherheit, ACID-Konformität', rest: 'HTTPS, OAuth' },
                { feature: 'Zustand', soap: 'Zustandsbehaftete Operationen', rest: 'Zustandslose Operationen' },
                { feature: 'Anwendungsfälle', soap: 'Unternehmensanwendungen, Finanzdienstleistungen', rest: 'Webdienste, mobile Apps, IoT' }
            ],
            ctaTitle: 'Bereit, Ihre API-Lösung zu erstellen?',
            ctaDescription: 'Egal, ob Sie die robuste Sicherheit von SOAP oder die Flexibilität von REST benötigen, AWS bietet die Tools und Dienste zur Unterstützung Ihrer API-Entwicklung.',
            startTrial: 'Kostenlose Testversion starten',
            contactSales: 'Vertrieb kontaktieren',
            awsServices: 'AWS-Dienste',
            compute: 'Compute',
            storage: 'Speicher',
            databases: 'Datenbanken',
            networking: 'Netzwerke',
            security: 'Sicherheit',
            resources: 'Ressourcen',
            documentation: 'Dokumentation',
            devCenter: 'Entwicklerzentrum',
            training: 'Schulungen',
            blog: 'AWS-Blog',
            faqs: 'FAQs',
            company: 'Unternehmen',
            aboutUs: 'Über uns',
            leadership: 'Führungskräfte',
            careers: 'Karriere',
            press: 'Presse',
            partners: 'Partner',
            support: 'Support',
            techSupport: 'Technischer Support',
            billingSupport: 'Abrechnungssupport',
            forums: 'Foren',
            copyright: '© 2023, Amazon Web Services, Inc.',
            searchPlaceholder: 'Projekte durchsuchen...',
            noResults: 'Keine Projekte gefunden',
            projectsTitle: 'Ausgewählte Projekte',
            viewProject: 'Projekt ansehen'
        },
        espanol: {
            currentLanguage: 'Español',
            contactUs: 'Contáctenos',
            support: 'Soporte',
            myAccount: 'Mi Cuenta',
            accountSettings: 'Configuración de Cuenta',
            billing: 'Facturación',
            signOut: 'Cerrar Sesión',
            products: 'Productos',
            solutions: 'Soluciones',
            pricing: 'Precios',
            documentation: 'Documentación',
            learn: 'Aprender',
            signIn: 'Iniciar Sesión',
            createAccount: 'Crear Cuenta',
            title: 'Entendiendo los Protocolos API: SOAP vs. REST',
            subtitle: 'Descubra las principales diferencias entre las API SOAP y REST y aprenda a elegir el protocolo adecuado para sus aplicaciones.',
            soapTitle: 'Protocolo SOAP',
            soapDescription: 'SOAP (Protocolo Simple de Acceso a Objetos) es un protocolo estándar para intercambiar información estructurada en servicios web. Utiliza XML para el formato de mensaje y se basa en protocolos de capa de aplicación, más comúnmente HTTP o SMTP.',
            soapPoints: [
                'Estándares y especificaciones estrictas',
                'Manejo de errores incorporado',
                'Características de alta seguridad (WS-Security)',
                'Soporte para operaciones con estado'
            ],
            exploreSoap: 'Explorar Servicios SOAP',
            restTitle: 'Protocolo REST',
            restDescription: 'REST (Transferencia de Estado Representacional) es un estilo arquitectónico para diseñar aplicaciones en red. Utiliza métodos HTTP estándar (GET, POST, PUT, DELETE) y normalmente usa JSON para el formato de datos.',
            restPoints: [
                'Ligero y flexible',
                'Operaciones sin estado',
                'Respuestas almacenables en caché',
                'Fácil integración con tecnologías web'
            ],
            exploreRest: 'Explorar Servicios REST',
            comparisonTitle: 'SOAP vs. REST: Diferencias Clave',
            feature: 'Característica',
            soap: 'SOAP',
            rest: 'REST',
            comparisonRows: [
                { feature: 'Arquitectura', soap: 'Protocolo', rest: 'Estilo arquitectónico' },
                { feature: 'Formato de Datos', soap: 'Solo XML', rest: 'JSON, XML, HTML, texto plano' },
                { feature: 'Estándares', soap: 'Estándares estrictos (WSDL, SOAP)', rest: 'Sin estándares oficiales, usa HTTP' },
                { feature: 'Rendimiento', soap: 'Más lento debido al análisis XML', rest: 'Más rápido, especialmente con JSON' },
                { feature: 'Seguridad', soap: 'WS-Security, cumplimiento ACID', rest: 'HTTPS, OAuth' },
                { feature: 'Estado', soap: 'Operaciones con estado', rest: 'Operaciones sin estado' },
                { feature: 'Casos de Uso', soap: 'Aplicaciones empresariales, servicios financieros', rest: 'Servicios web, aplicaciones móviles, IoT' }
            ],
            ctaTitle: '¿Listo para construir su solución API?',
            ctaDescription: 'Ya sea que necesite la seguridad robusta de SOAP o la flexibilidad de REST, AWS tiene las herramientas y servicios para respaldar su desarrollo de API.',
            startTrial: 'Comenzar Prueba Gratuita',
            contactSales: 'Contactar Ventas',
            awsServices: 'Servicios AWS',
            compute: 'Cómputo',
            storage: 'Almacenamiento',
            databases: 'Bases de Datos',
            networking: 'Redes',
            security: 'Seguridad',
            resources: 'Recursos',
            devCenter: 'Centro de Desarrolladores',
            training: 'Capacitación',
            blog: 'Blog de AWS',
            faqs: 'Preguntas Frecuentes',
            company: 'Empresa',
            aboutUs: 'Sobre Nosotros',
            leadership: 'Liderazgo',
            careers: 'Carreras',
            press: 'Prensa',
            partners: 'Socios',
            techSupport: 'Soporte Técnico',
            billingSupport: 'Soporte de Facturación',
            forums: 'Foros',
            copyright: '© 2023, Amazon Web Services, Inc.',
            searchPlaceholder: 'Buscar proyectos...',
            noResults: 'No se encontraron proyectos',
            projectsTitle: 'Proyectos Destacados',
            viewProject: 'Ver Proyecto'
        },
        sanskrit: {
            currentLanguage: 'संस्कृतम्',
            contactUs: 'अस्मान् सम्पर्कयतु',
            support: 'सहायता',
            myAccount: 'मम खाता',
            accountSettings: 'खाता सेटिंग्स',
            billing: 'बिलिंग',
            signOut: 'साइन आउट',
            products: 'उत्पादानि',
            solutions: 'समाधानानि',
            pricing: 'मूल्यनिर्धारणम्',
            documentation: 'दस्तावेज़ीकरणम्',
            learn: 'अधिगच्छतु',
            signIn: 'साइन इन',
            createAccount: 'खाता निर्माणं कुरुत',
            title: 'API प्रोटोकॉलानां ज्ञानम्: SOAP vs. REST',
            subtitle: 'SOAP तथा REST API मध्ये मुख्यानि भेदानि ज्ञात्वा स्वीयानां अनुप्रयोगानां कृते उचितं प्रोटोकॉलं चयनं कुरुत।',
            soapTitle: 'SOAP प्रोटोकॉल',
            soapDescription: 'SOAP (सरल ऑब्जेक्ट एक्सेस प्रोटोकॉल) वेब सेवासु संरचित सूचनानां आदान-प्रदानस्य कृते प्रोटोकॉल मानकम् अस्ति। अयं संदेशरूपे XML उपयुक्त्वा अनुप्रयोगस्तरप्रोटोकॉल् उपजीवति, प्रायः HTTP वा SMTP।',
            soapPoints: [
                'कठोरानि मानकानि विशिष्टताः च',
                'अन्तर्निर्मितः त्रुटि प्रबन्धनम्',
                'उच्चसुरक्षा सुविधाः (WS-Security)',
                'अवस्थापूर्णक्रियाणां समर्थनम्'
            ],
            exploreSoap: 'SOAP सेवाः अन्वेषयतु',
            restTitle: 'REST प्रोटोकॉल',
            restDescription: 'REST (प्रतिनिधित्वावस्था हस्तान्तरणम्) जालीकृतानुप्रयोगानां रचनायाः कृते स्थापत्यशैलिः अस्ति। अयं मानक HTTP पद्धतीनां (GET, POST, PUT, DELETE) उपयोगं कृत्वा सामान्यतया दत्तरूपे JSON उपयुक्त्वा कार्यं करोति।',
            restPoints: [
                'लघुभारं च लचीलं च',
                'अवस्थारहिताः क्रियाः',
                'कैशयोग्याः प्रतिक्रियाः',
                'वेबप्रौद्योगिकीभिः सह सहजा एकीकरणम्'
            ],
            exploreRest: 'REST सेवाः अन्वेषयतु',
            comparisonTitle: 'SOAP vs. REST: मुख्यानि भेदानि',
            feature: 'विशेषता',
            soap: 'SOAP',
            rest: 'REST',
            comparisonRows: [
                { feature: 'स्थापत्यम्', soap: 'प्रोटोकॉल', rest: 'स्थापत्यशैलिः' },
                { feature: 'दत्तस्वरूपम्', soap: 'केवलं XML', rest: 'JSON, XML, HTML, सरलपाठ' },
                { feature: 'मानकानि', soap: 'कठोराणि मानकानि (WSDL, SOAP)', rest: 'न कोऽपि अधिकृतमानकः, HTTP उपयोगः' },
                { feature: 'प्रदर्शनम्', soap: 'XML विश्लेषणात् मन्दतरम्', rest: 'त्वरिततरम्, विशेषतः JSON सह' },
                { feature: 'सुरक्षा', soap: 'WS-Security, ACID अनुपालनम्', rest: 'HTTPS, OAuth' },
                { feature: 'अवस्था', soap: 'अवस्थापूर्णाः क्रियाः', rest: 'अवस्थारहिताः क्रियाः' },
                { feature: 'उपयोगप्रकरणानि', soap: 'उद्यमानुप्रयोगाः, वित्तीयसेवाः', rest: 'वेबसेवाः, मोबाइल अनुप्रयोगाः, IoT' }
            ],
            ctaTitle: 'तव API समाधानं निर्मातुं सज्जः असि?',
            ctaDescription: 'SOAP इत्यस्य दृढसुरक्षां वा REST इत्यस्य लचीलतां वा यदि त्वं अपेक्षसे, AWS तव API विकासस्य समर्थनार्थं साधनानि सेवाः च उपलब्धाः करोति।',
            startTrial: 'मुक्तपरीक्षणं प्रारभताम्',
            contactSales: 'विक्रयसम्पर्कः',
            awsServices: 'AWS सेवाः',
            compute: 'संगणनम्',
            storage: 'भण्डारणम्',
            databases: 'दत्तसङ्ग्रहाः',
            networking: 'नेटवर्किंग',
            security: 'सुरक्षा',
            resources: 'संसाधनानि',
            devCenter: 'विकासककेन्द्रम्',
            training: 'प्रशिक्षणम्',
            blog: 'AWS ब्लॉग',
            faqs: 'प्रायः पृच्छ्यमानाः प्रश्नाः',
            company: 'कम्पनी',
            aboutUs: 'अस्माकं विषये',
            leadership: 'नेतृत्वम्',
            careers: 'व्यवसायाः',
            press: 'प्रेस',
            partners: 'साझेदाराः',
            techSupport: 'तांत्रिकसमर्थनम्',
            billingSupport: 'बिलिंग समर्थनम्',
            forums: 'चर्चाकक्षाः',
            copyright: '© 2023, Amazon Web Services, Inc.',
            searchPlaceholder: 'प्रोजेक्टान् अन्विष्यतु...',
            noResults: 'न किमपि प्रोजेक्टं प्राप्तम्',
            projectsTitle: 'विशेषप्रोजेक्टाः',
            viewProject: 'प्रोजेक्टं दृष्ट्वा'
        },
        chinese: {
            currentLanguage: '中文',
            contactUs: '联系我们',
            support: '支持',
            myAccount: '我的账户',
            accountSettings: '账户设置',
            billing: '账单',
            signOut: '退出',
            products: '产品',
            solutions: '解决方案',
            pricing: '定价',
            documentation: '文档',
            learn: '学习',
            signIn: '登录',
            createAccount: '创建账户',
            title: '理解API协议：SOAP与REST',
            subtitle: '探索SOAP和REST API之间的主要区别，学习如何为您的应用程序选择正确的协议。',
            soapTitle: 'SOAP协议',
            soapDescription: 'SOAP（简单对象访问协议）是用于在Web服务中交换结构化信息的协议标准。它使用XML作为消息格式，并依赖于应用层协议，通常是HTTP或SMTP。',
            soapPoints: [
                '严格的标准和规范',
                '内置错误处理',
                '高级安全功能（WS-Security）',
                '支持有状态操作'
            ],
            exploreSoap: '探索SOAP服务',
            restTitle: 'REST协议',
            restDescription: 'REST（表征状态转移）是设计网络应用程序的架构风格。它使用标准HTTP方法（GET、POST、PUT、DELETE），通常使用JSON作为数据格式。',
            restPoints: [
                '轻量级且灵活',
                '无状态操作',
                '可缓存的响应',
                '与Web技术轻松集成'
            ],
            exploreRest: '探索REST服务',
            comparisonTitle: 'SOAP vs. REST：主要区别',
            feature: '特性',
            soap: 'SOAP',
            rest: 'REST',
            comparisonRows: [
                { feature: '架构', soap: '协议', rest: '架构风格' },
                { feature: '数据格式', soap: '仅XML', rest: 'JSON、XML、HTML、纯文本' },
                { feature: '标准', soap: '严格标准（WSDL、SOAP）', rest: '无官方标准，使用HTTP' },
                { feature: '性能', soap: '由于XML解析较慢', rest: '更快，特别是使用JSON时' },
                { feature: '安全性', soap: 'WS-Security、ACID合规', rest: 'HTTPS、OAuth' },
                { feature: '状态', soap: '有状态操作', rest: '无状态操作' },
                { feature: '使用场景', soap: '企业应用、金融服务', rest: 'Web服务、移动应用、物联网' }
            ],
            ctaTitle: '准备好构建您的API解决方案了吗？',
            ctaDescription: '无论您需要SOAP的强大安全性还是REST的灵活性，AWS都提供支持API开发的工具和服务。',
            startTrial: '开始免费试用',
            contactSales: '联系销售',
            awsServices: 'AWS服务',
            compute: '计算',
            storage: '存储',
            databases: '数据库',
            networking: '网络',
            security: '安全',
            resources: '资源',
            devCenter: '开发者中心',
            training: '培训',
            blog: 'AWS博客',
            faqs: '常见问题',
            company: '公司',
            aboutUs: '关于我们',
            leadership: '领导团队',
            careers: '职业',
            press: '新闻',
            partners: '合作伙伴',
            techSupport: '技术支持',
            billingSupport: '账单支持',
            forums: '论坛',
            copyright: '© 2023, Amazon Web Services, Inc.',
            searchPlaceholder: '搜索项目...',
            noResults: '未找到项目',
            projectsTitle: '特色项目',
            viewProject: '查看项目'
        },
        arabic: {
            currentLanguage: 'العربية',
            contactUs: 'اتصل بنا',
            support: 'الدعم',
            myAccount: 'حسابي',
            accountSettings: 'إعدادات الحساب',
            billing: 'الفواتير',
            signOut: 'تسجيل الخروج',
            products: 'المنتجات',
            solutions: 'الحلول',
            pricing: 'التسعير',
            documentation: 'التوثيق',
            learn: 'تعلم',
            signIn: 'تسجيل الدخول',
            createAccount: 'إنشاء حساب',
            title: 'فهم بروتوكولات API: SOAP مقابل REST',
            subtitle: 'اكتشف الفروق الرئيسية بين واجهات برمجة التطبيقات SOAP وREST وتعلم كيفية اختيار البروتوكول المناسب لتطبيقاتك.',
            soapTitle: 'بروتوكول SOAP',
            soapDescription: 'SOAP (بروتوكول الوصول البسيط للكائنات) هو معيار بروتوكول لتبادل المعلومات المنظمة في خدمات الويب. يستخدم XML لتنسيق الرسائل ويعتمد على بروتوكولات طبقة التطبيق، غالبًا HTTP أو SMTP.',
            soapPoints: [
                'معايير ومواصفات صارمة',
                'معالجة الأخطاء المدمجة',
                'ميزات أمان عالية (WS-Security)',
                'دعم العمليات ذات الحالة'
            ],
            exploreSoap: 'استكشاف خدمات SOAP',
            restTitle: 'بروتوكول REST',
            restDescription: 'REST (نقل الحالة التمثيلية) هو نمط معماري لتصميم التطبيقات الشبكية. يستخدم طرق HTTP القياسية (GET, POST, PUT, DELETE) ويستخدم عادة JSON لتنسيق البيانات.',
            restPoints: [
                'خفيف الوزن ومرن',
                'عمليات بدون حالة',
                'استجابات قابلة للتخزين المؤقت',
                'تكامل سهل مع تقنيات الويب'
            ],
            exploreRest: 'استكشاف خدمات REST',
            comparisonTitle: 'SOAP مقابل REST: الفروق الرئيسية',
            feature: 'الميزة',
            soap: 'SOAP',
            rest: 'REST',
            comparisonRows: [
                { feature: 'الهندسة المعمارية', soap: 'بروتوكول', rest: 'نمط معماري' },
                { feature: 'تنسيق البيانات', soap: 'XML فقط', rest: 'JSON، XML، HTML، نص عادي' },
                { feature: 'المعايير', soap: 'معايير صارمة (WSDL, SOAP)', rest: 'لا توجد معايير رسمية، يستخدم HTTP' },
                { feature: 'الأداء', soap: 'أبطأ بسبب تحليل XML', rest: 'أسرع، خاصة مع JSON' },
                { feature: 'الأمان', soap: 'WS-Security، توافق ACID', rest: 'HTTPS، OAuth' },
                { feature: 'الحالة', soap: 'عمليات ذات حالة', rest: 'عمليات بدون حالة' },
                { feature: 'حالات الاستخدام', soap: 'تطبيقات المؤسسات، الخدمات المالية', rest: 'خدمات الويب، التطبيقات المحمولة، إنترنت الأشياء' }
            ],
            ctaTitle: 'هل أنت مستعد لبناء حل API الخاص بك؟',
            ctaDescription: 'سواء كنت بحاجة إلى أمان SOAP القوي أو مرونة REST، توفر AWS الأدوات والخدمات لدعم تطوير API الخاص بك.',
            startTrial: 'ابدأ التجربة المجانية',
            contactSales: 'اتصل بالمبيعات',
            awsServices: 'خدمات AWS',
            compute: 'الحوسبة',
            storage: 'التخزين',
            databases: 'قواعد البيانات',
            networking: 'الشبكات',
            security: 'الأمان',
            resources: 'الموارد',
            devCenter: 'مركز المطورين',
            training: 'التدريب',
            blog: 'مدونة AWS',
            faqs: 'الأسئلة الشائعة',
            company: 'الشركة',
            aboutUs: 'نبذة عنا',
            leadership: 'القيادة',
            careers: 'الوظائف',
            press: 'المركز الإعلامي',
            partners: 'الشركاء',
            techSupport: 'الدعم الفني',
            billingSupport: 'دعم الفواتير',
            forums: 'المنتديات',
            copyright: '© 2023, Amazon Web Services, Inc.',
            searchPlaceholder: 'ابحث عن مشاريع...',
            noResults: 'لم يتم العثور على مشاريع',
            projectsTitle: 'مشاريع مميزة',
            viewProject: 'عرض المشروع'
        },
        russian: {
            currentLanguage: 'Русский',
            contactUs: 'Связаться с нами',
            support: 'Поддержка',
            myAccount: 'Мой аккаунт',
            accountSettings: 'Настройки аккаунта',
            billing: 'Биллинг',
            signOut: 'Выйти',
            products: 'Продукты',
            solutions: 'Решения',
            pricing: 'Цены',
            documentation: 'Документация',
            learn: 'Обучение',
            signIn: 'Войти',
            createAccount: 'Создать аккаунт',
            title: 'Понимание протоколов API: SOAP vs. REST',
            subtitle: 'Узнайте о ключевых различиях между SOAP и REST API и научитесь выбирать правильный протокол для ваших приложений.',
            soapTitle: 'Протокол SOAP',
            soapDescription: 'SOAP (Simple Object Access Protocol) — это стандарт протокола для обмена структурированной информацией в веб-службах. Он использует XML для формата сообщений и полагается на протоколы прикладного уровня, чаще всего HTTP или SMTP.',
            soapPoints: [
                'Строгие стандарты и спецификации',
                'Встроенная обработка ошибок',
                'Высокие функции безопасности (WS-Security)',
                'Поддержка операций с состоянием'
            ],
            exploreSoap: 'Исследовать SOAP-сервисы',
            restTitle: 'Протокол REST',
            restDescription: 'REST (Representational State Transfer) — это архитектурный стиль для проектирования сетевых приложений. Он использует стандартные методы HTTP (GET, POST, PUT, DELETE) и обычно использует JSON для формата данных.',
            restPoints: [
                'Лёгкий и гибкий',
                'Операции без состояния',
                'Кэшируемые ответы',
                'Простая интеграция с веб-технологиями'
            ],
            exploreRest: 'Исследовать REST-сервисы',
            comparisonTitle: 'SOAP vs. REST: Ключевые различия',
            feature: 'Функция',
            soap: 'SOAP',
            rest: 'REST',
            comparisonRows: [
                { feature: 'Архитектура', soap: 'Протокол', rest: 'Архитектурный стиль' },
                { feature: 'Формат данных', soap: 'Только XML', rest: 'JSON, XML, HTML, обычный текст' },
                { feature: 'Стандарты', soap: 'Строгие стандарты (WSDL, SOAP)', rest: 'Нет официальных стандартов, использует HTTP' },
                { feature: 'Производительность', soap: 'Медленнее из-за разбора XML', rest: 'Быстрее, особенно с JSON' },
                { feature: 'Безопасность', soap: 'WS-Security, соответствие ACID', rest: 'HTTPS, OAuth' },
                { feature: 'Состояние', soap: 'Операции с состоянием', rest: 'Операции без состояния' },
                { feature: 'Сценарии использования', soap: 'Корпоративные приложения, финансовые услуги', rest: 'Веб-сервисы, мобильные приложения, IoT' }
            ],
            ctaTitle: 'Готовы создать своё API-решение?',
            ctaDescription: 'Нужна ли вам надёжная безопасность SOAP или гибкость REST, у AWS есть инструменты и сервисы для поддержки вашей разработки API.',
            startTrial: 'Начать бесплатную пробную версию',
            contactSales: 'Связаться с продажами',
            awsServices: 'Сервисы AWS',
            compute: 'Вычисления',
            storage: 'Хранилище',
            databases: 'Базы данных',
            networking: 'Сети',
            security: 'Безопасность',
            resources: 'Ресурсы',
            devCenter: 'Центр разработчиков',
            training: 'Обучение',
            blog: 'Блог AWS',
            faqs: 'Часто задаваемые вопросы',
            company: 'Компания',
            aboutUs: 'О нас',
            leadership: 'Руководство',
            careers: 'Карьера',
            press: 'Пресса',
            partners: 'Партнёры',
            techSupport: 'Техническая поддержка',
            billingSupport: 'Поддержка по биллингу',
            forums: 'Форумы',
            copyright: '© 2023, Amazon Web Services, Inc.',
            searchPlaceholder: 'Поиск проектов...',
            noResults: 'Проекты не найдены',
            projectsTitle: 'Рекомендуемые проекты',
            viewProject: 'Посмотреть проект'
        }
    };
    
    const projectsData = [
        {
            id: 1,
            name: "E-Commerce API",
            description: "A complete REST API for online shopping platforms with payment integration.",
            keywords: ["ecommerce", "shopping", "payment"],
            url: "https://example.com/ecommerce-api",
            color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
        },
        {
            id: 2,
            name: "Weather Service",
            description: "SOAP-based weather forecasting service with global coverage.",
            keywords: ["weather", "forecast", "soap"],
            url: "https://example.com/weather-service",
            color: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)"
        },
        {
            id: 3,
            name: "Authentication System",
            description: "Secure authentication API with OAuth2 and JWT support.",
            keywords: ["auth", "security", "jwt"],
            url: "https://example.com/auth-system",
            color: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)"
        },
        {
            id: 4,
            name: "Analytics Dashboard",
            description: "Real-time analytics platform with RESTful API for data integration.",
            keywords: ["analytics", "dashboard", "data"],
            url: "https://example.com/analytics-dashboard",
            color: "linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)"
        },
        {
            id: 5,
            name: "Payment Gateway",
            description: "SOAP-based payment processing system with multiple currency support.",
            keywords: ["payment", "gateway", "soap"],
            url: "https://example.com/payment-gateway",
            color: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)"
        },
        {
            id: 6,
            name: "Social Media API",
            description: "REST API for social media integration with feed and messaging features.",
            keywords: ["social", "media", "rest"],
            url: "https://example.com/social-api",
            color: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)"
        }
    ];
    
    createApp({
        data() {
            return {
                currentLanguage: 'english',
                contentOpacity: 1,
                searchExpanded: false,
                searchQuery: '',
                highlightedProject: null,
                languages: {
                    english: { name: 'English', flag: 'us' },
                    deutsch: { name: 'Deutsch', flag: 'de' },
                    espanol: { name: 'Español', flag: 'es' },
                    sanskrit: { name: 'Sanskrit', flag: 'in' },
                    chinese: { name: '中文', flag: 'cn' },
                    arabic: { name: 'العربية', flag: 'sa' },
                    russian: { name: 'Русский', flag: 'ru' },
                },
                translations: translationsData,
                projects: projectsData
            }
        },
        computed: {
            filteredProjects() {
                if (!this.searchQuery) return [];
                const query = this.searchQuery.toLowerCase();
                return this.projects.filter(project => 
                    project.name.toLowerCase().includes(query) || 
                    project.description.toLowerCase().includes(query) ||
                    project.keywords.some(keyword => keyword.toLowerCase().includes(query))
                ).slice(0, 5);
            }
        },
        methods: {
            changeLanguage(lang) {
                this.contentOpacity = 0;
                setTimeout(() => {
                    this.currentLanguage = lang;
                    localStorage.setItem('preferredLanguage', lang);
                    this.contentOpacity = 1;
                }, 300);
            },
            toggleSearch() {
                this.searchExpanded = !this.searchExpanded;
                if (this.searchExpanded) {
                    this.$nextTick(() => {
                        this.$refs.searchInput?.focus();
                    });
                } else {
                    this.searchQuery = '';
                }
            },
            selectProject(project) {
                this.searchQuery = project.name;
                this.searchExpanded = false;
                this.highlightedProject = project.id;
                
                // Scroll to projects section
                setTimeout(() => {
                    const projectsSection = document.querySelector('.projects-section');
                    if (projectsSection) {
                        projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                    
                    // Remove highlight after 3 seconds
                    setTimeout(() => {
                        this.highlightedProject = null;
                    }, 3000);
                }, 100);
            },
            redirectToProject(project) {
                alert(`Redirecting to: ${project.url}\n\nIn a real application, this would navigate to the project page.`);
                // window.location.href = project.url;
            }
        },
        mounted() {
            // Load language preference from localStorage
            const savedLanguage = localStorage.getItem('preferredLanguage');
            if (savedLanguage && this.translations[savedLanguage]) {
                this.currentLanguage = savedLanguage;
            }
        }
    }).mount('#app');
    console.log("Languages:", Object.keys(translationsData));