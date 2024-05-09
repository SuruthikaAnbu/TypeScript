using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using webAPI.Data;

namespace webAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserDetailsController : ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public UserDetailsController(ApplicationDBContext applicationDBContext)
        {
            _dbContext=applicationDBContext;
        }
        // private static List<UserDetails> _UserDetails=new List<UserDetails>
        // {
        //     new UserDetails{CardNumber=1000,UserName="Ravi",PhoneNumber=987898766,Balance=500},
        //     new UserDetails{CardNumber=1001,UserName="suruthi",PhoneNumber=987898766,Balance=600},
        //     new UserDetails{CardNumber=1002,UserName="abi",PhoneNumber=987898766,Balance=700},
        // };
        //GET: api/Contacts
        [HttpGet]
        public IActionResult GetUserDetails()
        {
            return Ok(_dbContext.users.ToList());
        }
        //GET: api/Contacts/1
        [HttpGet("{id}")]
        public IActionResult GetUserDeltails(int id)
        {
            var users=_dbContext.users.FirstOrDefaultAsync(m =>m.CardNumber==id);
            if(users==null)
            {
                return NotFound();
            }
            return Ok(users);
        }
        //Adding a new medicine
        //POST:api/Contacts
        [HttpPost]
        public IActionResult PostUserDetails([FromBody] UserDetails users)
        {
            _dbContext.users.Add(users);
            _dbContext.SaveChanges();
            //_UserDetails.Add(user);
            return Ok();
        }
        
        //Updating an Exisiting medicine
        //PUT: api/Contacts/1
        [HttpPut("{id}")]
        public IActionResult PutUSerDetails(int id,[FromBody] UserDetails users)
        {
            var oldUsers=_dbContext.users.FirstOrDefault(m => m.CardNumber==id);
            if(oldUsers==null)
            {
                return NotFound();
            }
            //oldUsers.CardNumber=users.CardNumber;
            oldUsers.UserName=users.UserName;
            oldUsers.PhoneNumber=users.PhoneNumber;
            oldUsers.Balance=users.Balance;
            _dbContext.SaveChanges();
            return Ok();
        }
        //amount update
        
         [HttpPut("{id}/{amount}")]
        public IActionResult PutAmount(int id,double amount)
        {
            var index=_dbContext.users.FirstOrDefault(m => m.CardNumber==id);
            
            if(index!=null)
            {
            index.Balance=amount;
            _dbContext.SaveChanges();
            }
            return Ok();
        }
        //Deleting an existing medicine
        //DELETE: api/Contacts/1
        [HttpDelete("{id}")]
        public IActionResult DelecteUSerDetails(int id)
        {
            var users=_dbContext.users.FirstOrDefault(m =>m.CardNumber==id);
            if(users==null)
            {
                return NotFound();
            }
            _dbContext.users.Remove(users);
            _dbContext.SaveChanges();
            //_UserDetails.Remove(user);
            return Ok();
        }
    //     private readonly ILogger<UserDetailsController> _logger;

    //     public UserDetailsController(ILogger<UserDetailsController> logger)
    //     {
    //         _logger = logger;
    //     }

    //     public IActionResult Index()
    //     {
    //         return View();
    //     }

    //     [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    //     public IActionResult Error()
    //     {
    //         return View("Error!");
    //     }
    }
}