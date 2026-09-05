export type PolicySlug =
  | 'consent-to-telehealth'
  | 'hipaa-notice'
  | 'terms-of-use'
  | 'provider-network'
  | 'fda-and-medical-disclaimer'
  | 'privacy-policy'

export type PolicyBlock =
  | { type: 'p'; text: string }
  | { type: 'h'; text: string }
  | { type: 'ul'; items: string[] }

export type PolicyDoc = {
  slug: PolicySlug
  href: string
  title: string
  navLabel: string
  eyebrow: string
  updated: string
  lead: string
  body: string
}

export const POLICIES: PolicyDoc[] = [  {
    slug: 'consent-to-telehealth',
    href: '/policies/consent-to-telehealth',
    title: 'Telehealth Consent',
    navLabel: 'Telehealth Consent',
    eyebrow: 'Informed consent',
    updated: 'August 31, 2026',
    lead: 'How telehealth services may be provided through the Novimid platform.',
    body: `This Telehealth Consent explains how telehealth services may be provided through the Novimid® platform. By using the Novimid® Services, completing an assessment, submitting information, or proceeding with provider review, you consent to receive care through telehealth where permitted by applicable law.
Novimid® is not a pharmacy and does not itself practice medicine. Medical services, if available, are provided by independent US-licensed providers or affiliated clinical partners.
1. What Telehealth Is
Telehealth is the delivery of health-related services and clinical information through electronic communications between a patient and a provider who are in different locations.
Telehealth may include online questionnaires, secure messaging, uploaded photos or documents, remote provider review, and other electronic communications. A live video or phone visit may not always be required unless requested by a provider or required by law.
2. Asynchronous Care
Care through Novimid® is often delivered asynchronously, meaning a US-licensed provider reviews your information and communicates with you at separate times rather than during a real-time visit.
Asynchronous telehealth may not be appropriate for all medical conditions. A provider may request more information, require a live consultation, decline treatment, or recommend in-person care.
3. Provider Review
The information you submit through assessments, intake forms, secure messages, and uploads is reviewed by an independent US-licensed provider to determine whether treatment is clinically appropriate for you.
Providers may ask follow-up questions, request additional information, or recommend alternative care, including in-person evaluation.
4. No Guarantee of Prescription
Completing an assessment, checkout, payment authorization, or account creation does not guarantee that treatment will be prescribed.
Prescription treatment, if any, is provided only after a US-licensed provider reviews your information and determines that treatment is clinically appropriate.
5. Potential Benefits of Telehealth
Potential benefits include more convenient access to licensed providers, the ability to receive care from a private location, reduced travel and wait times, and discreet communication about sensitive health concerns.
6. Potential Risks and Limitations
Telehealth has potential risks and limitations, including but not limited to: information transmitted may be insufficient to allow appropriate clinical decision-making; delays in evaluation or treatment may occur due to technology failures; and, in rare cases, security protocols could fail, causing a breach of privacy of personal health information.
A provider may determine that telehealth is not appropriate for your situation and may recommend in-person evaluation or care.
7. Your Responsibilities
You are responsible for providing complete, accurate, and current information, including medical history, medications, allergies, symptoms, and any changes in your health.
You agree to follow provider instructions, ask questions if anything is unclear, and notify your provider promptly of any new or worsening symptoms or side effects.
8. Emergency Care
If you are experiencing a medical emergency, call 911 or seek emergency medical care immediately. Novimid® should not be used for emergencies.
9. Medical Records and Privacy
Your information may become part of your medical record and may be shared with providers, pharmacies, fulfillment partners, payment processors, or service providers as described in the Privacy Policy and applicable notices.
Novimid® uses reasonable administrative, technical, and physical safeguards designed to protect your information.
10. Prescriptions and Pharmacy Fulfillment
If a provider determines that prescription treatment is clinically appropriate, a prescription may be sent to a licensed dispensing pharmacy, where permitted by law.
Final treatment, dose, formulation, and pricing may vary based on provider review, pharmacy availability, and applicable law.
11. Right to Decline or Withdraw Consent
You may decline or withdraw consent to telehealth at any time by discontinuing use of the Services or contacting support. Withdrawing consent may limit your ability to receive services through Novimid®.
12. State Availability
Services may not be available in all states. Available treatments, provider networks, and pharmacy partners may vary based on your location and applicable law.
13. Contact Us
Questions about this Telehealth Consent can be sent to support@novimid.com.
This Telehealth Consent is provided for informational purposes and should be reviewed by legal counsel before final publication.`,
  },
  {
    slug: 'hipaa-notice',
    href: '/policies/hipaa-notice',
    title: 'HIPAA Notice of Privacy Practices',
    navLabel: 'HIPAA Notice',
    eyebrow: 'Protected health information',
    updated: 'August 31, 2026',
    lead: 'How medical information about you may be used and disclosed, and how you can get access to it.',
    body: `This Notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully.
Uses and Disclosures
Your protected health information (“PHI”) may be used and disclosed for treatment (including provider review and pharmacy dispensing), payment, and healthcare operations, and as otherwise permitted or required by law.
Your Rights
You have the right to inspect and request a copy of your PHI, request amendments, request an accounting of disclosures, request restrictions and confidential communications, and receive a paper copy of this notice.
Our Responsibilities
We are required by law to maintain the privacy and security of your PHI, notify you following a breach of unsecured PHI, and follow the terms of the notice currently in effect.
Complaints and Contact
If you believe your privacy rights have been violated, you may file a complaint with us or with the US Department of Health and Human Services. You will not be retaliated against for filing a complaint.
Questions may be sent to privacy@novimid.com or support@novimid.com.
Novimid LLC
2111 Carnegie Ln, Redondo Beach, CA 90278
(310) 809-0912
This Notice is provided for informational purposes and should be reviewed by legal counsel before final publication.`,
  },
  {
    slug: 'terms-of-use',
    href: '/policies/terms-of-use',
    title: 'Terms of Use',
    navLabel: 'Terms of Use',
    eyebrow: 'Platform terms',
    updated: 'August 31, 2026',
    lead: 'Terms governing your access to Novimid websites, assessments, checkout, and related services.',
    body: `1. INTRODUCTION
These Terms of Use govern your access to and use of the websites, online services, assessments, checkout flows, patient-facing technology, communications, and related non-clinical services provided by Novimid LLC d/b/a Novimid  (the “Company,” “we,” “our,” or “us”) (collectively, the “Services”). By accessing or using the Services, you agree to these Terms.
2. ACCEPTANCE OF TERMS
By accessing or using the Services, you acknowledge that you have read, understood, and agree to be bound by these Terms, our Privacy Policy, and any additional disclosures, consents, or policies presented to you. If you do not agree, do not use the Services.
3. ABOUT THE SERVICES
The Company provides a technology and administrative platform that may connect eligible users with independent or affiliated U.S.-licensed healthcare providers, licensed pharmacies, laboratories, and other healthcare service providers. Unless expressly identified otherwise, the Company is not a medical practice or pharmacy and does not itself diagnose, treat, prescribe, dispense, manufacture, or compound medication.
Clinical services are provided by licensed healthcare providers practicing through one or more affiliated or contracted medical practices. Pharmacy services are provided by appropriately licensed pharmacy partners. The identity of the applicable clinical practice, treating provider, and dispensing pharmacy will be disclosed as required by applicable law and during the applicable care or fulfillment process.
Prescription treatment is available only after evaluation by a licensed healthcare provider and only when the provider determines, in the provider’s independent professional judgment, that treatment is clinically appropriate and legally permitted.
4. ELIGIBILITY AND PATIENT LOCATION
You must be at least 18 years old, be a resident of the United States, be physically located in a jurisdiction in which the applicable provider is authorized to provide care at the time clinical services are rendered, and be able to form a legally binding contract. By using the Services, you represent that you meet these requirements and that all information you provide, including your identity, age, location, contact information, and health information, is accurate, current, and complete.
You may be asked to verify your identity, age, location, or other eligibility information. The Company or a healthcare provider may suspend or decline access to the Services if required information cannot be verified.
5. NATIONWIDE AVAILABILITY AND SERVICE LIMITATIONS
Access to at least some Services is offered in all 50 U.S. states through affiliated or contracted healthcare providers and pharmacy partners, subject to applicable law, provider licensure, pharmacy authorization, patient eligibility, clinical appropriateness, and operational availability.
Nationwide availability does not mean that every provider, treatment category, medication, dosage form, laboratory service, pharmacy, shipping method, or subscription option is available in every state. Availability may change without notice. A provider may require a synchronous video or telephone consultation, laboratory testing, medical records, an in-person examination, or other information before making a treatment decision.
6. NOT FOR EMERGENCIES
The Services are not designed for medical emergencies. If you are experiencing a medical emergency, call 911 or seek emergency medical care immediately. Do not use the Services to communicate urgent or life-threatening symptoms.
7. SEPARATE MEDICAL AND PHARMACY SERVICES
The Company does not control or direct the independent clinical judgment of healthcare providers. Providers are solely responsible for evaluating patients, determining whether treatment is appropriate, issuing prescriptions, directing care, and providing clinical follow-up.
The Company does not control a pharmacy’s professional judgment, dispensing decisions, compounding decisions, labeling, counseling, fulfillment practices, or compliance obligations. A pharmacy may decline or delay fulfillment when legally or clinically required.
Your relationship with a healthcare provider or pharmacy may also be governed by separate notices, consents, policies, or terms provided by that provider, medical practice, or pharmacy.
8. TELEHEALTH AND ASYNCHRONOUS CARE
Clinical care may be delivered through telehealth, including secure questionnaires, uploaded records or images, secure messaging, telephone calls, video visits, remote monitoring, or other legally permitted methods. In some circumstances, care may be provided asynchronously, meaning that the provider reviews submitted information without a simultaneous live interaction.
Telehealth and asynchronous care are not appropriate for every patient or condition. A provider may request additional information, require a live consultation or laboratory testing, decline treatment, discontinue treatment, or recommend in-person or emergency care. You must complete any state-specific telehealth informed consent presented to you before receiving clinical services.
9. PROVIDER REVIEW; NO GUARANTEE OF A PRESCRIPTION
Completing an assessment, creating an account, submitting payment information, or completing checkout does not create a guarantee of treatment or a prescription. A licensed healthcare provider must first provide an appropriate clinical evaluation and determine that treatment is clinically appropriate and permitted by applicable law.
No prescription or prescription medication will be issued, dispensed, or shipped before the required provider evaluation and issuance of a valid prescription by an authorized prescriber.
10. PRESCRIPTION AND COMPOUNDED MEDICATIONS
Certain products accessible through the Services require a valid prescription. Prescription medications are dispensed only by appropriately licensed pharmacy partners pursuant to a valid prescription issued after an appropriate provider evaluation.
Some treatment plans may involve compounded medications when prescribed for an identified patient and permitted by applicable federal and state law. Compounded medications are not approved by the U.S. Food and Drug Administration (“FDA”), and the FDA does not review compounded medications for safety, effectiveness, or quality before they are marketed. A compounded medication is not an FDA-approved generic medication and should not be represented as identical or therapeutically equivalent to an FDA-approved product unless such a statement is legally authorized and substantiated.
Any reference on the Services to an active ingredient, brand-name medication, or commercially available medication is for identification or informational purposes and does not imply that a compounded product is FDA-approved, is a generic version of an FDA-approved product, or is equivalent to a branded product. Medication availability is subject to applicable law, pharmacy authorization, ingredient availability, patient-specific clinical need, and the provider’s independent judgment.
11. HEALTH INFORMATION YOU PROVIDE
You agree to provide accurate, current, and complete health information through assessments, intake forms, uploads, laboratory results, and communications with providers. You must disclose relevant diagnoses, symptoms, allergies, medications, supplements, pregnancy status, medical history, and other information requested by your provider.
Providing inaccurate, incomplete, or misleading information may result in delayed or declined treatment, inappropriate treatment, suspension of access, or risks to your health. You agree to promptly notify your provider of material changes in your health or medications.
12. ACCOUNT REGISTRATION AND SECURITY
If you create an account, you are responsible for maintaining the confidentiality of your credentials and for activity under your account. You may not share your account, impersonate another person, create an account using false information, or submit health information on behalf of another person unless expressly authorized and legally permitted.
You agree to promptly notify us of suspected unauthorized account access or security incidents.
13. PAYMENT, BILLING, AND REFUNDS
Prescription required. Treatment is not guaranteed. Your information is submitted for licensed provider review in connection with the checkout process. The prices, consultation fees, medication charges, shipping charges, taxes, recurring charges, and any other material fees applicable to your purchase will be disclosed before you authorize payment.
You authorize the Company and its payment processors to charge your selected payment method for the amounts disclosed to you. If a provider determines that prescription treatment is not clinically appropriate, amounts paid for medication that will not be dispensed will be handled according to the refund policy disclosed at checkout. Consultation, technology, administrative, laboratory, or other fees may be nonrefundable when clearly disclosed and permitted by law.
Once an approved prescription has been transmitted to a pharmacy or entered into fulfillment, prescription products may not be cancelable, returnable, or refundable except as required by law or expressly stated in the applicable refund policy. The refund and cancellation terms displayed at checkout are incorporated into these Terms.
14. SHIPPING AND FULFILLMENT
Shipping and delivery estimates are not guarantees. Timing may vary based on provider review, pharmacy processing, product or ingredient availability, prescription clarification, address verification, carrier delays, weather, holidays, and applicable law.
Medications will be shipped only to locations where the dispensing pharmacy is authorized to dispense and ship the medication. You are responsible for providing a complete and accurate delivery address and for following storage, handling, and use instructions provided by the pharmacy or provider.
15. REFILLS, SUBSCRIPTIONS, PAUSES, AND CANCELLATIONS
If a plan includes recurring billing, recurring clinical review, refills, or subscription services, the billing cadence, renewal terms, cancellation process, refill conditions, and applicable fees will be disclosed at checkout or in your account.
Recurring payment does not guarantee a prescription or refill. A provider may decline or modify treatment, require updated information, require laboratory testing or a consultation, or recommend alternative or in-person care. You may cancel recurring non-clinical services through the method disclosed at checkout or in your account, subject to any lawful cutoff periods for prescriptions already submitted for fulfillment.
16. NO GUARANTEES
Neither the Company nor any provider or pharmacy guarantees eligibility, treatment approval, issuance of a prescription, medication availability, a particular formulation or dose, shipping timing, or any specific clinical, cosmetic, or wellness outcome.
The Services do not guarantee weight loss, hair growth, improved energy, improved performance, hormone changes, laboratory results, symptom improvement, or any other result. Individual results vary, and all treatments involve potential risks, limitations, and alternatives that should be discussed with a licensed healthcare provider.
17. SITE CONTENT IS INFORMATIONAL
Except for communications from a licensed healthcare provider concerning your individual care, content available through the Services is provided for general informational and educational purposes. It is not medical advice, diagnosis, treatment, or a substitute for professional medical judgment.
Do not disregard or delay seeking professional medical advice because of information presented through the Services.
18. USER CONDUCT AND PROHIBITED USE
You agree not to misuse the Services. Prohibited conduct includes:
* submitting false, misleading, incomplete, or fraudulent information;
* impersonating another person or misrepresenting your identity, age, location, medical history, or eligibility;
* attempting to obtain medication for resale, diversion, misuse, sharing, or any unlawful purpose;
* interfering with the security, availability, or integrity of the Services;
* scraping, harvesting, copying, or using automated means to access the Services without permission;
* reverse engineering or attempting to derive source code, architecture, or proprietary logic;
* uploading viruses, malicious code, or harmful materials; and
* violating applicable law, third-party rights, or these Terms.
19. INTELLECTUAL PROPERTY AND TRADEMARKS
The Services, including names, logos, graphics, product names, designs, software, workflows, and content, are owned by or licensed to the Company and may not be copied, modified, distributed, or used without written permission. All rights not expressly granted are reserved. Third-party names and trademarks remain the property of their respective owners.
20. THIRD-PARTY SERVICES, PROVIDERS, AND PARTNERS
The Services may link to or integrate with healthcare providers, medical practices, pharmacies, laboratories, payment processors, identity-verification vendors, shipping carriers, analytics providers, and other third parties. These third parties are responsible for their own services and may provide separate terms and privacy notices.
The Company seeks to work only with appropriately licensed and authorized partners. The inclusion of a third party does not constitute a guarantee regarding the availability of that third party or any specific service.
21. PRIVACY AND SECURITY
Your use of the Services is governed by our Privacy Policy. Clinical providers, medical practices, laboratories, and pharmacies may also provide separate privacy notices or Notices of Privacy Practices describing how they use and disclose protected health information.
The Company and its applicable partners will process personal and health information in accordance with applicable privacy and security laws. Sensitive information transmitted through the Services will be protected using reasonable administrative, technical, and physical safeguards, including encryption in transit where required by applicable law.
22. DISCLAIMERS
To the fullest extent permitted by law, the Company’s non-clinical Services are provided on an “as is” and “as available” basis without warranties of any kind, whether express or implied, including warranties of merchantability, fitness for a particular purpose, non-infringement, accuracy, availability, or course of dealing.
Nothing in this section disclaims or limits duties that cannot lawfully be disclaimed, including duties owed by licensed healthcare providers or pharmacies under applicable professional and consumer-protection laws.
23. LIMITATION OF LIABILITY
To the fullest extent permitted by law, the Company and its officers, directors, employees, contractors, affiliates, licensors, and non-clinical service providers will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for loss of profits, revenues, data, goodwill, or business opportunity, arising from use of or inability to use the Company’s non-clinical Services.
This limitation does not apply where prohibited by law and does not limit liability for professional negligence, willful misconduct, fraud, or other liability that cannot lawfully be limited.
24. INDEMNIFICATION
To the fullest extent permitted by law, you agree to indemnify, defend, and hold harmless the Company and its affiliates, officers, directors, employees, contractors, licensors, and non-clinical service providers from claims, liabilities, damages, losses, and expenses, including reasonable attorneys’ fees, arising from your unlawful use of the Services, material violation of these Terms, violation of third-party rights, or submission of fraudulent or intentionally misleading information.
25. CHANGES TO THE SERVICES OR TERMS
We may modify, suspend, or discontinue portions of the Services when reasonably necessary. We may update these Terms from time to time. The updated Terms will be posted with a revised “Last updated” date. Where required by law, we will provide additional notice or obtain consent before material changes become effective.
26. GOVERNING LAW AND DISPUTE RESOLUTION
These Terms are governed by the laws of the State of Wyoming, without regard to conflict-of-law principles, except where applicable law requires otherwise. Any arbitration agreement, venue provision, class-action waiver, or other dispute-resolution requirement should be inserted here only after review by qualified legal counsel and must comply with applicable law.
27. STATES SERVED
Subject to the qualifications and limitations in Section 5, access to at least some Services is offered in each of the following 50 states:
Alabama
	Indiana
	Nebraska
	South Carolina
	Alaska
	Iowa
	Nevada
	South Dakota
	Arizona
	Kansas
	New Hampshire
	Tennessee
	Arkansas
	Kentucky
	New Jersey
	Texas
	California
	Louisiana
	New Mexico
	Utah
	Colorado
	Maine
	New York
	Vermont
	Connecticut
	Maryland
	North Carolina
	Virginia
	Delaware
	Massachusetts
	North Dakota
	Washington
	Florida
	Michigan
	Ohio
	West Virginia
	Georgia
	Minnesota
	Oklahoma
	Wisconsin
	Hawaii
	Mississippi
	Oregon
	Wyoming
	Idaho
	Missouri
	Pennsylvania
	

	Illinois
	Montana
	Rhode Island
	

	You must be physically located in the applicable state at the time clinical services are provided. The treating provider must be authorized to practice in that state, and the dispensing pharmacy must be authorized to dispense and ship the prescribed medication to that state. Not every treatment, medication, provider, pharmacy, or fulfillment option is available in every listed state.
28. IMPORTANT NOTICES
* The Company is not a pharmacy, drug manufacturer, outsourcing facility, or compounding facility unless expressly identified otherwise.
* Prescription treatment is provided only when clinically appropriate after an evaluation by a licensed healthcare provider.
* Clinical services are provided through affiliated or contracted medical practices and licensed healthcare providers. Provider availability varies by state, treatment category, and patient eligibility.
* Prescription medication is dispensed by an appropriately licensed pharmacy pursuant to a valid prescription.
* Compounded medications, when prescribed, are not FDA-approved and are not reviewed by the FDA for safety, effectiveness, or quality before marketing.
* Final treatment, formulation, dose, pharmacy, and pricing may vary based on provider review, patient-specific needs, pharmacy availability, and applicable law.
* Product imagery is illustrative and does not imply that the Company manufactures, compounds, dispenses, or physically fulfills medication. Actual packaging and pharmacy labeling may differ.
* In an emergency, call 911 or seek immediate emergency care.
29. CONTACT US
Questions about these Terms may be directed to:
Novimid LLC
2111 Carnegie Ln, Redondo Beach, CA 90278
support@novimid.com
(310) 809-0912`,
  },
  {
    slug: 'provider-network',
    href: '/policies/provider-network',
    title: 'Provider Network',
    navLabel: 'Provider Network',
    eyebrow: 'Medical provider network',
    updated: 'August 31, 2026',
    lead: 'Clinical services through independent licensed healthcare professionals in our provider network.',
    body: `Clinical services available through this website are provided by independent licensed healthcare professionals through our provider network:
Scriptful Inc.
Provider Network Website: https://scriptful.com/
Scriptful Inc. provides access to licensed healthcare professionals who evaluate patients, determine medical appropriateness, provide clinical services, and, when appropriate, issue prescriptions based on their independent professional judgment.
All medical decisions, including whether a prescription or treatment is appropriate, are made solely by the treating licensed healthcare professional. The brand and website do not direct, control, or interfere with the independent clinical judgment of healthcare providers.
Availability of medical services may vary based on the patient's location, provider licensure, applicable law, and the specific treatment or service requested.
For additional information regarding the provider network, please visit Scriptful Inc. at https://scriptful.com/.`,
  },
  {
    slug: 'fda-and-medical-disclaimer',
    href: '/policies/fda-and-medical-disclaimer',
    title: 'FDA and Medical Disclaimer',
    navLabel: 'Medical Disclaimer',
    eyebrow: 'FDA and medical notice',
    updated: 'August 31, 2026',
    lead: 'Informational use only. Compounded medications are not FDA-approved finished products.',
    body: `The information provided through the Novimid® website, assessments, product pages, checkout flows, communications, and related services is for general informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.
1. Informational Use Only
All content on the Novimid® Services—including text, graphics, images, assessments, product descriptions, and other materials—is provided for general informational purposes only. It is not intended to be, and should not be relied upon as, medical advice or a recommendation for any particular treatment, medication, or course of action.
2. Not Medical Advice
Use of the Novimid® Services does not create a doctor-patient relationship with Novimid®. Content on the Services does not constitute medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare provider with any questions you may have regarding your health or a medical condition.
3. Novimid® Is Not a Pharmacy
Novimid® is not a pharmacy and does not itself practice medicine. Medical services, if available, are provided by independent US-licensed providers or affiliated clinical partners.
4. Provider Review Required
Prescription treatment, if any, is provided only after review by a US-licensed provider and only if clinically appropriate.
Completing an assessment, checkout, payment authorization, or account creation does not guarantee that treatment will be prescribed.
5. No Emergency Services
The Services are not intended for emergency medical needs. If you are experiencing a medical emergency, call 911 or seek emergency medical care immediately.
6. No Guaranteed Results
Novimid® does not guarantee specific outcomes, results, eligibility, prescriptions, weight loss, hair regrowth, performance improvement, energy improvement, anti-aging benefits, or treatment availability.
7. Treatment Availability
Services may not be available in all states. Treatment options may vary based on state laws, provider review, clinical appropriateness, pharmacy availability, medication availability, and other operational or legal factors.
8. Prescription Products
Certain products available through the Services require a valid prescription from a licensed healthcare provider. A prescription will only be issued if a provider determines that treatment is clinically appropriate.
9. Compounded Medication Notice
Some medications, if prescribed, may be compounded medications. Compounded medications are prepared by a licensed compounding pharmacy pursuant to a prescription for an individual patient and are not reviewed by the FDA for safety, effectiveness, or quality in the same manner as FDA-approved medications. Compounded medications are not generic versions of, equivalent to, interchangeable with, or the same as FDA-approved medications.
10. Product Images and Packaging
Product images, packaging, labels, and descriptions are for illustrative purposes only and may differ from the medication, packaging, or instructions provided by a pharmacy or licensed provider.
11. Individual Results May Vary
Individual results vary. Any timelines, benefits, or descriptions on the Services are general in nature and may not apply to every individual.
12. Third-Party Providers and Pharmacies
Novimid® may coordinate access to independent providers, pharmacies, payment processors, fulfillment partners, or other service providers. These third parties may have their own policies, notices, and responsibilities.
13. When to Seek Medical Care
Contact a licensed healthcare provider if you have questions about your health, symptoms, medications, side effects, allergies, or treatment options. Seek urgent or emergency care if symptoms are severe, sudden, or life-threatening.
14. Contact Us
Questions about this Medical Disclaimer can be sent to support@novimid.com.
Novimid LLC d/b/a Novimid®
2111 Carnegie Ln, Redondo Beach, CA 90278
(310) 809-0912`,
  },
  {
    slug: 'privacy-policy',
    href: '/policies/privacy-policy',
    title: 'Privacy Policy',
    navLabel: 'Privacy Policy',
    eyebrow: 'Data privacy',
    updated: 'August 31, 2026',
    lead: 'How Novimid collects, uses, shares, and protects information on the platform.',
    body: `This Privacy Policy describes how Novimid LLC d/b/a Novimid® (“Novimid®,” “we,” “our,” or “us”) collects, uses, shares, and protects information when you use our websites, online services, assessments, checkout flows, communications, and related services (collectively, the “Novimid® Services”).
1. Introduction
Novimid® provides a technology platform that connects users with independent US-licensed providers and licensed pharmacies. Novimid® is not a pharmacy. Prescription treatment, if any, is provided only after review by a US-licensed provider and only if clinically appropriate. Services may not be available in all states.
If you are experiencing a medical emergency, call 911 or seek emergency medical care immediately. The Novimid® Services are not for use in emergencies.
2. Information We Collect
We collect information directly from you, automatically through your use of the Novimid® website and platform, and from third parties such as service providers, clinical partners, and payment processors. The categories below describe the types of information we may collect.
3. Information You Provide to Us
We collect information you provide when you create an account, complete an assessment, communicate with providers or support, place an order, or otherwise interact with the Novimid® Services. This may include your name, date of birth, contact details, demographic information, account credentials, shipping address, identification information where required, and the contents of messages you send us.
4. Health-Related Information
We may collect health-related information you provide through assessments, forms, uploads, messages, checkout flows, or communications so that a US-licensed provider or affiliated service provider can review your information and determine whether treatment may be clinically appropriate.
Health-related information may include medical history, symptoms, medications, allergies, lifestyle information, photographs you choose to submit, and other information relevant to clinical review.
5. Information We Collect Automatically
When you use the Novimid® Services, we may automatically collect information about your device and usage, such as IP address, device identifiers, browser type, operating system, referring URLs, pages viewed, links clicked, and timestamps. We may use this information for security, analytics, performance, and service improvement.
6. Cookies and Similar Technologies
We may use cookies, pixels, analytics tools, and similar technologies to operate the Services, improve performance, personalize content, measure advertising, and understand how users interact with the Services. You may manage cookies through your browser settings or available cookie preference tools.
7. How We Use Your Information
We use information to provide and operate the Novimid® Services, facilitate provider review, support pharmacy fulfillment where applicable, process payments, communicate with you, personalize and improve the Services, prevent fraud and abuse, ensure security, and comply with legal and regulatory obligations.
8. How We Share Information
We may share information with the following categories of recipients:
* US-licensed providers and clinical service partners
* Pharmacies and fulfillment partners, where applicable
* Payment processors
* Customer support and communication vendors
* Analytics and advertising vendors, subject to user choices
* Legal, compliance, fraud prevention, and security providers
* Business transfer parties if applicable
We do not sell personal information as the term “sell” is commonly understood. Certain advertising, analytics, or tracking activities may be considered a “sale,” “sharing,” or targeted advertising under some state privacy laws. Where required, users may opt out of such processing.
9. Health Care Providers, Pharmacies, and Third-Party Services
Independent US-licensed providers who review assessments and, where appropriate, prescribe treatment may collect, use, and disclose information consistent with their own privacy practices and applicable law, including HIPAA where applicable. Pharmacies and fulfillment partners may receive information necessary to dispense and ship prescribed treatment.
10. Payment and Order Information
Payment information may be collected and processed by third-party payment processors. Novimid® does not store complete payment card numbers unless expressly stated by the payment processor. We may receive limited information such as billing details, last four digits, card brand, and transaction status.
11. Online Analytics and Advertising
We may work with analytics and advertising partners to understand how the Novimid® Services are used and to deliver relevant marketing. These partners may use cookies and similar technologies to collect information about your activity over time and across services. Depending on your jurisdiction, you may have the right to opt out of certain advertising and analytics processing.
12. Marketing and Communications Choices
You may opt out of marketing emails by following the unsubscribe instructions in the message. You may opt out of marketing text messages by replying STOP. We may continue to send transactional or service-related communications relating to your account, orders, or clinical care.
13. Your Privacy Rights
Depending on your state of residence, you may have the right to request access, correction, deletion, portability, or opt-out rights regarding certain personal information. To submit a request, contact privacy@novimid.com.
We may need to verify your identity before responding. Certain information may be retained as required by law or for legitimate recordkeeping, including medical records.
14. California Privacy Rights
California residents may have additional rights under the California Consumer Privacy Act (CCPA), as amended, including the right to know the categories and specific pieces of personal information collected, the right to delete, the right to correct, the right to limit use of sensitive personal information, and the right to opt out of certain sharing or sale as defined under California law. To exercise these rights, contact privacy@novimid.com.
15. Nevada Privacy Rights
Nevada residents may have the right to direct us not to sell certain covered information as defined under Nevada law. To submit a request, contact privacy@novimid.com.
16. Children’s Privacy
The Novimid® Services are intended for adults 18 years of age or older. We do not knowingly collect personal information from children under 13. If you believe a child has provided personal information, contact privacy@novimid.com. and we will take appropriate action.
17. How We Protect Information
We use administrative, technical, and physical safeguards designed to protect information. No system is 100% secure, and we cannot guarantee absolute security of information transmitted to or from the Novimid® Services.
18. Retention of Information
We retain information for as long as necessary to provide the Novimid® Services, comply with legal and regulatory obligations (including medical recordkeeping requirements), resolve disputes, and enforce our agreements.
19. Changes to This Privacy Policy
We may update this Privacy Policy from time to time. When we do, we will revise the “Last updated” date above. Material changes may be communicated through additional notice where required.
20. Contact Us
For privacy questions or to exercise your rights, contact: privacy@novimid.com.
Novimid LLC d/b/a Novimid®
2111 Carnegie Ln, Redondo Beach, CA 90278
support@novimid.com
(310) 809-0912
21. Cookie Notice
Our use of cookies and similar technologies is described in Section 6 above. You may manage your preferences through your browser settings or any cookie preference tools made available within the Novimid® platform.
This Privacy Policy is provided for informational purposes and should be reviewed by legal counsel before final publication.`,
  },
]

export function getPolicy(slug: string): PolicyDoc | undefined {
  return POLICIES.find((doc) => doc.slug === slug)
}

export function parsePolicyBody(body: string): PolicyBlock[] {
  const blocks: PolicyBlock[] = []
  let bullets: string[] = []

  const flushBullets = () => {
    if (bullets.length) {
      blocks.push({ type: 'ul', items: bullets })
      bullets = []
    }
  }

  for (const rawLine of body.replace(/\r/g, '').split('\n')) {
    const line = rawLine.trim()
    if (!line) continue
    if (line.startsWith('* ') || line.startsWith('- ')) {
      bullets.push(line.slice(2).trim())
      continue
    }
    flushBullets()
    if (/^\d+\.\s/.test(line) || /^#{1,3}\s/.test(line)) {
      blocks.push({ type: 'h', text: line.replace(/^#+\s/, '') })
    } else if (
      /^(Uses and Disclosures|Your Rights|Our Responsibilities|Complaints and Contact|Medical Provider Network)$/.test(
        line,
      )
    ) {
      blocks.push({ type: 'h', text: line })
    } else {
      blocks.push({ type: 'p', text: line })
    }
  }
  flushBullets()
  return blocks
}