using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Task1.Server.DTO;
using Task1.Server.Models;

namespace Task1.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserSubscriptionController : ControllerBase
    {
        private readonly MyDbContext _db;

        public UserSubscriptionController(MyDbContext db)
        {
            _db = db;
        }


        [HttpPost("AddUserSubscription")]
        public IActionResult AddUserSubscription([FromBody] UserSubscriptionDTO userInfo)
        {

            var subscription = _db.Subscriptions.Find(userInfo.ScriptionId);

            var amount = subscription.SubscriptionAmount;


            UserSubscription newSubscription = new UserSubscription()
            {
                UserId = userInfo.UserId,
                SubServiceId = userInfo.SubServiceId,
                ScriptionId = userInfo.ScriptionId,
                StartDate = DateTime.Now,
                EndDate = DateTime.Now.AddMonths(Convert.ToInt32(amount))
            };


            _db.UserSubscriptions.Add(newSubscription);
            _db.SaveChanges();
            return Ok();
        }
    }
}
