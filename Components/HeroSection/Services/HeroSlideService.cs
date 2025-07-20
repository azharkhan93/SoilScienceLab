using CenterOfExcellence.Components.HeroSection.Data;

namespace CenterOfExcellence.Components.HeroSection.Services
{
    public interface IHeroSlideService
    {
        List<SlideData> GetSlides();
    }

    public class HeroSlideService : IHeroSlideService
    {
        public List<SlideData> GetSlides()
        {
            return new List<SlideData>
            {
                new SlideData
                {
                    Id = 1,
                    BackgroundImage = "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
                    Title = "Experience the Future",
                    Subtitle = "Innovate, Create, and Inspire with Cutting-edge Technology",
                    Description = "Discover cutting-edge technology solutions that transform your business and drive innovation forward.",
                    ButtonText = "Get Started",
                    ThumbnailImage = "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
                    AltText = "Slide 1"
                },
                new SlideData
                {
                    Id = 2,
                    BackgroundImage = "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
                    Title = "Advanced Diagnostics",
                    Subtitle = "State-of-the-art laboratory testing with precision and accuracy",
                    Description = "Our advanced diagnostic capabilities provide accurate results with the latest medical technology.",
                    ButtonText = "Learn More",
                    ThumbnailImage = "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
                    AltText = "Slide 2"
                },
                new SlideData
                {
                    Id = 3,
                    BackgroundImage = "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
                    Title = "Quality Healthcare",
                    Subtitle = "Your health, our priority with comprehensive medical solutions",
                    Description = "Comprehensive healthcare solutions designed to meet your medical needs with excellence and care.",
                    ButtonText = "Book Now",
                    ThumbnailImage = "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
                    AltText = "Slide 3"
                }
            };
        }
    }
} 