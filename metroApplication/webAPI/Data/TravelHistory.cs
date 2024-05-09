using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
namespace webAPI.Data
{
    [Table("travelhistory", Schema = "public")]
    public class TravelHistory
    {
        [Key]
        public int TravelID{get; set;}
        public int TicketID{get; set;}
        public int CardNumber{get; set;}
        public string FromLocation{get; set;}
        public string ToLocation{get; set;}
        public string Date{get; set;}
        public double TravelCost{get; set;}
   
    }
}