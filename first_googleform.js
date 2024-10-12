function createBESScholarshipForm() {
    // Create a new form and set its title and description
    var form = FormApp.create('BES Scholarship Application Form')
      .setTitle('BES Scholarship Application Form')
      .setDescription('Please ensure you have all the required documents ready before starting the application.');
  
    // Enable Save and Continue Later (by allowing response edits and requiring sign-in)
    form.setAllowResponseEdits(true);
    form.setLimitOneResponsePerUser(true);
  
    // Set form to collect email addresses
    form.setCollectEmail(true);
  
    // Checklist of Required Documents (Moved to First Page)
    form.addPageBreakItem().setTitle('Checklist of Required Documents');
  
    var checklistItem = form.addCheckboxItem()
      .setTitle('Please confirm that you have the following documents ready before starting the application:')
      .setRequired(true);
    checklistItem.setChoiceValues([
      'Personal Statement',
      'Academic Transcripts',
      'Letters of Recommendation (minimum of two)',
      'Proof of Enrollment or Degree Completion',
      'Examination Score Reports (if applicable)',
      'Financial Need Documentation',
      'Other Supporting Documents'
    ]);
  
    // Section I: Personal Information
    form.addPageBreakItem().setTitle('I. Personal Information');
  
    // Full Name
    form.addSectionHeaderItem().setTitle('1. Full Name:');
    form.addTextItem().setTitle('First Name:').setRequired(true);
    form.addTextItem().setTitle('Middle Name:');
    form.addTextItem().setTitle('Last Name:').setRequired(true);
  
    // Date of Birth
    form.addDateItem().setTitle('2. Date of Birth:').setRequired(true);
  
    // Gender
    var genderItem = form.addMultipleChoiceItem()
      .setTitle('3. Gender:')
      .setRequired(true);
    genderItem.setChoiceValues(['Male', 'Female', 'Prefer not to disclose']);
  
    // Contact Information
    form.addSectionHeaderItem().setTitle('4. Contact Information:');
    form.addTextItem().setTitle('Permanent Address - Street Address:').setRequired(true);
    form.addTextItem().setTitle('Permanent Address - City:').setRequired(true);
    form.addTextItem().setTitle('Permanent Address - State/Province:').setRequired(true);
    form.addTextItem().setTitle('Permanent Address - Zip/Postal Code:').setRequired(true);
    form.addTextItem().setTitle('Permanent Address - Country:').setRequired(true);
  
    // Phone and Email
    form.addTextItem().setTitle('Phone Number:').setRequired(true);
    form.addTextItem().setTitle('Email Address:').setRequired(true);
  
    // State of Origin (Replaces Citizenship Status)
    form.addTextItem().setTitle('5. State of Origin:').setRequired(true);
  
    // Section II: Academic Information
    form.addPageBreakItem().setTitle('II. Academic Information');
  
    // Highest Level of Education
    var educationLevelItem = form.addMultipleChoiceItem()
      .setTitle('1. Highest Level of Education:')
      .setRequired(true);
  
    // Set choices after the item has been created
    educationLevelItem.setChoiceValues([
      'Bachelor\'s Degree',
      'Master\'s Degree',
      'Other'
    ]);
  
    // Bachelor's Degree Details
    form.addSectionHeaderItem().setTitle('Bachelor\'s Degree Details');
    form.addTextItem().setTitle('Name of Bachelor\'s Degree Institution:').setRequired(true);
    form.addTextItem().setTitle('Major/Field of Study:').setRequired(true);
    form.addTextItem().setTitle('GPA (out of 5.0):').setRequired(true);
    form.addDateItem().setTitle('Graduation Date or Expected Graduation Date:').setRequired(true);
  
    // Master's Degree Details
    form.addSectionHeaderItem().setTitle('Master\'s Degree Details (if applicable)');
    form.addTextItem().setTitle('Name of Master\'s Degree Institution:');
    form.addTextItem().setTitle('Field of Study:');
    form.addTextItem().setTitle('GPA (out of 5.0):');
    form.addDateItem().setTitle('Graduation Date or Expected Graduation Date:');
  
    // Graduate School Plans
    form.addSectionHeaderItem().setTitle('Graduate School Plans');
    form.addTextItem().setTitle('Intended Field of Study in Graduate School:').setRequired(true);
    form.addParagraphTextItem().setTitle('Universities or Programs You Are Considering:').setRequired(true);
    form.addDateItem().setTitle('Intended Start Date for Graduate Studies:').setRequired(true);
  
    // Section III: BES Scholarship Information
    form.addPageBreakItem().setTitle('III. BES Scholarship Information');
  
    // Purpose of Application
    var purposeItem = form.addCheckboxItem()
      .setTitle('1. Purpose of Application:')
      .setRequired(true);
    purposeItem.setChoiceValues([
      'Mentorship for Graduate School Preparation',
      'Examination Fee Coverage for GRE',
      'Examination Fee Coverage for TOEFL',
      'Examination Fee Coverage for IELTS',
      'Examination Fee Coverage for Other'
    ]);
    form.addTextItem().setTitle('If Other, please specify:');
  
    // Previous Examinations
    var previousExamItem = form.addMultipleChoiceItem()
      .setTitle('2. Have you previously taken any of these examinations?')
      .setRequired(true);
    previousExamItem.setChoiceValues(['Yes', 'No']);
    form.addParagraphTextItem().setTitle('If yes, please specify which exams and your scores:');
  
    // Previous Application
    var previousApplicationItem = form.addMultipleChoiceItem()
      .setTitle('3. Have you applied for the BES Scholarship before?')
      .setRequired(true);
    previousApplicationItem.setChoiceValues(['Yes', 'No']);
    form.addTextItem().setTitle('If yes, when?');
  
    // Section IV: Mentorship and Preparation
    form.addPageBreakItem().setTitle('IV. Mentorship and Preparation');
  
    // Areas for Mentorship
    var mentorshipAreasItem = form.addCheckboxItem()
      .setTitle('1. Areas Where You Seek Mentorship:')
      .setRequired(true);
    mentorshipAreasItem.setChoiceValues([
      'Graduate School Application Process',
      'Selecting Appropriate Programs/Universities',
      'Preparing for Standardized Tests',
      'Academic Research Skills',
      'Career Planning',
      'Other'
    ]);
    form.addTextItem().setTitle('If Other, please specify:');
  
    // Willingness to Join Bi-Weekly Virtual Meetings
    var virtualMeetingItem = form.addMultipleChoiceItem()
      .setTitle('2. Are you willing to join bi-weekly virtual meetings?')
      .setRequired(true);
    virtualMeetingItem.setChoiceValues(['Yes', 'No']);
  
    // Previous Mentorship
    form.addParagraphTextItem()
      .setTitle('3. Please describe any previous mentorship or guidance you have received related to graduate school preparation:')
      .setRequired(true);
  
    // Section V: Financial Information
    form.addPageBreakItem().setTitle('V. Financial Information');
  
    // Financial Assistance
    var financialAssistanceItem = form.addMultipleChoiceItem()
      .setTitle('1. Do you require financial assistance for examination fees?')
      .setRequired(true);
    financialAssistanceItem.setChoiceValues(['Yes', 'No']);
  
    // Employment Status
    var employmentStatusItem = form.addMultipleChoiceItem()
      .setTitle('2. Are you currently employed?')
      .setRequired(true);
    employmentStatusItem.setChoiceValues(['Yes', 'No']);
  
    // Employment Details
    form.addTextItem().setTitle('If yes, Employer Name:');
    form.addTextItem().setTitle('Position:');
    form.addTextItem().setTitle('Hours per Week:');
  
    // Financial Need Description
    form.addParagraphTextItem()
      .setTitle('3. Describe your financial need for examination fee coverage and mentorship support:')
      .setHelpText('Provide a brief explanation in the space below or attach a separate sheet if necessary.')
      .setRequired(true);
  
    // Section VI: Extracurricular Activities and Experience
    form.addPageBreakItem().setTitle('VI. Extracurricular Activities and Experience');
  
    // Extracurricular Activities
    form.addParagraphTextItem()
      .setTitle('1. List any extracurricular activities, volunteer work, or organizations you are involved in related to your field of study or graduate school preparation:')
      .setHelpText('Include the activity/organization, your role/position, dates of involvement, and a description of your involvement.')
      .setRequired(true);
  
    // Research Projects
    form.addParagraphTextItem()
      .setTitle('2. List any relevant research projects or academic work you have completed:')
      .setRequired(true);
  
    // Section VII: Honors and Awards
    form.addPageBreakItem().setTitle('VII. Honors and Awards');
  
    // Honors and Awards
    form.addParagraphTextItem()
      .setTitle('1. List any academic honors, awards, or scholarships you have received:')
      .setHelpText('Include the award name, date received, and a brief description.')
      .setRequired(true);
  
    // Section VIII: Personal Statement
    form.addPageBreakItem().setTitle('VIII. Personal Statement');
  
    // Personal Statement Prompt
    form.addSectionHeaderItem()
      .setTitle('Personal Statement')
      .setHelpText('Please address the following prompt in the space provided.');
  
    form.addParagraphTextItem()
      .setTitle('Prompt:')
      .setHelpText('Describe your academic and career objectives, your motivation for pursuing graduate studies, and how the BES Scholarship\'s mentorship and examination support will assist you in achieving your goals. Include any challenges you have faced in your educational journey and how you have overcome them.')
      .setRequired(true);
  
    // Section IX: References
    form.addPageBreakItem().setTitle('IX. References');
  
    form.addSectionHeaderItem()
      .setTitle('Please provide two academic or professional references who can attest to your qualifications and potential for graduate studies.');
  
    // Reference 1
    form.addSectionHeaderItem().setTitle('1. Reference 1:');
    form.addTextItem().setTitle('Name:').setRequired(true);
    form.addTextItem().setTitle('Title/Position:').setRequired(true);
    form.addTextItem().setTitle('Institution/Organization:').setRequired(true);
    form.addTextItem().setTitle('Phone Number:').setRequired(true);
    form.addTextItem().setTitle('Email Address:').setRequired(true);
    form.addTextItem().setTitle('Relationship to Applicant:').setRequired(true);
  
    // Reference 2
    form.addSectionHeaderItem().setTitle('2. Reference 2:');
    form.addTextItem().setTitle('Name:').setRequired(true);
    form.addTextItem().setTitle('Title/Position:').setRequired(true);
    form.addTextItem().setTitle('Institution/Organization:').setRequired(true);
    form.addTextItem().setTitle('Phone Number:').setRequired(true);
    form.addTextItem().setTitle('Email Address:').setRequired(true);
    form.addTextItem().setTitle('Relationship to Applicant:').setRequired(true);
  
    // Section X: Certification and Signature
    form.addPageBreakItem().setTitle('X. Certification and Signature');
  
    // Certification Statement
    form.addParagraphTextItem()
      .setTitle('Certification:')
      .setHelpText('I certify that the information provided in this application is true and complete to the best of my knowledge. I understand that false statements or omissions may result in disqualification from the BES Scholarship program.')
      .setRequired(true);
  
    // Digital Signature
    form.addTextItem()
      .setTitle('Applicant\'s Full Name (as a digital signature):')
      .setRequired(true);
  
    form.addDateItem()
      .setTitle('Date:')
      .setRequired(true);
  
    // Privacy Notice
    form.addPageBreakItem().setTitle('Privacy Notice');
  
    form.addSectionHeaderItem()
      .setTitle('Privacy Notice')
      .setHelpText('Your personal information will be used solely for the purpose of evaluating your eligibility for the BES Scholarship and will not be shared with third parties without your consent.');
  
    // Submission Confirmation
    form.setConfirmationMessage('Thank you for submitting your application. Your responses have been recorded.');
  
    // Log the URL of the form
    Logger.log('Form URL: ' + form.getEditUrl());
  }