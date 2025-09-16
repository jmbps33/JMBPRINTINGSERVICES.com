
        let cart = [];
        let cartTotal = 0;
        let allServices = [
            // ID Rush Services
            { name: 'ID RUSH 1', price: 40, category: 'ID Rush Services', description: 'Fast ID printing service', emoji: '⚡' },
            { name: 'ID RUSH 2', price: 50, category: 'ID Rush Services', description: 'Quick ID processing', emoji: '⚡' },
            { name: 'ID RUSH 3', price: 55, category: 'ID Rush Services', description: 'Premium ID service', emoji: '💎' },
            { name: 'ID RUSH 4', price: 55, category: 'ID Rush Services', description: 'Premium ID service', emoji: '💎' },
            { name: 'ID RUSH 5', price: 65, category: 'ID Rush Services', description: 'Premium ID service', emoji: '💎' },
            { name: 'ID RUSH 6', price: 65, category: 'ID Rush Services', description: 'Premium ID service', emoji: '💎' },
            { name: 'ID RUSH 7', price: 65, category: 'ID Rush Services', description: 'Premium ID service', emoji: '💎' },
            { name: 'ID RUSH 8', price: 65, category: 'ID Rush Services', description: 'Premium ID service', emoji: '💎' },
            
            // Photo Print Services
            { name: 'PHOTO PRINT 1', price: 70, category: 'Photo Print Services', description: 'High quality photo printing', emoji: '📷' },
            { name: 'PHOTO PRINT 2', price: 70, category: 'Photo Print Services', description: 'High quality photo printing', emoji: '📷' },
            { name: 'PHOTO PRINT 3', price: 75, category: 'Photo Print Services', description: 'Premium photo printing', emoji: '🌟' },
            { name: 'PHOTO PRINT 4', price: 85, category: 'Photo Print Services', description: 'Deluxe photo printing', emoji: '⭐' },
            { name: 'PHOTO PRINT 5', price: 85, category: 'Photo Print Services', description: 'Deluxe photo printing', emoji: '⭐' },
            { name: 'PHOTO PRINT 6', price: 85, category: 'Photo Print Services', description: 'Deluxe photo printing', emoji: '⭐' },
            { name: 'PHOTO PRINT 7', price: 60, category: 'Photo Print Services', description: 'Standard photo printing', emoji: '📸' },
            { name: 'PHOTO PRINT 8', price: 55, category: 'Photo Print Services', description: 'Basic photo printing', emoji: '📸' },
            { name: 'WALLET SIZE', price: 30, category: 'Photo Print Services', description: 'Small wallet-sized photos', emoji: '👛' },
            { name: 'ASA PHOTO', price: 35, category: 'Photo Print Services', description: 'Special ASA photo service', emoji: '📷' },
            
            // Document Printing
            { name: 'A4 (COLORED)', price: 7, category: 'Document Printing', description: 'A4 Full color printing', emoji: '🌈' },
            { name: 'A4 (B&W)', price: 6, category: 'Document Printing', description: 'A4 Black & White printing', emoji: '📄' },
            { name: 'SHORT (COLORED)', price: 7, category: 'Document Printing', description: 'Short bond colored printing', emoji: '🌈' },
            { name: 'SHORT (B&W)', price: 6, category: 'Document Printing', description: 'Short bond B&W printing', emoji: '📄' },
            { name: 'LONG (COLORED)', price: 7, category: 'Document Printing', description: 'Long bond colored printing', emoji: '🌈' },
            { name: 'LONG (B&W)', price: 6, category: 'Document Printing', description: 'Long bond B&W printing', emoji: '📄' },
            
            // Lamination Services
            { name: 'LAMINATE (ID)', price: 25, category: 'Lamination Services', description: 'ID size lamination', emoji: '🆔' },
            { name: 'LAMINATE (A4, SHORT DOCs.)', price: 35, category: 'Lamination Services', description: 'A4 and short document lamination', emoji: '📄' },
            { name: 'BOOKBINDING', price: 100, category: 'Lamination Services', description: 'Professional document binding', emoji: '📚' },
            
            // Document with Pictures
            { name: 'DOCUMENT PRINT (with PIC) FULL PAGE', price: 20, category: 'Document with Pictures', description: 'Full page document with pictures', emoji: '🖼️' },
            { name: 'DOCUMENT PRINT (with PIC) NOT FULL PAGE', price: 15, category: 'Document with Pictures', description: 'Partial page document with pictures', emoji: '🖼️' },
            
            // Special Services
            { name: 'BUSINESS CARD', price: 200, category: 'Special Services', description: 'Professional business cards', emoji: '💼' },
            { name: 'INVITATION', price: 200, category: 'Special Services', description: 'Custom event invitations', emoji: '💌' },
            { name: 'SOUVENIRS', price: 1000, category: 'Special Services', description: 'Custom souvenir items', emoji: '🎁' },
            { name: 'LOGO HD', price: 900, category: 'Special Services', description: 'High definition logo design', emoji: '🎨' },
            
            // Envelopes
            { name: 'PERSONALIZED ENVELOPES', price: 250, category: 'Envelopes', description: 'Custom designed envelopes', emoji: '✉️' },
            
            // ID Accessories
            { name: 'KEYCHAIN', price: 30, category: 'ID Accessories', description: 'Custom keychains', emoji: '🔑' },
            { name: 'ID LACE', price: 50, category: 'ID Accessories', description: 'ID lanyards and laces', emoji: '🏷️' },
            { name: 'PVC ID ONLY', price: 50, category: 'ID Accessories', description: 'PVC ID cards only', emoji: '🆔' },
            { name: 'PVC ID NAME TAGS', price: 30, category: 'ID Accessories', description: 'PVC name tags', emoji: '🏷️' },
            
            // Name Tags
            { name: 'NAME TAGS (LAMINATE) SMALL', price: 25, category: 'Name Tags', description: 'Small laminated name tags', emoji: '📛' },
            { name: 'NAME TAGS (LAMINATE) LARGE', price: 35, category: 'Name Tags', description: 'Large laminated name tags', emoji: '📛' },
            { name: 'BAG TAGS', price: 30, category: 'Name Tags', description: 'Custom bag tags', emoji: '🎒' }
        ];

        function searchServices(query) {
            const searchResults = document.getElementById('searchResults');
            const searchResultsContainer = document.getElementById('searchResultsContainer');
            const noResults = document.getElementById('noResults');
            const searchSuggestions = document.getElementById('searchSuggestions');
            
            if (!query.trim()) {
                searchResults.classList.add('hidden');
                searchSuggestions.classList.add('hidden');
                return;
            }
            
            const filteredServices = allServices.filter(service => 
                service.name.toLowerCase().includes(query.toLowerCase()) ||
                service.category.toLowerCase().includes(query.toLowerCase()) ||
                service.description.toLowerCase().includes(query.toLowerCase())
            );
            
            // Show search suggestions
            if (filteredServices.length > 0 && filteredServices.length <= 5) {
                searchSuggestions.classList.remove('hidden');
                searchSuggestions.innerHTML = filteredServices.map(service => `
                    <div class="p-3 hover:bg-white hover:bg-opacity-10 cursor-pointer transition-all" onclick="selectService('${service.name}')">
                        <div class="flex items-center space-x-3">
                            <span class="text-2xl">${service.emoji}</span>
                            <div>
                                <p class="text-white font-medium">${service.name}</p>
                                <p class="text-purple-200 text-sm">₱${service.price.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                `).join('');
            } else {
                searchSuggestions.classList.add('hidden');
            }
            
            searchResults.classList.remove('hidden');
            
            if (filteredServices.length === 0) {
                searchResultsContainer.innerHTML = '';
                noResults.classList.remove('hidden');
            } else {
                noResults.classList.add('hidden');
                searchResultsContainer.innerHTML = filteredServices.map(service => `
                    <div class="service-card glass-effect rounded-2xl p-8 bounce-in">
                        <div class="text-4xl mb-4">${service.emoji}</div>
                        <h4 class="font-bold text-xl mb-3 text-white">${service.name}</h4>
                        <p class="text-purple-200 text-sm mb-2">${service.description}</p>
                        <p class="text-purple-300 text-xs mb-6">${service.category}</p>
                        <div class="flex justify-between items-center">
                            <span class="price-tag">₱${service.price.toLocaleString()}</span>
                            <button onclick="${service.name === 'LOGO HD' ? 'openLogoForm()' : `addToCart('${service.name}', ${service.price})`}" class="bg-white text-purple-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all button-3d pulse-animation">
                                ${service.name === 'LOGO HD' ? 'Order Now' : 'Add to Cart'}
                            </button>
                        </div>
                    </div>
                `).join('');
                
                // Auto scroll to search results
                setTimeout(() => {
                    searchResults.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
        
        function selectService(serviceName) {
            const service = allServices.find(s => s.name === serviceName);
            if (service) {
                document.getElementById('searchInput').value = serviceName;
                document.getElementById('searchSuggestions').classList.add('hidden');
                
                // Find and scroll to the service in the main sections
                const serviceElements = document.querySelectorAll('.service-card h4');
                for (let element of serviceElements) {
                    if (element.textContent.trim() === serviceName) {
                        element.closest('.service-card').scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'center' 
                        });
                        element.closest('.service-card').classList.add('pulse-animation');
                        setTimeout(() => {
                            element.closest('.service-card').classList.remove('pulse-animation');
                        }, 2000);
                        break;
                    }
                }
            }
        }
        
        function handleSearchEnter(event) {
            if (event.key === 'Enter') {
                const query = event.target.value.trim();
                if (query) {
                    const matchedService = allServices.find(service => 
                        service.name.toLowerCase().includes(query.toLowerCase())
                    );
                    if (matchedService) {
                        selectService(matchedService.name);
                    }
                }
            }
        }

        function clearSearch() {
            document.getElementById('searchInput').value = '';
            document.getElementById('searchResults').classList.add('hidden');
        }

        function addToCart(serviceName, price) {
            const existingItem = cart.find(item => item.name === serviceName);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    name: serviceName,
                    price: price,
                    quantity: 1
                });
            }
            
            updateCartDisplay();
            showNotification(`${serviceName} added to cart!`);
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCartDisplay();
        }

        function updateQuantity(index, change) {
            cart[index].quantity += change;
            if (cart[index].quantity <= 0) {
                removeFromCart(index);
            } else {
                updateCartDisplay();
            }
        }

        function updateCartDisplay() {
            const cartCount = document.getElementById('cartCount');
            const cartItems = document.getElementById('cartItems');
            const cartTotalElement = document.getElementById('cartTotal');
            const checkoutBtn = document.getElementById('checkoutBtn');
            
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            
            cartCount.textContent = totalItems;
            cartTotalElement.textContent = `₱${cartTotal.toLocaleString()}`;
            
            if (cart.length === 0) {
                cartItems.innerHTML = '<p class="text-purple-200 text-center py-12 text-xl">Your cart is empty</p>';
                checkoutBtn.disabled = true;
            } else {
                cartItems.innerHTML = cart.map((item, index) => `
                    <div class="glass-effect rounded-2xl p-6 flex justify-between items-center">
                        <div>
                            <h4 class="font-bold text-white text-lg">${item.name}</h4>
                            <p class="text-purple-200">₱${item.price.toLocaleString()} each</p>
                        </div>
                        <div class="flex items-center space-x-4">
                            <button onclick="updateQuantity(${index}, -1)" class="bg-red-500 text-white w-10 h-10 rounded-full hover:bg-red-600 button-3d font-bold">-</button>
                            <span class="font-bold text-white text-lg">${item.quantity}</span>
                            <button onclick="updateQuantity(${index}, 1)" class="bg-green-500 text-white w-10 h-10 rounded-full hover:bg-green-600 button-3d font-bold">+</button>
                            <button onclick="removeFromCart(${index})" class="bg-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-600 button-3d">Remove</button>
                        </div>
                    </div>
                `).join('');
                checkoutBtn.disabled = false;
            }
        }

        function toggleCart() {
            const cartModal = document.getElementById('cartModal');
            cartModal.classList.toggle('hidden');
        }

        function proceedToCheckout() {
            document.getElementById('cartModal').classList.add('hidden');
            document.getElementById('checkoutModal').classList.remove('hidden');
            document.getElementById('checkoutTotal').textContent = `₱${cartTotal.toLocaleString()}`;
        }

        function closeCheckout() {
            document.getElementById('checkoutModal').classList.add('hidden');
        }

        function confirmOrder() {
            const orderDetails = cart.map(item => `${item.name} x${item.quantity} - ₱${(item.price * item.quantity).toLocaleString()}`).join('\n');
            const emailBody = `New Order from JMB Printing Services Website:\n\n${orderDetails}\n\nTotal: ₱${cartTotal.toLocaleString()}\n\nPayment Instructions:\nGCash: 09931109148 (Jorenz M. Balbuena)\nBPI: 0909317916 (Jorenz M. Balbuena)\n\nPlease contact the customer for payment confirmation and delivery details.`;
            
            const mailtoLink = `mailto:jmbprintingservices12@gmail.com?subject=New Order - ₱${cartTotal.toLocaleString()}&body=${encodeURIComponent(emailBody)}`;
            window.location.href = mailtoLink;
            
            showNotification('Order confirmed! Email client opened. Please send the email to complete your order.');
            cart = [];
            updateCartDisplay();
            closeCheckout();
        }

        function openPromoRegistration() {
            document.getElementById('promoModal').classList.remove('hidden');
        }

        function closePromoRegistration() {
            document.getElementById('promoModal').classList.add('hidden');
        }

        function openLogoForm() {
            document.getElementById('logoModal').classList.remove('hidden');
        }

        function closeLogoForm() {
            document.getElementById('logoModal').classList.add('hidden');
        }

        function showFAQ() {
            document.getElementById('faqModal').classList.remove('hidden');
        }

        function closeFAQ() {
            document.getElementById('faqModal').classList.add('hidden');
        }

        function showNotification(message) {
            const notification = document.createElement('div');
            notification.className = 'notification fixed top-24 right-6 bg-green-500 text-white px-6 py-4 rounded-full shadow-lg z-50';
            notification.textContent = message;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 3000);
        }

        function generateClaimStub(studentData) {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: [105, 148] // A6 size
            });

            // Set background color
            doc.setFillColor(102, 126, 234);
            doc.rect(0, 0, 105, 148, 'F');

            // Header
            doc.setTextColor(255, 255, 255);
            doc.setFontSize(16);
            doc.setFont(undefined, 'bold');
            doc.text('JMB PRINTING SERVICES', 52.5, 15, { align: 'center' });
            
            doc.setFontSize(10);
            doc.setFont(undefined, 'normal');
            doc.text('P1SO PR1NT PROMO', 52.5, 22, { align: 'center' });
            doc.text('CLAIM STUB', 52.5, 28, { align: 'center' });

            // Student details
            doc.setFontSize(8);
            doc.text('Name: ' + studentData.name, 10, 40);
            doc.text('Student ID: ' + studentData.studentId, 10, 47);
            doc.text('School: ' + studentData.school, 10, 54);
            doc.text('Grade Level: ' + studentData.gradeLevel, 10, 61);
            doc.text('Contact: ' + studentData.contact, 10, 68);
            
            if (studentData.posterDetails) {
                doc.text('Poster Details:', 10, 75);
                const splitText = doc.splitTextToSize(studentData.posterDetails, 85);
                doc.text(splitText, 10, 82);
            }

            // Footer
            doc.setFontSize(10);
            doc.setFont(undefined, 'bold');
            doc.text('Amount: ₱1.00', 52.5, 120, { align: 'center' });
            doc.text('Date: ' + new Date().toLocaleDateString(), 52.5, 128, { align: 'center' });
            doc.text('Balitoc, Calatagan, Batangas', 52.5, 135, { align: 'center' });

            // Save the PDF
            doc.save(`P1SO_PRINT_CLAIM_STUB_${studentData.name.replace(/\s+/g, '_')}.pdf`);
        }

        // Form submissions
        document.getElementById('promoForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const studentData = {
                name: document.getElementById('studentName').value,
                studentId: document.getElementById('studentId').value,
                school: document.getElementById('school').value,
                gradeLevel: document.getElementById('gradeLevel').value,
                contact: document.getElementById('contactNumber').value,
                posterDetails: document.getElementById('posterDetails').value
            };
            
            // Generate claim stub PDF
            generateClaimStub(studentData);
            
            // Send email to business
            const emailBody = `New P1SO PR1NT PROMO Registration:\n\nName: ${studentData.name}\nStudent ID: ${studentData.studentId}\nSchool: ${studentData.school}\nGrade Level: ${studentData.gradeLevel}\nContact: ${studentData.contact}\nPoster Details: ${studentData.posterDetails}\n\nAmount: ₱1.00`;
            
            const mailtoLink = `mailto:jmbprintingservices12@gmail.com?subject=P1SO PR1NT PROMO Registration - ${studentData.name}&body=${encodeURIComponent(emailBody)}`;
            window.location.href = mailtoLink;
            
            showNotification(`Registration submitted for ${studentData.name}! Claim stub downloaded and email sent.`);
            closePromoRegistration();
            this.reset();
        });

        document.getElementById('logoForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const logoData = {
                clientName: document.getElementById('logoClientName').value,
                contact: document.getElementById('logoContact').value,
                brandName: document.getElementById('brandName').value,
                description: document.getElementById('logoDescription').value
            };
            
            // Send detailed email first
            const emailBody = `New LOGO HD Design Order - Full Details:\n\nClient Name: ${logoData.clientName}\nContact: ${logoData.contact}\nBrand Name: ${logoData.brandName}\nDescription: ${logoData.description}\n\nPrice: ₱900.00\n\nPayment Instructions:\nGCash: 09931109148 (Jorenz M. Balbuena)\nBPI: 0909317916 (Jorenz M. Balbuena)\n\nPlease review the details and contact the client for any clarifications before proceeding with the design.`;
            
            const mailtoLink = `mailto:jmbprintingservices12@gmail.com?subject=LOGO HD Design Order - ${logoData.brandName}&body=${encodeURIComponent(emailBody)}`;
            window.location.href = mailtoLink;
            
            // Add to cart after sending email
            setTimeout(() => {
                const logoServiceName = `LOGO HD - ${logoData.brandName}`;
                addToCart(logoServiceName, 900);
                showNotification(`Logo design details sent! ${logoServiceName} added to cart.`);
                closeLogoForm();
                this.reset();
            }, 1000);
        });

        // Create floating particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 20;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                // Random size between 4px and 12px
                const size = Math.random() * 8 + 4;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                
                // Random position
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                
                // Random animation delay
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
                
                particlesContainer.appendChild(particle);
            }
        }
        
        // Initialize particles when page loads
        document.addEventListener('DOMContentLoaded', function() {
            createParticles();
            
            // Add staggered animations to service cards
            const serviceCards = document.querySelectorAll('.service-card');
            serviceCards.forEach((card, index) => {
                card.style.animationDelay = (index * 0.1) + 's';
            });
        });
        
        // Hide search suggestions when clicking outside
        document.addEventListener('click', function(event) {
            const searchContainer = event.target.closest('.relative');
            const searchSuggestions = document.getElementById('searchSuggestions');
            
            if (!searchContainer) {
                searchSuggestions.classList.add('hidden');
            }
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    

(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'97fd639386474ee0',t:'MTc1Nzk5NDUxNC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();