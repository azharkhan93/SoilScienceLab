namespace CenterOfExcellence.Constants
{
    public static class AppConstants
    {
        public static class Founders
        {
            public static readonly List<FounderData> FoundersList = new()
            {
                new FounderData
                {
                    Name = "Dr. Arvind Lal",
                    Position = "Founder & Chairman",
                    Description = "A visionary leader who revolutionized healthcare diagnostics in India. Dr. Arvind Lal's passion for accurate diagnostics and commitment to quality has made Dr Lal PathLabs the most trusted name in laboratory medicine.",
                    ImageUrl = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                    Icon = "fa-crown",
                    Experience = "30+ Years",
                    IsLeft = false,
                    Achievements = new List<string> 
                    { 
                        "Pioneered modern laboratory diagnostics in India",
                        "Established 280+ laboratories across the country",
                        "Introduced advanced automation and technology",
                        "Received numerous awards for healthcare excellence"
                    },
                    Credentials = new List<string> 
                    { 
                        "MBBS, MD Pathology",
                        "Fellow of Indian Academy of Cytologists",
                        "Padma Shri Award Winner",
                        "Healthcare Leadership Award"
                    },
                    Stats = new List<FounderStatData> 
                    { 
                        new FounderStatData { Value = "280+", Label = "Centers" },
                        new FounderStatData { Value = "30+", Label = "Years" }
                    },
                    LinkedIn = "https://linkedin.com/in/dr-arvind-lal",
                    Twitter = "https://twitter.com/drarvindlal",
                    Email = "arvind.lal@drlalpathlabs.com"
                },
                new FounderData
                {
                    Name = "Dr. Priya Sharma",
                    Position = "Co-Founder & Chief Medical Officer",
                    Description = "A distinguished medical professional with expertise in clinical pathology and quality assurance. Dr. Sharma's leadership has been instrumental in maintaining the highest standards of medical excellence and patient care.",
                    ImageUrl = "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                    Icon = "fa-user-md",
                    Experience = "25+ Years",
                    IsLeft = true,
                    Achievements = new List<string> 
                    { 
                        "Led medical operations across all centers",
                        "Implemented quality management systems",
                        "Pioneered digital health solutions",
                        "Mentored hundreds of medical professionals"
                    },
                    Credentials = new List<string> 
                    { 
                        "MBBS, MD Pathology",
                        "Fellow of College of American Pathologists",
                        "Quality Management Expert",
                        "Healthcare Innovation Award"
                    },
                    Stats = new List<FounderStatData> 
                    { 
                        new FounderStatData { Value = "1000+", Label = "Team Members" },
                        new FounderStatData { Value = "25+", Label = "Years" }
                    },
                    LinkedIn = "https://linkedin.com/in/dr-priya-sharma",
                    Twitter = "https://twitter.com/drpriyasharma",
                    Email = "priya.sharma@drlalpathlabs.com"
                }
            };

            public static readonly List<ResearcherData> ResearchTeam = new()
            {
                new ResearcherData
                {
                    Name = "Dr. Suresh Menon",
                    Role = "Head of Research & Development",
                    Description = "Leading breakthrough research in diagnostic technologies and personalized medicine.",
                    Icon = "fa-microscope",
                    ResearchAreas = new List<string> { "AI Diagnostics", "Genomics", "Precision Medicine" }
                },
                new ResearcherData
                {
                    Name = "Dr. Ananya Iyer",
                    Role = "Senior Research Scientist",
                    Description = "Specializing in molecular diagnostics and biomarker discovery for early disease detection.",
                    Icon = "fa-dna",
                    ResearchAreas = new List<string> { "Molecular Biology", "Biomarkers", "Early Detection" }
                }
            };
        }

        public static class Timeline
        {
            public static readonly List<TimelineMilestoneData> Milestones = new()
            {
                new TimelineMilestoneData
                {
                    Index = 0,
                    Year = "1995",
                    Title = "Foundation & Vision",
                    Description = "Dr. Arvind Lal established the first laboratory with a vision to revolutionize healthcare diagnostics in India. Started with a small team and basic equipment, focusing on accuracy and patient care.",
                    Category = "Foundation",
                    Icon = "fa-rocket",
                    IsLeft = false,
                    Achievements = new List<string>
                    {
                        "Established first laboratory in Delhi",
                        "Introduced modern diagnostic protocols",
                        "Built foundation of quality standards"
                    },
                    Stats = new List<TimelineStatData>
                    {
                        new TimelineStatData { Value = "1", Label = "Laboratory" },
                        new TimelineStatData { Value = "5", Label = "Team Members" }
                    }
                },
                new TimelineMilestoneData
                {
                    Index = 1,
                    Year = "2005",
                    Title = "Expansion & Technology",
                    Description = "Decade of growth marked by significant expansion across major cities. Introduced advanced automation and cutting-edge diagnostic technologies, setting new industry standards.",
                    Category = "Growth",
                    Icon = "fa-chart-line",
                    IsLeft = true,
                    Achievements = new List<string>
                    {
                        "Expanded to 50+ cities",
                        "Implemented automated systems",
                        "Introduced molecular diagnostics"
                    },
                    Stats = new List<TimelineStatData>
                    {
                        new TimelineStatData { Value = "50+", Label = "Cities" },
                        new TimelineStatData { Value = "100+", Label = "Centers" }
                    }
                },
                new TimelineMilestoneData
                {
                    Index = 2,
                    Year = "2015",
                    Title = "Digital Transformation",
                    Description = "Pioneered digital health solutions and online booking systems. Launched mobile apps and integrated healthcare platforms, making diagnostics accessible to millions.",
                    Category = "Innovation",
                    Icon = "fa-laptop-medical",
                    IsLeft = false,
                    Achievements = new List<string>
                    {
                        "Launched digital booking platform",
                        "Introduced mobile health apps",
                        "Connected 200+ laboratories"
                    },
                    Stats = new List<TimelineStatData>
                    {
                        new TimelineStatData { Value = "200+", Label = "Digital Centers" },
                        new TimelineStatData { Value = "1M+", Label = "Digital Users" }
                    }
                },
                new TimelineMilestoneData
                {
                    Year = "2023",
                    Title = "AI & Future Ready",
                    Description = "Leading the future of diagnostics with AI-powered solutions, personalized medicine, and advanced genomic testing. Positioned as India's most trusted diagnostic partner.",
                    Category = "Future",
                    Icon = "fa-robot",
                    IsLeft = true,
                    Achievements = new List<string>
                    {
                        "AI-powered diagnostic systems",
                        "Personalized medicine programs",
                        "Advanced genomic testing"
                    },
                    Stats = new List<TimelineStatData>
                    {
                        new TimelineStatData { Value = "280+", Label = "Centers" },
                        new TimelineStatData { Value = "50M+", Label = "Tests Conducted" }
                    }
                }
            };
        }

        public static class Footer
        {
            public static readonly string CompanyDescription = "Dr Lal PathLabs is India's most trusted diagnostic laboratory, providing accurate and reliable medical testing services with cutting-edge technology and unwavering commitment to quality.";
            
            public static readonly List<FooterLinkData> QuickLinks = new()
            {
                new FooterLinkData { Text = "About Us", Url = "#" },
                new FooterLinkData { Text = "Our Services", Url = "#" },
                new FooterLinkData { Text = "Test Directory", Url = "#" },
                new FooterLinkData { Text = "Book Appointment", Url = "#" },
                new FooterLinkData { Text = "Find Centers", Url = "#" },
                new FooterLinkData { Text = "Health Packages", Url = "#" }
            };

            public static readonly List<FooterLinkData> Services = new()
            {
                new FooterLinkData { Text = "Blood Tests", Url = "#" },
                new FooterLinkData { Text = "Pathology Tests", Url = "#" },
                new FooterLinkData { Text = "Radiology", Url = "#" },
                new FooterLinkData { Text = "Health Checkups", Url = "#" },
                new FooterLinkData { Text = "Home Collection", Url = "#" },
                new FooterLinkData { Text = "Corporate Health", Url = "#" }
            };

            public static readonly ContactData ContactInfo = new ContactData
            {
                Phone = "+91 1800-102-1020",
                Email = "info@drlalpathlabs.com",
                Address = "Dr Lal PathLabs Ltd., 12th Floor, Tower B, DLF Cyber City, Gurugram, Haryana 122002"
            };
        }

        public static class SampleManagement
        {
            public static readonly List<SampleTypeData> SampleTypes = new()
            {
                new SampleTypeData { Code = "WAT", Name = "Water", Description = "Water samples for analysis" },
                new SampleTypeData { Code = "FOOD", Name = "Food", Description = "Food product samples" },
                new SampleTypeData { Code = "SOIL", Name = "Soil", Description = "Soil samples for contamination" },
                new SampleTypeData { Code = "AIR", Name = "Air", Description = "Air quality samples" },
                new SampleTypeData { Code = "CHEM", Name = "Chemical", Description = "Chemical analysis samples" },
                new SampleTypeData { Code = "BIO", Name = "Biological", Description = "Biological samples" }
            };

            public static readonly List<TestParameterData> TestParameters = new()
            {
                new TestParameterData { 
                    Id = "PEST-001",
                    Name = "Pesticide Residues", 
                    Method = "LC-MS/MS", 
                    TurnaroundTime = 5,
                    Price = 2500.00M,
                    Description = "Analysis of pesticide residues in samples"
                },
                new TestParameterData { 
                    Id = "HEAVY-001",
                    Name = "Heavy Metals", 
                    Method = "ICP-MS", 
                    TurnaroundTime = 3,
                    Price = 1800.00M,
                    Description = "Detection of heavy metal contamination"
                },
                new TestParameterData { 
                    Id = "AFLAT-001",
                    Name = "Aflatoxins", 
                    Method = "HPLC", 
                    TurnaroundTime = 4,
                    Price = 2200.00M,
                    Description = "Aflatoxin analysis in food samples"
                },
                new TestParameterData { 
                    Id = "MICRO-001",
                    Name = "Microbiological Analysis", 
                    Method = "Culture & PCR", 
                    TurnaroundTime = 7,
                    Price = 1500.00M,
                    Description = "Microbial contamination testing"
                },
                new TestParameterData { 
                    Id = "PHYS-001",
                    Name = "Physical Parameters", 
                    Method = "Standard Methods", 
                    TurnaroundTime = 2,
                    Price = 800.00M,
                    Description = "pH, conductivity, turbidity analysis"
                }
            };
        }

        public static class Contact
        {
            public static readonly List<ContactInfoData> ContactInfo = new()
            {
                new ContactInfoData { IconClass = "fa-solid fa-phone", Title = "Phone Support", Description = "Call us for immediate assistance", Value = "+91-1800-123-4567", Link = "tel:+91-1800-123-4567", BgColorClass = "bg-blue-100", IconColorClass = "text-blue-600" },
                new ContactInfoData { IconClass = "fa-solid fa-envelope", Title = "Email Support", Description = "Send us an email anytime", Value = "support@drlalpathlabs.com", Link = "mailto:support@drlalpathlabs.com", BgColorClass = "bg-green-100", IconColorClass = "text-green-600" },
                new ContactInfoData { IconClass = "fa-solid fa-map-marker-alt", Title = "Our Location", Description = "Visit our main laboratory", Value = "123 Medical Center, Delhi", Link = "#", BgColorClass = "bg-purple-100", IconColorClass = "text-purple-600" },
                new ContactInfoData { IconClass = "fa-solid fa-clock", Title = "Working Hours", Description = "Our laboratory operating hours", Value = "8:00 AM - 8:00 PM", Link = "#", BgColorClass = "bg-orange-100", IconColorClass = "text-orange-600" }
            };

            public static readonly List<OfficeHourData> OfficeHours = new()
            {
                new OfficeHourData { Day = "Monday - Friday", Time = "8:00 AM - 8:00 PM" },
                new OfficeHourData { Day = "Saturday", Time = "8:00 AM - 6:00 PM" },
                new OfficeHourData { Day = "Sunday", Time = "9:00 AM - 4:00 PM" },
                new OfficeHourData { Day = "Public Holidays", Time = "9:00 AM - 2:00 PM" }
            };
        }
    }

    // Data Models
    public class FounderData
    {
        public string Name { get; set; } = string.Empty;
        public string Position { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string ImageUrl { get; set; } = string.Empty;
        public string Icon { get; set; } = string.Empty;
        public string Experience { get; set; } = string.Empty;
        public bool IsLeft { get; set; }
        public List<string> Achievements { get; set; } = new();
        public List<string> Credentials { get; set; } = new();
        public List<FounderStatData> Stats { get; set; } = new();
        public string? LinkedIn { get; set; }
        public string? Twitter { get; set; }
        public string? Email { get; set; }
    }

    public class FounderStatData
    {
        public string Value { get; set; } = string.Empty;
        public string Label { get; set; } = string.Empty;
    }

    public class ResearcherData
    {
        public string Name { get; set; } = string.Empty;
        public string Role { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Icon { get; set; } = string.Empty;
        public List<string> ResearchAreas { get; set; } = new();
    }

    public class TimelineMilestoneData
    {
        public int Index { get; set; }
        public string Year { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
        public string Icon { get; set; } = string.Empty;
        public bool IsLeft { get; set; }
        public List<string> Achievements { get; set; } = new();
        public List<TimelineStatData> Stats { get; set; } = new();
    }

    public class TimelineStatData
    {
        public string Value { get; set; } = string.Empty;
        public string Label { get; set; } = string.Empty;
    }

    public class FooterLinkData
    {
        public string Text { get; set; } = string.Empty;
        public string Url { get; set; } = string.Empty;
    }

    public class ContactData
    {
        public string Phone { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
    }

    // Sample Management Data Models
    public class SampleData
    {
        public string SampleId { get; set; } = string.Empty;
        public string ClientName { get; set; } = string.Empty;
        public string ClientEmail { get; set; } = string.Empty;
        public string ClientPhone { get; set; } = string.Empty;
        public SampleTypeData SampleType { get; set; } = new();
        public DateTime DateReceived { get; set; }
        public List<TestParameterData> TestParameters { get; set; } = new();
        public TurnaroundType TurnaroundTime { get; set; }
        public SampleStatus Status { get; set; }
        public string Barcode { get; set; } = string.Empty;
        public string QRCode { get; set; } = string.Empty;
        public DateTime? DateCompleted { get; set; }
        public string? ReportUrl { get; set; }
        public string? Notes { get; set; }
    }

    public class SampleTypeData
    {
        public string Code { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
    }

    public class TestParameterData
    {
        public string Id { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string Method { get; set; } = string.Empty;
        public int TurnaroundTime { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; } = string.Empty;
        public bool IsSelected { get; set; }
    }

    public enum TurnaroundType
    {
        Standard = 1,
        Rush = 2
    }

    public enum SampleStatus
    {
        Received = 1,
        InProgress = 2,
        Tested = 3,
        Reported = 4
    }

    // Testimonial Data Model
    public class TestimonialData
    {
        public string Name { get; set; } = string.Empty;
        public string Location { get; set; } = string.Empty;
        public string ImageUrl { get; set; } = string.Empty;
        public string AltText { get; set; } = string.Empty;
        public string TestimonialText { get; set; } = string.Empty;
        public int StarRating { get; set; }
    }

    public class ContactInfoData
    {
        public string IconClass { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Value { get; set; } = string.Empty;
        public string Link { get; set; } = "#";
        public string BgColorClass { get; set; } = "bg-blue-100";
        public string IconColorClass { get; set; } = "text-blue-600";
    }

    public class OfficeHourData
    {
        public string Day { get; set; } = string.Empty;
        public string Time { get; set; } = string.Empty;
    }
} 