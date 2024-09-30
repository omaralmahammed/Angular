using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Task1.Server.Models;

namespace Task1.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubscriptionController : ControllerBase
    {
        private readonly MyDbContext _db;

        public SubscriptionController(MyDbContext db)
        {
            _db = db;
        }


        [HttpGet("GetAllSubscriptions")]
        public IActionResult GetAllSubscriptions()
        {

            var subscriptions = _db.Subscriptions.ToList();

            return Ok(subscriptions);
        }


    }
}
