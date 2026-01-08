import { useTranslation } from 'react-i18next';

export function TermsOfService() {
    const { i18n } = useTranslation();
    const currentLang = i18n.language.split('-')[0];

    const content = {
        en: {
            title: "Terms of Service",
            lastUpdate: "Last Updated: January 7, 2026",
            sections: [
                {
                    title: "1. Acceptance of Terms",
                    content: "By downloading, installing, accessing, or using Bible Planner (\"the App\", \"the Service\"), you agree to be bound by these Terms of Service (\"Terms\"). If you do not agree to these Terms, please do not use the App."
                },
                {
                    title: "2. Description of Service",
                    content: "Bible Planner is a mobile and desktop application designed to help you plan and track your Bible reading progress. The App provides:",
                    list: [
                        "Reading Plans: Multiple reading plan types including books order and chronological order",
                        "Progress Tracking: Track reading progress at the book, chapter, and verse level",
                        "Weekly Organization: 52-week reading plans with weekly breakdowns",
                        "Theme Customization: Light and dark themes, Material You dynamic colors support, and custom theme selection",
                        "Multi-platform Support: Available on Android, iOS, and Web",
                        "Local Data Storage: All data is stored locally on your device",
                        "Pro Features (Optional Subscription):",
                        " - Create Unlimited Notes (Free plan limited to 3 notes)",
                    ]
                },
                {
                    title: "3. Subscriptions and Payments",
                    subsections: [
                        {
                            title: "3.1 Pro Subscription",
                            content: "Bible Planner offers an optional 'Pro' subscription with additional features. Subscriptions are available on a monthly or annual basis."
                        },
                        {
                            title: "3.2 Payment Processing",
                            content: "All payments are processed through the Apple App Store or Google Play Store. We use RevenueCat to manage and validate your subscription status."
                        },
                        {
                            title: "3.3 Management and Cancellation",
                            content: "You can manage or cancel your subscription at any time through your device's store settings (Apple ID or Google Account)."
                        }
                    ]
                },
                {
                    title: "4. User Rights",
                    subsections: [
                        {
                            title: "4.1 Right to Use",
                            content: "You have the right to download, install, and use the App for personal, non-commercial purposes in accordance with these Terms."
                        },
                        {
                            title: "4.2 Data Ownership and Control",
                            list: [
                                "You own all data you create using the App, including your reading progress, notes, and preferences",
                                "All your data is stored locally on your device and remains under your control",
                                "You have the right to delete your progress and data at any time through the App's built-in deletion functionality"
                            ]
                        },
                        {
                            title: "4.3 Privacy",
                            list: [
                                "The App operates offline-first and does not require an internet connection",
                                "Your data is stored locally on your device and is not transmitted to external servers",
                                "We do not collect, access, or share your personal data or reading progress"
                            ]
                        }
                    ]
                },
                {
                    title: "5. User Responsibilities",
                    subsections: [
                        {
                            title: "5.1 Appropriate Use",
                            content: "You agree to use the App only for lawful purposes and in accordance with these Terms. You agree not to:",
                            list: [
                                "Use the App for any commercial purpose without express written permission",
                                "Attempt to reverse engineer, decompile, or disassemble the App",
                                "Remove or alter any copyright, trademark, or other proprietary notices",
                                "Interfere with or disrupt the App's functionality",
                                "Use the App to violate any applicable laws or regulations"
                            ]
                        },
                        {
                            title: "5.2 Device and Account Security",
                            list: [
                                "You are responsible for maintaining the security of your device",
                                "You are responsible for backing up your data if you wish to preserve it, as the App stores data locally on your device",
                                "The App does not provide cloud backup services. Data loss due to device failure, uninstallation, or accidental deletion is not the responsibility of the App developers"
                            ]
                        },
                        {
                            title: "5.3 Accuracy of Information",
                            list: [
                                "You are responsible for the accuracy of any information you input into the App",
                                "The App is a tool to assist your Bible reading planning but does not guarantee the accuracy of Bible content, reading plans, or interpretations"
                            ]
                        }
                    ]
                },
                {
                    title: "6. Intellectual Property",
                    subsections: [
                        {
                            title: "6.1 App Content",
                            content: "The App, including its design, code, features, and user interface, is the property of the App developers and is protected by copyright and other intellectual property laws. The App is distributed under the MIT License, which allows for certain uses as specified in the license agreement."
                        },
                        {
                            title: "6.2 Bible Content",
                            content: "Bible texts and content displayed or referenced in the App are typically in the public domain or are used under appropriate licenses. The App does not claim ownership of Bible content itself."
                        },
                        {
                            title: "6.3 Third-Party Components",
                            content: "The App may incorporate third-party open-source libraries and components, which are used in accordance with their respective licenses."
                        }
                    ]
                },
                {
                    title: "7. Limitations of Liability",
                    subsections: [
                        {
                            title: "7.1 No Warranties",
                            content: "THE APP IS PROVIDED \"AS IS\" AND \"AS AVAILABLE\" WITHOUT ANY WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR ACCURACY. WE DO NOT WARRANT THAT:",
                            list: [
                                "The App will meet your requirements",
                                "The App will be uninterrupted, timely, secure, or error-free",
                                "The results obtained from using the App will be accurate or reliable",
                                "Any errors in the App will be corrected"
                            ]
                        },
                        {
                            title: "7.2 Data Loss",
                            content: "We are not responsible for any loss of data due to:",
                            list: [
                                "Device malfunction or failure",
                                "Uninstallation of the App",
                                "Operating system updates or changes",
                                "Accidental deletion by the user",
                                "Device loss or theft",
                                "Any other circumstances beyond our control"
                            ]
                        },
                        {
                            title: "7.3 Limitation of Liability",
                            content: "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE APP DEVELOPERS, CONTRIBUTORS, OR ANY RELATED PARTIES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES."
                        },
                        {
                            title: "7.4 Maximum Liability",
                            content: "IF, NOTWITHSTANDING THE ABOVE, WE ARE FOUND LIABLE FOR ANY DAMAGES RELATED TO THE APP, OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID TO USE THE APP (OR IF THE APP IS FREE, ZERO DOLLARS)."
                        }
                    ]
                },
                {
                    title: "8. Disclaimers",
                    subsections: [
                        {
                            title: "8.1 Spiritual Content",
                            content: "The App is a tool for planning and tracking Bible reading. It does not provide religious guidance, theological interpretation, or spiritual counseling."
                        },
                        {
                            title: "8.2 Accuracy Disclaimer",
                            content: "While we strive to provide accurate information, we do not guarantee the accuracy, completeness, or reliability of Bible text references, reading plan schedules, or progress tracking calculations."
                        },
                        {
                            title: "8.3 Platform Compatibility",
                            content: "The App may not be compatible with all devices or operating system versions. We are not responsible for compatibility issues or performance on unsupported platforms."
                        },
                        {
                            title: "8.4 Third-Party Services",
                            content: "The App operates primarily offline. If any third-party services are integrated in the future, we are not responsible for their availability, functionality, or content."
                        }
                    ]
                },
                {
                    title: "9. Modifications to Terms",
                    content: "We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting the updated Terms. Your continued use of the App after changes are posted constitutes your acceptance of the modified Terms."
                },
                {
                    title: "10. Modifications to the App",
                    content: "We reserve the right to modify, update, or discontinue any feature of the App at any time. We are under no obligation to maintain or update the App."
                },
                {
                    title: "11. Termination",
                    content: "You may stop using the App at any time by uninstalling it. We reserve the right to terminate or suspend your access to the App at any time, with or without cause or notice."
                },
                {
                    title: "12. Data Backup and Recovery",
                    content: "The App does not provide automatic cloud backup. You are solely responsible for backing up your data if you wish to preserve it."
                },
                {
                    title: "13. Indemnification",
                    content: "You agree to indemnify, defend, and hold harmless the App developers from any claims arising from your use of the App or violation of these Terms."
                },
                {
                    title: "14. Governing Law",
                    content: "These Terms shall be governed by and construed in accordance with applicable local laws."
                },
                {
                    title: "15. Severability",
                    content: "If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary."
                },
                {
                    title: "16. Entire Agreement",
                    content: "These Terms constitute the entire agreement between you and the App developers regarding the use of the App."
                },
                {
                    title: "17. Contact Information",
                    content: "If you have any questions about these Terms, please contact us through the appropriate channels (GitHub repository, etc)."
                },
                {
                    title: "18. Acknowledgment",
                    content: "BY USING THE APP, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS, UNDERSTAND THEM, AND AGREE TO BE BOUND BY THEM.",
                    highlight: true
                }
            ]
        },
        pt: {
            title: "Termos de Serviço",
            lastUpdate: "Última Atualização: 7 de janeiro de 2026",
            sections: [
                {
                    title: "1. Aceitação dos Termos",
                    content: "Ao baixar, instalar, acessar ou usar o Bible Planner (\"o App\", \"o Serviço\"), você concorda em ficar vinculado a estes Termos de Serviço (\"Termos\"). Se você não concorda com estes Termos, por favor, não use o App."
                },
                {
                    title: "2. Descrição do Serviço",
                    content: "O Bible Planner é um aplicativo móvel e desktop projetado para ajudá-lo a planejar e acompanhar seu progresso de leitura da Bíblia. O App oferece:",
                    list: [
                        "Planos de Leitura: Múltiplos tipos de planos de leitura, incluindo ordem dos livros e ordem cronológica",
                        "Acompanhamento de Progresso: Acompanhe o progresso da leitura no nível de livro, capítulo e versículo",
                        "Organização Semanal: Planos de leitura de 52 semanas com divisões semanais",
                        "Personalização de Tema: Temas claro e escuro, suporte a cores dinâmicas do Material You e seleção de tema personalizado",
                        "Suporte Multiplataforma: Disponível no Android, iOS e Web",
                        "Armazenamento de Dados Local: Todos os dados são armazenados localmente no seu dispositivo",
                        "Recursos Pro (Assinatura Opcional):",
                        " - Criar Notas Ilimitadas (Plano gratuito limitado a 3 notas)",
                    ]
                },
                {
                    title: "3. Assinaturas e Pagamentos",
                    subsections: [
                        {
                            title: "3.1 Assinatura Pro",
                            content: "O Bible Planner oferece uma assinatura opcional 'Pro' com recursos adicionais. As assinaturas estão disponíveis mensalmente ou anualmente."
                        },
                        {
                            title: "3.2 Processamento de Pagamento",
                            content: "Todos os pagamentos são processados através da Apple App Store ou Google Play Store. Utilizamos o RevenueCat para gerenciar e validar o status da sua assinatura."
                        },
                        {
                            title: "3.3 Gerenciamento e Cancelamento",
                            content: "Você pode gerenciar ou cancelar sua assinatura a qualquer momento através das configurações da loja do seu dispositivo (Apple ID ou conta do Google)."
                        }
                    ]
                },
                {
                    title: "4. Direitos do Usuário",
                    subsections: [
                        {
                            title: "4.1 Direito de Uso",
                            content: "Você tem o direito de baixar, instalar e usar o App para fins pessoais e não comerciais, de acordo com estes Termos."
                        },
                        {
                            title: "4.2 Propriedade e Controle de Dados",
                            list: [
                                "Você possui todos os dados que cria usando o App, incluindo seu progresso de leitura, notas e preferências",
                                "Todos os seus dados são armazenados localmente no seu dispositivo e permanecem sob seu controle",
                                "Você tem o direito de excluir seu progresso e dados a qualquer momento através da funcionalidade de exclusão integrada no App"
                            ]
                        },
                        {
                            title: "4.3 Privacidade",
                            list: [
                                "O App opera offline-first e não requer conexão com a internet",
                                "Seus dados são armazenados localmente no seu dispositivo e não são transmitidos para servidores externos",
                                "Nós não coletamos, acessamos ou compartilhamos seus dados pessoais ou progresso de leitura"
                            ]
                        }
                    ]
                },
                {
                    title: "5. Responsabilidades do Usuário",
                    subsections: [
                        {
                            title: "5.1 Uso Apropriado",
                            content: "Você concorda em usar o App apenas para fins legais e de acordo com estes Termos. Você concorda em não:",
                            list: [
                                "Usar o App para qualquer finalidade comercial sem permissão expressa por escrito",
                                "Tentar fazer engenharia reversa, descompilar ou desmontar o App",
                                "Remover ou alterar quaisquer avisos de direitos autorais, marcas registradas ou outros avisos de propriedade",
                                "Interferir ou interromper a funcionalidade do App",
                                "Usar o App para violar quaisquer leis ou regulamentos aplicáveis"
                            ]
                        },
                        {
                            title: "5.2 Segurança do Dispositivo e da Conta",
                            list: [
                                "Você é responsável por manter a segurança do seu dispositivo",
                                "Você é responsável por fazer backup de seus dados se desejar preservá-los, pois o App armazena dados localmente no seu dispositivo",
                                "O App não fornece serviços de backup em nuvem. A perda de dados devido a falha do dispositivo, desinstalação ou exclusão acidental não é responsabilidade dos desenvolvedores do App"
                            ]
                        },
                        {
                            title: "5.3 Precisão das Informações",
                            list: [
                                "Você é responsável pela precisão de qualquer informação que inserir no App",
                                "O App é uma ferramenta para auxiliar no planejamento da leitura da Bíblia, mas não garante a precisão do conteúdo da Bíblia, planos de leitura ou interpretações"
                            ]
                        }
                    ]
                },
                {
                    title: "6. Propriedade Intelectual",
                    subsections: [
                        {
                            title: "6.1 Conteúdo do App",
                            content: "O App, incluindo seu design, código, recursos e interface do usuário, é propriedade dos desenvolvedores do App e é protegido por direitos autorais e outras leis de propriedade intelectual. O App é distribuído sob a Licença MIT, que permite certos usos conforme especificado no acordo de licença."
                        },
                        {
                            title: "6.2 Conteúdo da Bíblia",
                            content: "Os textos bíblicos e o conteúdo exibido ou referenciado no App estão tipicamente em domínio público ou são usados sob licenças apropriadas. O App não reivindica a propriedade do próprio conteúdo da Bíblia."
                        },
                        {
                            title: "6.3 Componentes de Terceiros",
                            content: "O App pode incorporar bibliotecas e componentes de código aberto de terceiros, que são usados de acordo com suas respectivas licenças."
                        }
                    ]
                },
                {
                    title: "7. Limitações de Responsabilidade",
                    subsections: [
                        {
                            title: "7.1 Sem Garantias",
                            content: "O APP É FORNECIDO \"COMO ESTÁ\" E \"CONFORME DISPONÍVEL\" SEM QUAISQUER GARANTIAS DE QUALQUER TIPO, EXPRESSAS OU IMPLÍCITAS, INCLUINDO, MAS NÃO SE LIMITANDO A, GARANTIAS DE COMERCIABILIDADE, ADEQUAÇÃO A UM DETERMINADO FIM, NÃO VIOLAÇÃO OU PRECISÃO. NÓS NÃO GARANTIMOS QUE:",
                            list: [
                                "O App atenderá aos seus requisitos",
                                "O App será ininterrupto, oportuno, seguro ou livre de erros",
                                "Os resultados obtidos com o uso do App serão precisos ou confiáveis",
                                "Quaisquer erros no App serão corrigidos"
                            ]
                        },
                        {
                            title: "7.2 Perda de Dados",
                            content: "Não somos responsáveis por qualquer perda de dados devido a:",
                            list: [
                                "Mau funcionamento ou falha do dispositivo",
                                "Desinstalação do App",
                                "Atualizações ou alterações do sistema operacional",
                                "Exclusão acidental pelo usuário",
                                "Perda ou roubo do dispositivo",
                                "Quaisquer outras circunstâncias fora do nosso controle"
                            ]
                        },
                        {
                            title: "7.3 Limitação de Responsabilidade",
                            content: "ATÉ A MÁXIMA EXTENSÃO PERMITIDA PELA LEI APLICÁVEL, EM NENHUMA HIPÓTESE OS DESENVOLVEDORES DO APP, COLABORADORES OU QUAISQUER PARTES RELACIONADAS SERÃO RESPONSÁVEIS POR QUAISQUER DANOS INDIRETOS, INCIDENTAIS, ESPECIAIS, CONSEQUENCIAIS OU PUNITIVOS."
                        },
                        {
                            title: "7.4 Responsabilidade Máxima",
                            content: "SE, APESAR DO ACIMA EXPOSTO, FORMOS CONSIDERADOS RESPONSÁVEIS POR QUAISQUER DANOS RELACIONADOS AO APP, NOSSA RESPONSABILIDADE TOTAL NÃO EXCEDERÁ O VALOR QUE VOCÊ PAGOU PARA USAR O APP (OU SE O APP FOR GRATUITO, ZERO DÓLARES)."
                        }
                    ]
                },
                {
                    title: "8. Isenções de Responsabilidade",
                    subsections: [
                        {
                            title: "8.1 Conteúdo Espiritual",
                            content: "O App é uma ferramenta para planejar e acompanhar a leitura da Bíblia. Não fornece orientação religiosa, interpretação teológica ou aconselhamento espiritual."
                        },
                        {
                            title: "8.2 Isenção de Precisão",
                            content: "Embora nos esforcemos para fornecer informações precisas, não garantimos a precisão, integridade ou confiabilidade de referências bíblicas, cronogramas ou cálculos de progresso."
                        },
                        {
                            title: "8.3 Compatibilidade de Plataforma",
                            content: "O App pode não ser compatível com todos os dispositivos ou versões de sistemas operacionais. Não somos responsáveis por problemas de compatibilidade ou desempenho em plataformas não suportadas."
                        },
                        {
                            title: "8.4 Serviços de Terceiros",
                            content: "O App opera principalmente offline. Se quaisquer serviços de terceiros forem integrados no futuro, não somos responsáveis por sua disponibilidade, funcionalidade ou conteúdo."
                        }
                    ]
                },
                {
                    title: "9. Modificações aos Termos",
                    content: "Nós nos reservamos o direito de modificar estes Termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação. O uso continuado do App constitui aceitação dos Termos modificados."
                },
                {
                    title: "10. Modificações ao App",
                    content: "Nós nos reservamos o direito de modificar, atualizar ou descontinuar qualquer recurso do App a qualquer momento. Não temos obrigação de manter ou atualizar o App."
                },
                {
                    title: "11. Rescisão",
                    content: "Você pode parar de usar o App a qualquer momento desinstalando-o. Nós nos reservamos o direito de rescindir ou suspender seu acesso ao App a qualquer momento."
                },
                {
                    title: "12. Backup e Recuperação de Dados",
                    content: "O App não fornece backup automático em nuvem. Você é o único responsável por fazer backup de seus dados se desejar preservá-los."
                },
                {
                    title: "13. Indenização",
                    content: "Você concorda em indenizar e isentar os desenvolvedores do App de quaisquer reivindicações decorrentes do seu uso do App ou violação destes Termos."
                },
                {
                    title: "14. Lei Aplicável",
                    content: "Estes Termos serão regidos e interpretados de acordo com as leis locais aplicáveis."
                },
                {
                    title: "15. Divisibilidade",
                    content: "Se qualquer disposição destes Termos for considerada inexequível ou inválida, essa disposição será limitada ou eliminada na medida mínima necessária."
                },
                {
                    title: "16. Acordo Integral",
                    content: "Estes Termos constituem o acordo integral entre você e os desenvolvedores do App em relação ao uso do App."
                },
                {
                    title: "17. Informações de Contato",
                    content: "Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco através dos canais apropriados (repositório GitHub, etc)."
                },
                {
                    title: "18. Reconhecimento",
                    content: "AO USAR O APP, VOCÊ RECONHECE QUE LEU ESTES TERMOS, OS ENTENDEU E CONCORDA EM FICAR VINCULADO A ELES.",
                    highlight: true
                }
            ]
        },
        es: {
            title: "Términos de Servicio",
            lastUpdate: "Última Actualización: 7 de enero de 2026",
            sections: [
                {
                    title: "1. Aceptación de los Términos",
                    content: "Al descargar, instalar, acceder o utilizar Bible Planner (\"la App\", \"el Servicio\"), usted acepta estar sujeto a estos Términos de Servicio (\"Términos\"). Si no está de acuerdo con estos Términos, por favor no utilice la App."
                },
                {
                    title: "2. Descripción del Servicio",
                    content: "Bible Planner es una aplicación móvil y de escritorio diseñada para ayudarle a planificar y realizar un seguimiento de su progreso de lectura de la Biblia. La App proporciona:",
                    list: [
                        "Planes de Lectura: Múltiplos tipos de planes de lectura, incluyendo orden de libros y orden cronológico",
                        "Seguimiento de Progreso: Rastrea el progreso de la lectura a nivel de libro, capítulo y versículo",
                        "Organización Semanal: Planes de lectura de 52 semanas con desgloses semanales",
                        "Personalización de Tema: Temas claro y oscuro, soporte para colores dinámicos de Material You y selección de tema personalizado",
                        "Soporte Multiplataforma: Disponible en Android, iOS y Web",
                        "Almacenamiento de Datos Local: Todos los datos se almacenan localmente en su dispositivo",
                        "Funciones Pro (Suscripción Opcional):",
                        " - Crear Notas Ilimitadas (Plan gratuito limitado a 3 notas)",
                    ]
                },
                {
                    title: "3. Suscripciones y Pagos",
                    subsections: [
                        {
                            title: "3.1 Suscripción Pro",
                            content: "Bible Planner ofrece una suscripción opcional 'Pro' con funciones adicionales. Las suscripciones están disponibles de forma mensual o anual."
                        },
                        {
                            title: "3.2 Procesamiento de Pagos",
                            content: "Todos los pagos se procesan a través de Apple App Store o Google Play Store. Utilizamos RevenueCat para gestionar y validar el estado de su suscripción."
                        },
                        {
                            title: "3.3 Gestión y Cancelación",
                            content: "Puede gestionar o cancelar su suscripción en cualquier momento a través de los ajustes de la tienda de su dispositivo (Apple ID o cuenta de Google)."
                        }
                    ]
                },
                {
                    title: "4. Derechos del Usuario",
                    subsections: [
                        {
                            title: "4.1 Derecho de Uso",
                            content: "Usted tiene el derecho de descargar, instalar y utilizar la App para fines personales y no comerciales, de acuerdo con estos Términos."
                        },
                        {
                            title: "4.2 Propiedad y Control de Datos",
                            list: [
                                "Usted es dueño de todos los datos que crea utilizando la App, incluyendo su progreso de lectura, notas y preferencias",
                                "Todos sus datos se almacenan localmente en su dispositivo y permanecen bajo su control",
                                "Usted tiene el derecho de eliminar su progreso y datos en cualquier momento a través de la funcionalidad de eliminación integrada en la App"
                            ]
                        },
                        {
                            title: "4.3 Privacidad",
                            list: [
                                "La App funciona primero sin conexión (offline-first) y no requiere conexión a internet",
                                "Sus datos se almacenan localmente en su dispositivo y no se transmiten a servidores externos",
                                "No recopilamos, accedemos ni compartimos sus datos personales o progreso de lectura"
                            ]
                        }
                    ]
                },
                {
                    title: "5. Responsabilidades del Usuario",
                    subsections: [
                        {
                            title: "5.1 Uso Apropiado",
                            content: "Usted acepta utilizar la App solo para fines legales y de acuerdo con estos Términos. Usted acepta no:",
                            list: [
                                "Utilizar la App para cualquier propósito comercial sin permiso expreso por escrito",
                                "Intentar realizar ingeniería inversa, descompilar o desensamblar la App",
                                "Eliminar o alterar cualquier aviso de derechos de autor, marca registrada u otros avisos de propiedad",
                                "Interferir o interrumpir la funcionalidad de la App",
                                "Utilizar la App para violar cualquier ley o regulación aplicable"
                            ]
                        },
                        {
                            title: "5.2 Seguridad del Dispositivo y de la Cuenta",
                            list: [
                                "Usted es responsable de mantener la seguridad de su dispositivo",
                                "Usted es responsable de hacer una copia de seguridad de sus datos si desea conservarlos, ya que la App almacena datos localmente en su dispositivo",
                                "La App no proporciona servicios de copia de seguridad en la nube. La pérdida de datos debido a fallas del dispositivo, desinstalación o eliminación accidental no es responsabilidad de los desarrolladores de la App"
                            ]
                        },
                        {
                            title: "5.3 Precisión de la Información",
                            list: [
                                "Usted es responsable de la precisión de cualquier información que ingrese en la App",
                                "La App es una herramienta para ayudar en la planificación de su lectura bíblica, pero no garantiza la precisión del contenido de la Biblia, planes de lectura o interpretaciones"
                            ]
                        }
                    ]
                },
                {
                    title: "6. Propiedad Intelectual",
                    subsections: [
                        {
                            title: "6.1 Contenido de la App",
                            content: "La App, incluyendo su diseño, código, características e interfaz de usuario, es propiedad de los desarrolladores de la App y está protegida por derechos de autor y otras leyes de propiedad intelectual. La App se distribuye bajo la Licencia MIT, que permite ciertos usos según lo especificado en el acuerdo de licencia."
                        },
                        {
                            title: "6.2 Contenido de la Biblia",
                            content: "Los textos bíblicos y el contenido mostrado o referenciado en la App están típicamente en el dominio público o se utilizan bajo licencias apropiadas. La App no reclama la propiedad del contenido bíblico en sí."
                        },
                        {
                            title: "6.3 Componentes de Terceros",
                            content: "La App puede incorporar bibliotecas y componentes de código abierto de terceros, que se utilizan de acuerdo con sus respectivas licencias."
                        }
                    ]
                },
                {
                    title: "7. Limitaciones de Responsabilidad",
                    subsections: [
                        {
                            title: "7.1 Sin Garantías",
                            content: "LA APP SE PROPORCIONA \"TAL CUAL\" Y \"SEGÚN DISPONIBILIDAD\" SIN NINGUNA GARANTÍA DE NINGÚN TIPO, EXPRESA O IMPLÍCITA, INCLUYENDO PERO NO LIMITADO A GARANTÍAS DE COMERCIABILIDAD, IDONEIDAD PARA UN PROPÓSITO PARTICULAR, NO INFRACCIÓN O PRECISIÓN. NO GARANTIZAMOS QUE:",
                            list: [
                                "La App cumplirá con sus requisitos",
                                "La App será ininterrumpida, oportuna, segura o libre de errores",
                                "Los resultados obtenidos del uso de la App serán precisos o confiables",
                                "Cualquier error en la App será corregido"
                            ]
                        },
                        {
                            title: "7.2 Pérdida de Datos",
                            content: "No somos responsables de ninguna pérdida de datos debido a:",
                            list: [
                                "Mal funcionamiento o falla del dispositivo",
                                "Desinstalación de la App",
                                "Actualizaciones o cambios del sistema operativo",
                                "Eliminación accidental por parte del usuario",
                                "Pérdida o robo del dispositivo",
                                "Cualquier otra circunstancia fuera de nuestro control"
                            ]
                        },
                        {
                            title: "7.3 Limitación de Responsabilidad",
                            content: "EN LA MEDIDA MÁXIMA PERMITIDA POR LA LEY APLICABLE, EN NINGÚN CASO LOS DESARROLLADORES DE LA APP, COLABORADORES O CUALQUIER PARTE RELACIONADA SERÁN RESPONSABLES POR CUALQUIER DAÑO INDIRECTO, INCIDENTAL, ESPECIAL, CONSECUENTE O PUNITIVO."
                        },
                        {
                            title: "7.4 Responsabilidad Máxima",
                            content: "SI, A PESAR DE LO ANTERIOR, SE NOS ENCUENTRA RESPONSABLES POR CUALQUIER DAÑO RELACIONADO CON LA APP, NUESTRA RESPONSABILIDAD TOTAL NO EXCEDERÁ LA CANTIDAD QUE USTED PAGÓ POR USAR LA APP (O SI LA APP ES GRATUITA, CERO DÓLARES)."
                        }
                    ]
                },
                {
                    title: "8. Descargos de Responsabilidad",
                    subsections: [
                        {
                            title: "8.1 Contenido Espiritual",
                            content: "La App es una herramienta para planificar y rastrear la lectura de la Biblia. No proporciona orientación religiosa, interpretación teológica o asesoramiento espiritual."
                        },
                        {
                            title: "8.2 Descargo de Precisión",
                            content: "Aunque nos esforzamos por proporcionar información precisa, no garantizamos la precisión, integridad o confiabilidad de referencias bíblicas, horarios o cálculos de progreso."
                        },
                        {
                            title: "8.3 Compatibilidad de Plataforma",
                            content: "La App puede no ser compatible con todos los dispositivos o versiones de sistemas operativos. No somos responsables por problemas de compatibilidad o rendimiento en plataformas no soportadas."
                        },
                        {
                            title: "8.4 Servicios de Terceros",
                            content: "La App opera principalmente sin conexión. Si se integran servicios de terceros en el futuro, no somos responsables por su disponibilidad, funcionalidad o contenido."
                        }
                    ]
                },
                {
                    title: "9. Modificaciones a los Términos",
                    content: "Nos reservamos el derecho de modificar estos Términos en cualquier momento. Los cambios entrarán en vigencia inmediatamente después de la publicación. Su uso continuado de la App constituye su aceptación de los Términos modificados."
                },
                {
                    title: "10. Modificaciones a la App",
                    content: "Nos reservamos el derecho de modificar, actualizar o descontinuar cualquier función de la App en cualquier momento. No tenemos obligación de mantener o actualizar la App."
                },
                {
                    title: "11. Terminación",
                    content: "Usted puede dejar de usar la App en cualquier momento desinstalándola. Nos reservamos el derecho de terminar o suspender su acceso a la App en cualquier momento."
                },
                {
                    title: "12. Respaldo y Recuperación de Datos",
                    content: "La App no proporciona respaldo automático en la nube. Usted es el único responsable de hacer una copia de seguridad de sus datos."
                },
                {
                    title: "13. Indemnización",
                    content: "Usted acepta indemnizar y mantener indemne a los desarrolladores de la App de cualquier reclamación que surja de su uso de la App o violación de estos Términos."
                },
                {
                    title: "14. Ley Aplicable",
                    content: "Estos Términos se regirán e interpretarán de acuerdo con las leyes locales aplicables."
                },
                {
                    title: "15. Divisibilidad",
                    content: "Si alguna disposición de estos Términos se considera inaplicable o inválida, esa disposición se limitará o eliminará en la medida mínima necesaria."
                },
                {
                    title: "16. Acuerdo Completo",
                    content: "Estos Términos constituyen el acuerdo completo entre usted y los desarrolladores de la App con respecto al uso de la App."
                },
                {
                    title: "17. Información de Contacto",
                    content: "Si tiene alguna pregunta sobre estos Términos, comuníquese con nosotros a través de los canales apropiados (repositorio de GitHub, etc)."
                },
                {
                    title: "18. Reconocimiento",
                    content: "AL USAR LA APP, USTED RECONOCE QUE HA LEÍDO ESTOS TÉRMINOS, LOS ENTIENDE Y ACEPTA ESTAR OBLIGADO POR ELLOS.",
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
