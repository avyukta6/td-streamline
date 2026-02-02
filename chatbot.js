// TD Streamline Chatbot Logic

class TDStreamlineChatbot {
    constructor() {
        this.toggle = document.getElementById('chatbotToggle');
        this.widget = document.querySelector('.chatbot-widget');
        this.messagesContainer = document.getElementById('chatbotMessages');
        this.input = document.getElementById('chatInput');
        this.sendBtn = document.getElementById('chatSend');
        this.closeBtn = document.getElementById('chatbotClose');
        this.isOpen = false;

        this.initializeEventListeners();
        this.responses = this.loadResponses();
    }

    initializeEventListeners() {
        this.toggle.addEventListener('click', () => this.toggleChatbot());
        this.sendBtn.addEventListener('click', () => this.sendMessage());
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });
        this.closeBtn.addEventListener('click', () => this.closeChatbot());
    }

    toggleChatbot() {
        this.isOpen ? this.closeChatbot() : this.openChatbot();
    }

    openChatbot() {
        this.isOpen = true;
        this.widget.classList.add('active');
        this.input.focus();
        this.removeBadge();
    }

    closeChatbot() {
        this.isOpen = false;
        this.widget.classList.remove('active');
    }

    removeBadge() {
        const badge = this.toggle.querySelector('.badge');
        if (badge) {
            badge.style.display = 'none';
        }
    }

    sendMessage() {
        const message = this.input.value.trim();
        if (!message) return;

        // Add user message
        this.addMessage(message, 'user');
        this.input.value = '';

        // Show typing indicator
        this.showTypingIndicator();

        // Get bot response
        setTimeout(() => {
            const response = this.getBotResponse(message);
            this.removeTypingIndicator();
            this.addMessage(response, 'bot');
        }, 500 + Math.random() * 1000);
    }

    addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;

        if (sender === 'bot') {
            const p = document.createElement('p');
            p.textContent = text;
            messageDiv.appendChild(p);
        } else {
            const p = document.createElement('p');
            p.textContent = text;
            messageDiv.appendChild(p);
        }

        this.messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();
    }

    showTypingIndicator() {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message bot-message';
        messageDiv.innerHTML = '<div class="typing-indicator"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>';
        messageDiv.id = 'typing-indicator';
        this.messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();
    }

    removeTypingIndicator() {
        const typing = document.getElementById('typing-indicator');
        if (typing) typing.remove();
    }

    scrollToBottom() {
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }

    loadResponses() {
        return {
            // Greetings
            'hello': "Hello! 👋 I'm your TD Streamline Assistant. How can I help you today? You can ask me about loan eligibility, how our system works, interest rates, or the application process.",
            'hi': "Hey there! 👋 Welcome to TD Streamline. What would you like to know about our services?",
            'hey': "Hi! 👋 How can I assist you with TD Streamline today?",

            // Loan Related
            'loan': "Great question! TD Streamline offers personal loans ranging from $1,000 to $25,000. Our AI system can pre-qualify you instantly based on your credit history, spending patterns, and repayment behavior. Would you like to know about interest rates or the application process?",
            'loan eligibility': "To be eligible for a TD Streamline loan, we evaluate:\n• Your credit history\n• Spending patterns and financial behavior\n• Repayment history\n• Income verification\n\nOur AI analyzes these factors quickly to provide an instant pre-qualification. Applications flagged as higher-risk receive a personal review from our financial advisors.",
            'interest rate': "Our interest rates are dynamic and personalized! For well-qualified applicants, rates are competitive and close to prime. For applications flagged as higher-risk, rates may be 3-5% above prime. This allows us to manage risk while maximizing approvals. The exact rate depends on your financial profile.",
            'how much can i borrow': "You can borrow between $1,000 and $25,000 through TD Streamline. The exact amount depends on your creditworthiness, income, and financial profile as assessed by our AI system.",
            'application': "Our application process is simple and fast:\n1. Fill out our online form with your financial information\n2. Our AI instantly analyzes your profile\n3. Get a pre-qualification decision within minutes\n4. If flagged for review, a financial advisor will contact you\n5. Upon approval, receive funds quickly with flexible repayment options",
            'how long does approval take': "Most applications receive an instant AI pre-qualification decision within minutes! If your application requires manual review by a financial advisor, you'll typically hear back within 24-48 hours.",

            // AI & Personalization
            'personalization': "TD Streamline's AI Personalization Module analyzes:\n• Your spending patterns\n• Savings habits\n• Investment portfolio\n• Product usage\n\nThis helps us deliver personalized financial recommendations tailored to YOUR unique financial goals and needs.",
            'recommendations': "Our AI generates personalized recommendations for:\n• Savings accounts that match your goals\n• Investment products aligned with your risk tolerance\n• Credit products suited to your profile\n• Ways to optimize your spending and savings\n\nStudies show 15-20% of customers who receive our recommendations take up new products that genuinely improve their financial health.",
            'why personalized recommendations': "Because one-size-fits-all banking doesn't work! Every customer is unique. Our AI learns from your behavior to suggest products and strategies that actually matter to YOU, potentially helping you save more and reach your financial goals faster.",

            // Security & Trust
            'security': "Your security is our top priority! TD Streamline uses:\n• Bank-level encryption for all data\n• Secure AI processing with privacy compliance\n• Regular security audits\n• FDIC protection on deposits\n• Your data is never shared without consent",
            'privacy': "We take privacy seriously. Your personal data:\n• Is encrypted end-to-end\n• Is used only for your financial recommendations\n• Is never sold to third parties\n• Can be reviewed or deleted anytime\n• Follows all Canadian privacy regulations",

            // Products & Features
            'micro business': "TD Streamline isn't just for individuals! We offer specialized micro-business loans for entrepreneurs and small business owners. Same fast AI pre-qualification, tailored for business needs.",
            'early repayment': "Great question! You can repay your TD Streamline loan early without penalties. In fact, early repayment could improve your credit score! Ask about flexible repayment options during your application.",
            'mobile app': "You can manage your TD Streamline loan through:\n• Our mobile app (available on iOS and Android)\n• Online banking portal\n• Phone support from our team\nTrack payments, view statements, and access personalized recommendations anytime, anywhere.",

            // General Inquiry
            'what is td streamline': "TD Streamline is TD Bank's AI-powered banking solution designed to revolutionize how you access loans and financial services. We combine intelligent AI assessment with personalized recommendations to give you smarter banking. We offer fast pre-qualification, competitive rates, and recommendations tailored to your unique financial profile.",
            'why td': "TD Streamline combines the trust of TD Bank with cutting-edge AI technology:\n• 100+ years of banking expertise\n• Advanced AI for faster decisions\n• Personalized service\n• Competitive rates\n• Flexible loan options\n• Award-winning customer support",
            'tell me more': "I'd love to help! What aspect of TD Streamline interests you most?\n• Personal Loans\n• AI Pre-Qualification\n• Personalized Recommendations\n• Micro-Business Loans\n• Rates & Terms\n• Security & Privacy\n• Application Process",

            // Support
            'help': "I'm here to help! You can ask me about:\n• Loan products and amounts\n• How our AI works\n• Interest rates\n• Application process\n• Personalized recommendations\n• Security and privacy\n• Eligibility requirements\n• Account management\n\nWhat can I assist you with?",
            'contact': "You can reach our TD Streamline team:\n📞 Phone: 1-800-TD-STREAMLINE (1-800-837-8362)\n📧 Email: support@tdstreamline.ca\n💬 Live Chat: Available on our website\n🏦 In-branch: Visit any TD branch\n\nWe're here to help Monday-Friday, 8am-8pm ET!",
            'support': "Need help? We offer multiple support channels:\n• 24/7 Chatbot assistance (that's me!)\n• Phone support during business hours\n• Email support\n• In-branch consultations\n\nWhat do you need help with?",

            // Apply / Next Steps
            'apply': "Ready to apply? It's quick and easy!\n✓ Takes less than 5 minutes\n✓ No obligation\n✓ Instant decision\n\nClick 'Apply Now' on our website or ask me more questions first. What would you like to know before applying?",
            'start': "Let's get started! Would you like to:\n1. Begin your application\n2. Learn more about our rates\n3. Check your eligibility\n4. Speak with a financial advisor\n\nWhat interests you?",
        };
    }

    getBotResponse(userInput) {
        const input = userInput.toLowerCase().trim();

        // Check for exact matches first
        for (const [key, response] of Object.entries(this.responses)) {
            if (input === key) {
                return response;
            }
        }

        // Check for keyword matches
        for (const [key, response] of Object.entries(this.responses)) {
            if (input.includes(key) || key.includes(input.split(' ')[0])) {
                return response;
            }
        }

        // Check for partial matches
        const keywords = input.split(' ');
        for (const keyword of keywords) {
            for (const [key, response] of Object.entries(this.responses)) {
                if (key.includes(keyword) && keyword.length > 2) {
                    return response;
                }
            }
        }

        // Default responses for common patterns
        if (input.includes('thank')) {
            return "You're welcome! Feel free to ask if you have any other questions about TD Streamline. We're here to help! 😊";
        }
        if (input.includes('how are you') || input.includes('how are u')) {
            return "I'm doing great, thanks for asking! How can I help you with TD Streamline today?";
        }
        if (input.includes('bye') || input.includes('goodbye')) {
            return "Thanks for chatting with me! Remember, TD Streamline is here to make banking smarter and easier. Have a great day! 👋";
        }
        if (input.length < 3) {
            return "I didn't quite catch that. Could you provide a bit more detail? For example, you could ask about loans, rates, eligibility, or our application process.";
        }

        // Generic helpful response
        return `Great question! I might not have all the details about that specific topic. Here are some things I can help with:\n• Personal Loans ($1,000-$25,000)\n• AI Pre-Qualification Process\n• Interest Rates & Terms\n• Personalized Recommendations\n• Application Process\n• Security & Privacy\n\nWould you like to know more about any of these?`;
    }
}

// Initialize chatbot when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new TDStreamlineChatbot();
});
