using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Task1.Server.Models;

namespace Task1.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServicesController : ControllerBase
    {

        private readonly MyDbContext _db;

        public ServicesController(MyDbContext db)
        {
            _db = db;
        }


        [HttpGet("GetAllServices")]

        public IActionResult GetAllServices() { 
        
            var services = _db.Services.ToList();

            return Ok(services);
        }

        [HttpGet("GetSubServicesByServiceId/{serviceId}")]
        public IActionResult GetSubServicesByServiceId(int serviceId)
        {

            var subServices = _db.SubServices.Where(s => s.ServiceId == serviceId).ToList();

            return Ok(subServices);
        }


        [HttpGet("GetSubServicesDetails/{subServiceId}")]
        public IActionResult GetSubServicesDetails(int subServiceId)
        {

            var subServiceDetails = _db.SubServices.Where(s => s.SubServiceId == subServiceId).FirstOrDefault();

            return Ok(subServiceDetails);
        }
    }
}
