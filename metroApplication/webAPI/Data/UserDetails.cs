using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;

namespace webAPI.Data
{
    [Table("userdetails", Schema = "public")]
    public class UserDetails
    {
        [Key]
        public int CardNumber{get; set;}
        public string UserName{get; set;}
        public long PhoneNumber{get; set;}
        public double Balance{get; set;}
    }
    
 
}