import { useTranslation } from 'react-i18next';

export function PrivacyPolicy() {
    const { i18n } = useTranslation();
    const currentLang = i18n.language.split('-')[0];

    const content = {
        pt: {
            title: "Política de Privacidade",
            lastUpdate: "Última atualização: 2 de dezembro de 2025",
            sections: [
                {
                    title: "1. Introdução",
                    content: "Bem-vindo ao Bible Planner! Esta Política de Privacidade descreve como tratamos suas informações quando você utiliza nosso aplicativo. Respeitamos sua privacidade e estamos comprometidos em proteger seus dados pessoais."
                },
                {
                    title: "2. Informações que Coletamos",
                    subsections: [
                        {
                            title: "2.1 Dados de Uso do Aplicativo",
                            content: "O Bible Planner armazena localmente no seu dispositivo as seguintes informações relacionadas ao seu uso do aplicativo:",
                            list: [
                                "Progresso de Leitura: Status de leitura de livros, capítulos e versículos da Bíblia",
                                "Histórico de Leitura: Timestamps de quando você marcou passagens como lidas",
                                "Preferências do Usuário: Plano de leitura selecionado, tema visual escolhido (claro/escuro), preferências de cores dinâmicas (Material You)"
                            ]
                        },
                        {
                            title: "2.2 Dados que NÃO Coletamos",
                            content: "O Bible Planner NÃO coleta, armazena ou transmite:",
                            list: [
                                "Informações pessoais identificáveis (nome, e-mail, telefone, endereço)",
                                "Dados de localização",
                                "Informações de contatos",
                                "Dados de navegação na internet",
                                "Informações de outros aplicativos",
                                "Dados biométricos",
                                "Informações financeiras ou de pagamento"
                            ]
                        }
                    ]
                },
                {
                    title: "3. Como Utilizamos suas Informações",
                    content: "Todas as informações coletadas são utilizadas exclusivamente para:",
                    list: [
                        "Manter seu progresso de leitura bíblica",
                        "Personalizar sua experiência no aplicativo (tema, cores)",
                        "Melhorar a funcionalidade do aplicativo"
                    ]
                },
                {
                    title: "4. Armazenamento de Dados",
                    subsections: [
                        {
                            title: "4.1 Armazenamento Local",
                            content: "Todos os dados são armazenados exclusivamente no seu dispositivo usando Room Database e DataStore."
                        },
                        {
                            title: "4.2 Sem Transmissão de Dados",
                            content: "Importante: O Bible Planner não transmite, compartilha ou sincroniza seus dados com servidores externos ou serviços de terceiros. Todos os dados permanecem no seu dispositivo."
                        }
                    ]
                },
                {
                    title: "5. Compartilhamento de Dados",
                    content: "O Bible Planner não compartilha, vende ou transfere seus dados para terceiros."
                },
                {
                    title: "Resumo",
                    content: "O Bible Planner é um aplicativo que funciona completamente offline. Todos os seus dados de progresso e preferências são armazenados apenas no seu dispositivo e nunca são compartilhados ou transmitidos para terceiros. Não coletamos dados pessoais e não exibimos anúncios.",
                    highlight: true
                }
            ]
        },
        en: {
            title: "Privacy Policy",
            lastUpdate: "Last updated: December 2, 2025",
            sections: [
                {
                    title: "1. Introduction",
                    content: "Welcome to Bible Planner! This Privacy Policy describes how we handle your information when you use our application. We respect your privacy and are committed to protecting your personal data."
                },
                {
                    title: "2. Information We Collect",
                    subsections: [
                        {
                            title: "2.1 App Usage Data",
                            content: "Bible Planner stores the following information locally on your device:",
                            list: [
                                "Reading Progress: Reading status of Bible books, chapters, and verses",
                                "Reading History: Timestamps of when you marked passages as read",
                                "User Preferences: Selected reading plan, chosen visual theme (light/dark), dynamic color preferences (Material You)"
                            ]
                        },
                        {
                            title: "2.2 Data We DO NOT Collect",
                            content: "Bible Planner DOES NOT collect, store, or transmit:",
                            list: [
                                "Personally identifiable information (name, email, phone, address)",
                                "Location data",
                                "Contact information",
                                "Internet browsing data",
                                "Information from other apps",
                                "Biometric data",
                                "Financial or payment information"
                            ]
                        }
                    ]
                },
                {
                    title: "3. How We Use Your Information",
                    content: "All collected information is used exclusively to:",
                    list: [
                        "Maintain your Bible reading progress",
                        "Personalize your app experience (theme, colors)",
                        "Improve app functionality"
                    ]
                },
                {
                    title: "4. Data Storage",
                    subsections: [
                        {
                            title: "4.1 Local Storage",
                            content: "All data is stored exclusively on your device using Room Database and DataStore."
                        },
                        {
                            title: "4.2 No Data Transmission",
                            content: "Important: Bible Planner does not transmit, share, or sync your data with external servers or third-party services. All data remains on your device."
                        }
                    ]
                },
                {
                    title: "5. Data Sharing",
                    content: "Bible Planner does not share, sell, or transfer your data to third parties."
                },
                {
                    title: "Summary",
                    content: "Bible Planner is a completely offline application. All your progress and preference data is stored only on your device and is never shared or transmitted to third parties. We do not collect personal data and do not display ads.",
                    highlight: true
                }
            ]
        },
        es: {
            title: "Política de Privacidad",
            lastUpdate: "Última actualización: 2 de diciembre de 2025",
            sections: [
                {
                    title: "1. Introducción",
                    content: "¡Bienvenido a Bible Planner! Esta Política de Privacidad describe cómo manejamos su información cuando usa nuestra aplicación. Respetamos su privacidad y estamos comprometidos a proteger sus datos personales."
                },
                {
                    title: "2. Información que Recopilamos",
                    subsections: [
                        {
                            title: "2.1 Datos de Uso de la Aplicación",
                            content: "Bible Planner almacena localmente en su dispositivo la siguiente información:",
                            list: [
                                "Progreso de Lectura: Estado de lectura de libros, capítulos y versículos de la Biblia",
                                "Historial de Lectura: Marcas de tiempo de cuando marcó pasajes como leídos",
                                "Preferencias del Usuario: Plan de lectura seleccionado, tema visual elegido (claro/oscuro), preferencias de colores dinámicos (Material You)"
                            ]
                        },
                        {
                            title: "2.2 Datos que NO Recopilamos",
                            content: "Bible Planner NO recopila, almacena ni transmite:",
                            list: [
                                "Información personal identificable (nombre, correo, teléfono, dirección)",
                                "Datos de ubicación",
                                "Información de contactos",
                                "Datos de navegación por internet",
                                "Información de otras aplicaciones",
                                "Datos biométricos",
                                "Información financiera o de pago"
                            ]
                        }
                    ]
                },
                {
                    title: "3. Cómo Usamos su Información",
                    content: "Toda la información recopilada se utiliza exclusivamente para:",
                    list: [
                        "Mantener su progreso de lectura bíblica",
                        "Personalizar su experiencia en la aplicación (tema, colores)",
                        "Mejorar la funcionalidad de la aplicación"
                    ]
                },
                {
                    title: "4. Almacenamiento de Datos",
                    subsections: [
                        {
                            title: "4.1 Almacenamiento Local",
                            content: "Todos los datos se almacenan exclusivamente en su dispositivo usando Room Database y DataStore."
                        },
                        {
                            title: "4.2 Sin Transmisión de Datos",
                            content: "Importante: Bible Planner no transmite, comparte ni sincroniza sus datos con servidores externos o servicios de terceros. Todos los datos permanecen en su dispositivo."
                        }
                    ]
                },
                {
                    title: "5. Compartir Datos",
                    content: "Bible Planner no comparte, vende ni transfiere sus datos a terceros."
                },
                {
                    title: "Resumen",
                    content: "Bible Planner es una aplicación completamente offline. Todos sus datos de progreso y preferencias se almacenan solo en su dispositivo y nunca se comparten o transmiten a terceros. No recopilamos datos personales y no mostramos anuncios.",
                    highlight: true
                }
            ]
        }
    };

    const lang = content[currentLang as keyof typeof content] || content.en;

    return (
        <div style={{ padding: '4rem 0', minHeight: '100vh' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 className="animate-slide-up" style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--color-text)' }}>
                    {lang.title}
                </h1>
                <p className="animate-slide-up delay-100" style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '3rem' }}>
                    {lang.lastUpdate}
                </p>

                {lang.sections.map((section, index) => (
                    <div key={index} className="animate-slide-up" style={{ marginBottom: '2.5rem', animationDelay: `${(index + 2) * 0.1}s` }}>
                        <h2 style={{
                            fontSize: section.highlight ? '1.8rem' : '1.5rem',
                            marginBottom: '1rem',
                            color: section.highlight ? 'var(--color-primary)' : 'var(--color-text)',
                            fontWeight: section.highlight ? 700 : 600
                        }}>
                            {section.title}
                        </h2>

                        {section.content && (
                            <p style={{
                                lineHeight: 1.8,
                                color: 'var(--color-text-secondary)',
                                marginBottom: section.list ? '1rem' : 0,
                                backgroundColor: section.highlight ? 'var(--color-surface)' : 'transparent',
                                padding: section.highlight ? '1.5rem' : 0,
                                borderRadius: section.highlight ? '0.5rem' : 0,
                                border: section.highlight ? '1px solid var(--color-border)' : 'none'
                            }}>
                                {section.content}
                            </p>
                        )}

                        {section.list && (
                            <ul style={{ lineHeight: 1.8, color: 'var(--color-text-secondary)', paddingLeft: '1.5rem' }}>
                                {section.list.map((item, i) => (
                                    <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>
                                ))}
                            </ul>
                        )}

                        {section.subsections && section.subsections.map((subsection, subIndex) => (
                            <div key={subIndex} style={{ marginTop: '1.5rem', marginLeft: '1rem' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--color-text)', fontWeight: 600 }}>
                                    {subsection.title}
                                </h3>
                                <p style={{ lineHeight: 1.8, color: 'var(--color-text-secondary)', marginBottom: ('list' in subsection && subsection.list) ? '0.75rem' : 0 }}>
                                    {subsection.content}
                                </p>
                                {'list' in subsection && subsection.list && (
                                    <ul style={{ lineHeight: 1.8, color: 'var(--color-text-secondary)', paddingLeft: '1.5rem' }}>
                                        {subsection.list.map((item: string, i: number) => (
                                            <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
