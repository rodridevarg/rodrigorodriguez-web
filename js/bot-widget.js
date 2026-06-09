/* ========================================
   BOT WIDGET
   Conversational demo bot for medical secretary
   ======================================== */
(function () {
  'use strict';

  const BOT_NAME = 'Secretaria Virtual';
  const BOT_AVATAR = '🏥';
  const TYPING_DELAY = 900;

  // Knowledge base for Centro Medico Demostracion
  const KNOWLEDGE = [
    {
      keywords: ['turno', 'turnos', 'cita', 'agendar', 'sacar', 'reservar', 'quiero atencion', 'pedir turno'],
      response: 'Claro, con gusto te ayudo a sacar un turno. 👩‍⚕️\n\nPara agendarte necesito que me pases:\n1️⃣ Nombre completo\n2️⃣ DNI\n3️⃣ Obra social o prepaga (si tenés)\n4️⃣ Motivo de consulta (primera vez, control, etc.)\n\nUna vez que me lo pases, te propongo horarios disponibles en las próximas 48 a 72 horas.',
      cta: { text: 'Contactar por WhatsApp', href: 'https://wa.me/541123456789?text=Hola,%20quiero%20sacar%20un%20turno' }
    },
    {
      keywords: ['precio', 'precios', 'cuanto', 'cuesta', 'costo', 'valor', 'consulta', 'cuanto sale'],
      response: 'Estos son los valores de consulta (particular):\n\n• **Consulta general (primera vez)**: $25.000\n• **Consulta de control**: $18.000\n• **Check-up anual**: $30.000\n• **Consulta online (telemedicina)**: $15.000\n• **Certificado de aptitud física**: $8.000\n\n💳 Aceptamos efectivo (10% off), débito, crédito en 1 pago, transferencia y Mercado Pago.\n\nCon obra social el copago varía según tu plan. ¿Tenés obra social? Te digo el copago aproximado.',
      cta: { text: 'Ver obras sociales', href: '#demo' }
    },
    {
      keywords: ['obra social', 'obras sociales', 'prepaga', 'osde', 'swiss', 'galeno', 'medicus', 'pami', 'cobertura', 'iooma', 'sipssa'],
      response: 'Aceptamos las principales obras sociales y prepagas:\n\n✅ OSDE, Swiss Medical, Galeno, Medicus\n✅ Omint, Medifé, Sancor Seguros\n✅ PAMI (con autorización previa)\n✅ IOMA, SIPSSA, OSPJN, OSPE, APROSS, OSME\n\nEl copago varía según tu plan. Por ejemplo:\n• OSDE 210/310: sin copago\n• Galeno Oro: sin copago\n• Swiss Medical SMG: sin copago\n\n¿Qué obra social y plan tenés? Te confirmo el copago exacto.',
      cta: { text: 'Contactar por WhatsApp', href: 'https://wa.me/541123456789?text=Hola,%20quiero%20consultar%20por%20mi%20obra%20social' }
    },
    {
      keywords: ['horario', 'horarios', 'hora', 'atencion', 'atenden', 'abierto', 'cerrado', 'sabado', 'domingo', 'cuando abren'],
      response: 'Nuestros horarios de atención son:\n\n📅 **Lunes a viernes**: 8:00 a 20:00\n📅 **Sábados**: 9:00 a 13:00\n📅 **Domingos y feriados**: Cerrado\n\nTurnos por WhatsApp: respondemos de lunes a viernes de 7:00 a 21:00 y sábados de 8:00 a 14:00.\n\nFuera de horario, la Secretaria Virtual responde consultas simples al instante.',
      cta: { text: 'Pedir turno', href: 'https://wa.me/541123456789?text=Hola,%20quiero%20sacar%20un%20turno' }
    },
    {
      keywords: ['direccion', 'donde', 'ubicacion', 'ubicado', 'dirección', 'como llegar', 'dirección', 'mapa', 'calle'],
      response: '📍 **Av. Corrientes 1234, Piso 3, Oficina B, CABA**\nEntre Uruguay y Paraná.\n\n🚇 **Subte**: Línea B, estación Uruguay (2 cuadras) o Línea D, estación Tribunales (4 cuadras).\n🚌 **Colectivos**: 12, 59, 60, 152, 168.\n🚗 **Estacionamiento**: Convenio con el edificio (1 hora gratis con validación en recepción).',
      cta: { text: 'Ver en WhatsApp', href: 'https://wa.me/541123456789?text=Hola,%20quiero%20la%20dirección' }
    },
    {
      keywords: ['estudio', 'estudios', 'laboratorio', 'analisis', 'análisis', 'sangre', 'orina', 'electro', 'ecografia', 'radiografia', 'holter', 'preparacion', 'ayuno'],
      response: 'Los estudios se derivan a laboratorios y centros de imagen con convenio (a pocas cuadras). El médico te da la orden en la consulta.\n\n📋 **Preparación común**:\n• Análisis de sangre (colesterol, glucemia): ayuno de 8-12 horas.\n• Análisis de orina: primera muestra de la mañana.\n• Curva de tolerancia: ayuno de 10-12 horas + venir acompañado.\n\n⏱️ **Tiempos de resultado**:\n• Hemograma, glucemia, orina: 24 hs hábiles.\n• Perfil lipídico, tiroides: 48-72 hs hábiles.\n\nTe avisamos por WhatsApp cuando estén listos.',
      cta: { text: 'Solicitar turno', href: 'https://wa.me/541123456789?text=Hola,%20quiero%20un%20turno' }
    },
    {
      keywords: ['telemedicina', 'online', 'videollamada', 'consulta virtual', 'remota'],
      response: 'Sí, ofrecemos consulta online (telemedicina). 📱\n\nEs ideal para:\n✅ Seguimientos de patologías crónicas\n✅ Revisión de resultados de estudios\n✅ Renovación de recetas\n\n💰 Valor: $15.000\n⚠️ Requisito: haber tenido al menos una consulta presencial previa.\n\nTe enviamos un link de videollamada segura al momento del turno.',
      cta: { text: 'Pedir turno online', href: 'https://wa.me/541123456789?text=Hola,%20quiero%20un%20turno%20de%20telemedicina' }
    },
    {
      keywords: ['urgencia', 'urgencias', 'emergencia', 'dolor', 'grave', 'sangrado', 'accidente', 'guardia'],
      response: '⚠️ **Importante**: El Centro Médico Demostración **NO atiende urgencias ni emergencias**.\n\nSi tenés una emergencia médica:\n📞 Llamá al **107 SAME** o al **911**\n🏥 Acudí a la guardia del hospital más cercano\n\nUna vez estabilizada la situación, podés agendar una consulta de seguimiento con nosotros.',
      cta: { text: 'Guardias CABA', href: 'https://buenosaires.gob.ar/salud/centrosdesalud' }
    },
    {
      keywords: ['cancelar', 'reprogramar', 'cambiar turno', 'no puedo ir', 'mover turno'],
      response: 'Podés cancelar o reprogramar tu turno **con al menos 24 horas de anticipación** sin cargo.\n\nEscribinos por WhatsApp al +54 11 2345-6789 indicando tu nombre y la fecha/hora del turno original, y te proponemos nuevas opciones.\n\nSi cancelás con menos tiempo o no te presentás, podemos pedirte una seña para futuros turnos.',
      cta: { text: 'Contactar por WhatsApp', href: 'https://wa.me/541123456789?text=Hola,%20quiero%20reprogramar%20mi%20turno' }
    },
    {
      keywords: ['primera vez', 'primera visita', 'nuevo paciente', 'que llevo', 'que traigo', 'documentos'],
      response: 'Para tu primera consulta necesitás traer:\n\n🆔 Documento de identidad\n💳 Credencial de obra social o prepaga (si tenés)\n📄 Estudios previos relevantes (análisis, electrocardiogramas, etc.)\n💊 Lista de medicamentos que tomás actualmente\n📋 Historia clínica anterior (si cambiás de médico)\n\n⏰ Llegá 10 minutos antes para completar la ficha médica en recepción.\n\nLa consulta dura entre 30 y 45 minutos.',
      cta: { text: 'Sacar turno', href: 'https://wa.me/541123456789?text=Hola,%20soy%20nuevo%20paciente%20y%20quiero%20un%20turno' }
    },
    {
      keywords: ['contacto', 'whatsapp', 'telefono', 'email', 'mail', 'hablar', 'humano', 'secretaria', 'persona'],
      response: 'Podés contactarnos por estos medios:\n\n📱 **WhatsApp**: +54 11 2345-6789 (recomendado)\n☎️ **Teléfono**: +54 11 4567-8901\n📧 **Email**: turnos@centromedicodemo.com\n\nNuestra secretaria humana responde de lunes a viernes de 8:00 a 20:00 y sábados de 9:00 a 13:00.\n\nSi escribís por WhatsApp, la Secretaria Virtual responde al instante con información sobre turnos, obras sociales y más.',
      cta: { text: 'Escribir por WhatsApp', href: 'https://wa.me/541123456789?text=Hola,%20quiero%20hablar%20con%20la%20secretaria' }
    },
    {
      keywords: ['demo', 'probar', 'ejemplo', 'test', 'prueba', 'que es esto'],
      response: '¡Exacto! Esta es una **demo** del Centro Médico Demostración. 🏥\n\nEstás probando cómo respondería la Secretaria Virtual de un consultorio médico real: atendiendo turnos, obras sociales, preparación de estudios y más.\n\nSi te gusta cómo funciona, podemos configurarla para **tu propio consultorio**. Escribile a Rodrigo y te arma una demo personalizada con tus datos.',
      cta: { text: 'Quiero mi Secretaria Virtual', href: 'https://wa.me/5492477614405?text=Hola%20Rodrigo,%20soy%20medico%20y%20quiero%20agendar%20una%20reuni%C3%B3n%20para%20conocer%20la%20Secretaria%20Virtual' }
    },
    {
      keywords: ['hola', 'buenas', 'buen dia', 'buenas tardes', 'buenas noches', 'hey', 'saludos'],
      response: '¡Hola! 👋 Soy la Secretaria Virtual del Centro Médico Demostración.\n\nTe puedo ayudar con:\n• 🗓️ Turnos y reprogramaciones\n• 💳 Obras sociales y copagos\n• 💰 Precios de consultas\n• 🧪 Preparación para estudios de laboratorio\n• 🕐 Horarios de atención\n• 📍 Dirección y cómo llegar\n\n¿Sobre qué necesitás información?',
      cta: { text: 'Pedir turno', href: 'https://wa.me/541123456789?text=Hola,%20quiero%20sacar%20un%20turno' }
    }
  ];

  const SUGGESTIONS = ['🗓️ Sacar turno', '💳 Obras sociales', '💰 Precios', '🧪 Preparación estudios'];

  // Find best response
  function findResponse(text) {
    const clean = text.toLowerCase().trim();
    let bestMatch = null;
    let bestScore = 0;

    KNOWLEDGE.forEach(function (item) {
      let score = 0;
      item.keywords.forEach(function (kw) {
        if (clean.includes(kw)) score += 1;
      });
      if (score > bestScore) {
        bestScore = score;
        bestMatch = item;
      }
    });

    if (bestMatch && bestScore > 0) return bestMatch;

    // Default fallback
    return {
      response: 'Entiendo. Para darte la mejor atención, te sugiero escribirnos por WhatsApp al +54 11 2345-6789 o contactar directo a Rodrigo si querés una Secretaria Virtual para tu consultorio.',
      cta: { text: 'Contactar por WhatsApp', href: 'https://wa.me/541123456789?text=Hola,%20tengo%20una%20consulta' },
      fallback: true
    };
  }

  // Bot Widget Class
  function BotWidget(container, options) {
    options = options || {};
    this.container = container;
    this.isOpen = options.autoOpen || false;
    this.isEmbedded = options.embedded || false;
    this.messagesEl = null;
    this.inputEl = null;
    this.panelEl = null;
    this.init();
  }

  BotWidget.prototype.init = function () {
    if (this.isEmbedded) {
      this.renderEmbedded();
    } else {
      this.renderFloating();
    }
    this.bindEvents();
    if (this.isOpen) this.open();
  };

  BotWidget.prototype.renderEmbedded = function () {
    this.container.innerHTML =
      '<div class="bot-embedded">' +
        '<div class="bot-embedded__header">' +
          '<span class="bot-embedded__header-dot"></span>' +
          '<span class="bot-embedded__header-title">' + BOT_AVATAR + ' ' + BOT_NAME + '</span>' +
          '<span class="bot-embedded__header-status">En línea</span>' +
        '</div>' +
        '<div class="bot-embedded__messages" id="botMessages"></div>' +
        '<div class="bot-embedded__input-area">' +
          '<input type="text" class="bot-embedded__input" placeholder="Escribí tu mensaje..." id="botInput" />' +
          '<button class="bot-embedded__send" id="botSend" aria-label="Enviar">' +
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>' +
          '</button>' +
        '</div>' +
      '</div>';
    this.messagesEl = this.container.querySelector('#botMessages');
    this.inputEl = this.container.querySelector('#botInput');
  };

  BotWidget.prototype.renderFloating = function () {
    this.container.innerHTML =
      '<button class="bot-widget__toggle" id="botToggle" aria-label="Abrir chat">' +
        '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' +
      '</button>' +
      '<div class="bot-widget__panel" id="botPanel">' +
        '<div style="padding:16px 20px;background:rgba(168,85,247,0.08);border-bottom:1px solid rgba(168,85,247,0.15);display:flex;align-items:center;gap:10px;">' +
          '<span style="width:8px;height:8px;background:var(--accent);border-radius:50%;animation:pulseDot 2s infinite;"></span>' +
          '<span style="font-weight:600;font-size:0.95rem;">' + BOT_AVATAR + ' ' + BOT_NAME + '</span>' +
          '<span style="font-size:0.75rem;color:var(--accent);margin-left:auto;">En línea</span>' +
        '</div>' +
        '<div class="bot-embedded__messages" id="botMessages" style="max-height:320px;"></div>' +
        '<div class="bot-embedded__input-area">' +
          '<input type="text" class="bot-embedded__input" placeholder="Escribí tu mensaje..." id="botInput" />' +
          '<button class="bot-embedded__send" id="botSend" aria-label="Enviar">' +
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>' +
          '</button>' +
        '</div>' +
      '</div>';
    this.messagesEl = this.container.querySelector('#botMessages');
    this.inputEl = this.container.querySelector('#botInput');
    this.panelEl = this.container.querySelector('#botPanel');
    this.toggleEl = this.container.querySelector('#botToggle');
  };

  BotWidget.prototype.bindEvents = function () {
    const self = this;

    if (this.toggleEl) {
      this.toggleEl.addEventListener('click', function () {
        self.isOpen ? self.close() : self.open();
      });
    }

    function send() {
      const text = self.inputEl.value.trim();
      if (!text) return;
      self.addUserMessage(text);
      self.inputEl.value = '';
      self.processBotResponse(text);
    }

    this.inputEl.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') send();
    });

    this.container.querySelector('#botSend').addEventListener('click', send);

    // Initial greeting
    setTimeout(function () {
      self.addBotMessage('¡Hola! 👋 Soy la Secretaria Virtual del Centro Médico Demostración.\n\nProbá cómo atendería tu propio consultorio. Te puedo ayudar con turnos, obras sociales, precios y más.\n\n¿Sobre qué querés consultar?', SUGGESTIONS);
    }, this.isEmbedded ? 800 : 1200);
  };

  BotWidget.prototype.open = function () {
    this.isOpen = true;
    if (this.panelEl) this.panelEl.classList.add('is-open');
  };

  BotWidget.prototype.close = function () {
    this.isOpen = false;
    if (this.panelEl) this.panelEl.classList.remove('is-open');
  };

  BotWidget.prototype.addUserMessage = function (text) {
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble chat-bubble--user';
    bubble.style.alignSelf = 'flex-end';
    bubble.style.background = 'var(--bg-input)';
    bubble.style.border = '1px solid var(--border)';
    bubble.style.padding = '10px 14px';
    bubble.style.borderRadius = 'var(--radius-sm)';
    bubble.style.fontSize = '0.9rem';
    bubble.style.lineHeight = '1.5';
    bubble.style.maxWidth = '85%';
    bubble.textContent = text;
    this.messagesEl.appendChild(bubble);
    this.scrollToBottom();
  };

  BotWidget.prototype.addBotMessage = function (text, suggestions) {
    const self = this;

    // Show typing
    const typing = document.createElement('div');
    typing.className = 'chat-bubble chat-bubble--typing';
    typing.style.alignSelf = 'flex-start';
    typing.innerHTML = '<span></span><span></span><span></span>';
    this.messagesEl.appendChild(typing);
    this.scrollToBottom();

    setTimeout(function () {
      typing.remove();

      const bubble = document.createElement('div');
      bubble.className = 'chat-bubble chat-bubble--bot';
      bubble.style.alignSelf = 'flex-start';
      bubble.style.background = 'rgba(0, 168, 107, 0.12)';
      bubble.style.border = '1px solid rgba(0, 168, 107, 0.2)';
      bubble.style.padding = '12px 16px';
      bubble.style.borderRadius = 'var(--radius-sm)';
      bubble.style.fontSize = '0.9rem';
      bubble.style.lineHeight = '1.6';
      bubble.style.maxWidth = '90%';
      bubble.style.whiteSpace = 'pre-line';
      bubble.innerHTML = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      self.messagesEl.appendChild(bubble);

      // Suggestions
      if (suggestions && suggestions.length) {
        const chips = document.createElement('div');
        chips.style.display = 'flex';
        chips.style.flexWrap = 'wrap';
        chips.style.gap = '6px';
        chips.style.marginTop = '8px';
        chips.style.alignSelf = 'flex-start';
        chips.style.maxWidth = '95%';

        suggestions.forEach(function (s) {
          const chip = document.createElement('button');
          chip.className = 'bot-chip';
          chip.textContent = s;
          chip.addEventListener('click', function () {
            self.addUserMessage(s);
            self.processBotResponse(s);
          });
          chips.appendChild(chip);
        });
        self.messagesEl.appendChild(chips);
      }

      self.scrollToBottom();
    }, TYPING_DELAY);
  };

  BotWidget.prototype.processBotResponse = function (text) {
    const match = findResponse(text);
    const suggestions = match.fallback ? SUGGESTIONS : [];
    this.addBotMessage(match.response, suggestions);

    // Append CTA link after a delay if present
    if (match.cta) {
      const self = this;
      setTimeout(function () {
        const cta = document.createElement('a');
        cta.href = match.cta.href;
        cta.className = 'btn btn--primary';
        cta.style.marginTop = '12px';
        cta.style.alignSelf = 'flex-start';
        cta.style.fontSize = '0.85rem';
        cta.style.padding = '10px 18px';
        cta.textContent = match.cta.text;
        if (match.cta.href.startsWith('http')) {
          cta.target = '_blank';
          cta.rel = 'noopener noreferrer';
        }
        self.messagesEl.appendChild(cta);
        self.scrollToBottom();
      }, TYPING_DELAY + 200);
    }
  };

  BotWidget.prototype.scrollToBottom = function () {
    if (this.messagesEl) {
      this.messagesEl.scrollTop = this.messagesEl.scrollHeight;
    }
  };

  // Expose
  window.BotWidget = BotWidget;

  // Auto-init embedded widgets
  document.querySelectorAll('[data-bot-widget]').forEach(function (el) {
    new BotWidget(el, { embedded: true, autoOpen: true });
  });

  // Auto-init floating widgets
  document.querySelectorAll('[data-bot-float]').forEach(function (el) {
    const autoOpen = el.hasAttribute('data-bot-autoopen');
    new BotWidget(el, { embedded: false, autoOpen: autoOpen });
  });
})();
