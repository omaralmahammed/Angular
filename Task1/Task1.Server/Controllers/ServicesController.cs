﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Task1.Server.DTO;
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


        [HttpPost("AddService")]
        public IActionResult AddService([FromForm] ServicesDTO addService)
        {
            var check = _db.Services.Where(s => s.ServiceName == addService.ServiceName).FirstOrDefault();

            if (check != null) { 
                return BadRequest("This service already exict");
            }

            var folder = Path.Combine(Directory.GetCurrentDirectory(), "UploadsImages");

            if (!Directory.Exists(folder))
            {
                Directory.CreateDirectory(folder);
            }

            var fileImage = Path.Combine(folder, addService.ServiceImage.FileName);

            if (!System.IO.File.Exists(fileImage))
            {
                using (var stream = new FileStream(fileImage, FileMode.Create))
                {

                    addService.ServiceImage.CopyToAsync(stream);

                }
            }

            Service newService = new Service(){

                ServiceName = addService.ServiceName,
                ServiceDescription = addService.ServiceDescription,
                ServiceImage = addService.ServiceImage.FileName,
            };

            _db.Services.Add(newService);
            _db.SaveChanges();

            return Ok();
        }



        [HttpPut("UpdateServicesDetails/{serviceId}")]
        public IActionResult UpdateServicesDetails( [FromForm] ServicesDTO serviceInfo,  int serviceId)
        {

            var service = _db.Services.Find(serviceId);


            var folder = Path.Combine(Directory.GetCurrentDirectory(), "UploadsImages");

            if (!Directory.Exists(folder))
            {
                Directory.CreateDirectory(folder);
            }

            var fileImage = Path.Combine(folder, serviceInfo.ServiceImage.FileName);

            if (!System.IO.File.Exists(fileImage))
            {
                using (var stream = new FileStream(fileImage, FileMode.Create))
                {

                    serviceInfo.ServiceImage.CopyToAsync(stream);

                }
            }

            service.ServiceName = serviceInfo.ServiceName;
            service.ServiceDescription = serviceInfo.ServiceDescription;
            service.ServiceImage = serviceInfo.ServiceImage.FileName;
            
            _db.Services.Update(service);
            _db.SaveChanges();

            return Ok();
        }



        [HttpGet("GetImages/{imageName}")]
        public IActionResult GetImages(string imageName) {

            var pathImage = Path.Combine(Directory.GetCurrentDirectory(), "UploadsImages", imageName);


            if (System.IO.File.Exists(pathImage)) { 
                
               
                return PhysicalFile(pathImage, "image/png");
            
            }

            return NotFound();
        }
    }
}
