using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

using System.ComponentModel.DataAnnotations.Schema;
 


namespace webAPI.Data
{
    [Table("ticketfair", Schema = "public")]
    public class TicketFair
    {
        [Key]
        public int TicketID{get; set;}
        public string FromLocation{get; set;}
        public string ToLocation{get; set;}
        public double Fair{get; set;}


    }
}