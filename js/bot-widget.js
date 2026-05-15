/* ========================================
   BOT WIDGET
   Conversational demo bot for WhatsApp automation
   ======================================== */
(function () {
  'use strict';

  const BOT_NAME = 'RodriBot';
  const BOT_AVATAR = '🤖';
  const TYPING_DELAY = 800;

  // Knowledge base
  const KNOWLEDGE = [
    {
      keywords: ['precio', 'precios', 'cuanto', 'cuesta', 'costo', 'valor', 'plan', 'planes'],
      response: 'Los planes varían según el tamaño de tu tienda:\n\n• **Básico**: Ideal para empezar, hasta 500 conversaciones/mes.\n• **Pro**: Para tiendas en crecimiento, conversaciones ilimitadas + soporte prioritario.\n• **Enterprise**: Solución a medida con integraciones avanzadas.\n\n¿Querés que prepare una propuesta personalizada para tu negocio?',
      cta: { text: 'Solicitar presupuesto', href: 'https://wa.me/5492477614405?text=Hola%20Rodrigo,%20quiero%20un%20presupuesto%20para%20el%20Bot%20de%20WhatsApp' }
    },
    {
      keywords: ['funciona', 'como', 'cómo', 'funcionamiento', 'proceso', 'implementación', 'instalar'],
      response: 'El proceso es súper simple:\n\n1️⃣ **Conectamos tu tienda** (WooCommerce, Shopify, TiendaNube, etc.)\n2️⃣ **Configuramos el bot** con tus productos, precios y políticas\n3️⃣ **Empezás a vender automáticamente** 24/7\n\nLa implementación tarda entre 3 y 7 días hábiles.',
      cta: { text: 'Quiero mi bot', href: 'https://wa.me/5492477614405?text=Hola%20Rodrigo,%20quiero%20consultar%20por%20el%20Bot%20de%20WhatsApp' }
    },
    {
      keywords: ['tienda', 'plataforma', 'shopify', 'woocommerce', 'tiendanube', 'integra', 'integración', 'soporta'],
      response: 'El bot se integra con las principales plataformas:\n\n✅ WooCommerce\n✅ Shopify\n✅ TiendaNube\n✅ MercadoLibre\n✅ Y cualquier sistema que tenga API o webhooks\n\nSi usás otra plataforma, consultame que seguramente se puede integrar.',
      cta: { text: 'Consultar integración', href: 'https://wa.me/5492477614405?text=Hola%20Rodrigo,%20quiero%20consultar%20sobre%20integraciones' }
    },
    {
      keywords: ['whatsapp', 'contacto', 'hablar', 'rodrigo', 'humano', 'persona', 'agente'],
      response: 'Perfecto, te conecto con Rodrigo directamente. Hablale por WhatsApp y en minutos te responde con toda la info que necesitás.',
      cta: { text: 'Hablar con Rodrigo', href: 'https://wa.me/5492477614405?text=Hola%20Rodrigo,%20quiero%20consultar%20por%20el%20Bot%20de%20WhatsApp' }
    },
    {
      keywords: ['demo', 'probar', 'ejemplo', 'test', 'prueba'],
      response: '¡Esta conversación es una demo! 😄\n\nEn la landing completa del producto hay más info, capturas y detalles técnicos.',
      cta: { text: 'Ver landing completa', href: '/bot/' }
    },
    {
      keywords: ['hola', 'buenas', 'hey', 'hi', 'saludos'],
      response: '¡Hola! 👋 Soy la versión demo del asistente de Rodrigo.\n\nPuedo contarte sobre:\n• Precios y planes\n• Cómo funciona el bot\n• Integraciones con tu tienda\n• O ponerte en contacto directo con Rodrigo\n\n¿Sobre qué querés saber?'
    }
  ];

  const SUGGESTIONS = ['💰 Precios', '🛠️ Cómo funciona', '📱 Integraciones', '👤 Hablar con Rodrigo'];

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
      response: 'Entiendo. Para darte la mejor info, ¿querés que Rodrigo te contacte directamente? También podés ver la landing completa del producto.',
      cta: { text: 'Hablar con Rodrigo', href: 'https://wa.me/5492477614405?text=Hola%20Rodrigo,%20quiero%20consultar%20por%20el%20Bot%20de%20WhatsApp' },
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
        '<div style="padding:16px 20px;background:rgba(0,168,107,0.08);border-bottom:1px solid rgba(0,168,107,0.15);display:flex;align-items:center;gap:10px;">' +
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
      self.addBotMessage('¡Hola! 👋 Soy la demo del asistente de Rodrigo.\n\n¿Te interesa automatizar tu tienda con WhatsApp? Te cuento cómo funciona en 30 segundos.', SUGGESTIONS);
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
