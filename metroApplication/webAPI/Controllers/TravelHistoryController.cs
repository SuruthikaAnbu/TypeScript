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
    public class TravelHistoryController : ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public TravelHistoryController(ApplicationDBContext applicationDBContext)
        {
            _dbContext=applicationDBContext;
        }
        // private static List<TravelHistory> _Travel=new List<TravelHistory>
        // {
        //     new TravelHistory{TravelID=100,CardNumber=1000,FromLocation="Airport",ToLocation="Egmore",Date="5/6/2024",TravelCost=50},
        //     new TravelHistory{TravelID=101,CardNumber=1000,FromLocation="Airport",ToLocation="Koyembedu",Date="5/6/2024",TravelCost=40},
        //     new TravelHistory{TravelID=102,CardNumber=1000,FromLocation="Koyembedu",ToLocation="Egmore",Date="5/6/2024",TravelCost=30},


        // };
         //GET: api/Contacts
        [HttpGet]
        public IActionResult GetTraveID()
        {
            return Ok(_dbContext.travel.ToList());
        }
        //Get
        [HttpGet("{id}")]
        public IActionResult GetTravel(int id)
        {
            var travel = _dbContext.travel.FirstOrDefaultAsync(m => m.TravelID==id);
            if(travel==null)
            {
                return NotFound();
            }
            return Ok(travel);
        }
        //Adding a new medicine
        //POST:api/Contacts
        [HttpPost]
        public IActionResult PostTravel([FromBody] TravelHistory travel)
        {
            _dbContext.travel.Add(travel);
            _dbContext.SaveChanges();
           // _Travel.Add(travel);
            //you might want to return CreatedAtAction or another appo+ropiate response
            return Ok();
        }
        [HttpPut("{id}")]
        public IActionResult PutTravel(int id, [FromBody] TravelHistory travel)
        {
            var oldTravel = _dbContext.travel.FirstOrDefault(m => m.TravelID==id);
            if(oldTravel==null)
            {
                return NotFound();
            }
            oldTravel.TravelID=travel.TravelID;
            oldTravel.TicketID=travel.TicketID;
            oldTravel.CardNumber=travel.CardNumber;
            oldTravel.FromLocation=travel.FromLocation;
            oldTravel.ToLocation=travel.ToLocation;
            oldTravel.Date=travel.Date;
            oldTravel.TravelCost=travel.TravelCost;
            _dbContext.SaveChanges();
           // _Travel[index]=medicine;
            //You mightwant to return NoContent or another appropriate responce
            return Ok();
        }
        //Deleting an existing medicine
        //DELETE: api/Contacts/1
        [HttpDelete("{id}")]
        public IActionResult DeleteTravel(int id)
        {
            var travel=_dbContext.travel.FirstOrDefault(m => m.TicketID ==id);
            if(travel==null)
            {
                return NotFound();
            }
            _dbContext.travel.Remove(travel);
            _dbContext.SaveChanges();
            //You mightwant to return NoContent or another appropriate responce
            return Ok();
        }
        // private readonly ILogger<TravelHistoryController> _logger;

        // public TravelHistoryController(ILogger<TravelHistoryController> logger)
        // {
        //     _logger = logger;
        // }

        // public IActionResult Index()
        // {
        //     return View();
        // }

        // [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        // public IActionResult Error()
        // {
        //     return View("Error!");
        // }
    }
}