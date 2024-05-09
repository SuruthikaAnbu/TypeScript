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
    
    public class TicketFairController : ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public TicketFairController(ApplicationDBContext applicationDBContext)
        {
            _dbContext=applicationDBContext;
        }
        // private static List<TicketFair> _Ticket=new List<TicketFair>
        // {
        //     new TicketFair{TicketID=100,FromLocation="Airport",ToLocation="Egmore",Fair=55},
        //     new TicketFair{TicketID=101,FromLocation="Koyembedu",ToLocation="Egmore",Fair=35},
        //     new TicketFair{TicketID=102,FromLocation="Egmore",ToLocation="Airport",Fair=25},

        // };
         //GET: api/Contacts
        [HttpGet]
        public IActionResult GetTicket()
        {
            return Ok(_dbContext.ticket.ToList());
        }
        //GET: api/Contacts/1
        [HttpGet("{id}")]
        public IActionResult GetMedicine(int id)
        {
            var ticket = _dbContext.ticket.FirstOrDefaultAsync(m => m.TicketID==id);
            if(ticket==null)
            {
                return NotFound();
            }
            return Ok(ticket);
        }
        //Adding a new medicine
        //POST:api/Contacts
        [HttpPost]
        public IActionResult PostTicket([FromBody] TicketFair ticket)
        {
            _dbContext.ticket.Add(ticket);
            _dbContext.SaveChanges();
            //you might want to return CreatedAtAction or another appo+ropiate response
            return Ok();
        }
        //Updating an Exisiting medicine
        //PUT: api/Contacts/1
        [HttpPut("{id}")]
        public IActionResult PutTicket(int id, [FromBody] TicketFair ticket)
        {
            var ticketOld = _dbContext.ticket.FirstOrDefault(m => m.TicketID==id);
            if(ticketOld==null)
            {
                return NotFound();
            }
            ticketOld.TicketID=ticket.TicketID;
            ticketOld.FromLocation=ticket.FromLocation;
            ticketOld.ToLocation=ticket.ToLocation;
            ticketOld.Fair=ticket.Fair;
            _dbContext.SaveChanges();

            // _Ticket[index]=ticket;
            //You mightwant to return NoContent or another appropriate responce
            return Ok();
        }
        //Deleting an existing medicine
        //DELETE: api/Contacts/1
        [HttpDelete("{id}")]
        public IActionResult DeleteTicket(int id)
        {
            var ticket=_dbContext.ticket.FirstOrDefault(m => m.TicketID==id);
            if(ticket==null)
            {
                return NotFound();
            }
            _dbContext.ticket.Remove(ticket);
            _dbContext.SaveChanges();
            
            //You mightwant to return NoContent or another appropriate responce
            return Ok();
        }
        // private readonly ILogger<TicketFairController> _logger;

        // public TicketFairController(ILogger<TicketFairController> logger)
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