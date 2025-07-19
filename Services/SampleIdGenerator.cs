using CenterOfExcellence.Constants;

namespace CenterOfExcellence.Services
{
    public static class SampleIdGenerator
    {
        private static readonly Dictionary<string, int> DailyCounters = new();

        public static string GenerateSampleId(string sampleTypeCode)
        {
            var year = DateTime.Now.Year;
            var month = DateTime.Now.Month.ToString("D2");
            var day = DateTime.Now.Day.ToString("D2");
            
            // Get sequence number for the day
            var sequence = GetDailySequence(sampleTypeCode, DateTime.Now);
            
            return $"{sampleTypeCode}-{year}-{month}{day}-{sequence:D3}";
        }
        
        private static int GetDailySequence(string sampleTypeCode, DateTime date)
        {
            var key = $"{sampleTypeCode}-{date:yyyy-MM-dd}";
            
            if (!DailyCounters.ContainsKey(key))
            {
                DailyCounters[key] = 0;
            }
            
            DailyCounters[key]++;
            return DailyCounters[key];
        }

        public static void ResetDailyCounters()
        {
            DailyCounters.Clear();
        }
    }
} 