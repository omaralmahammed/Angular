using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Task1.Server.DTO;
using Task1.Server.Models;

namespace Task1.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {

        private readonly MyDbContext _db;


        public UsersController(MyDbContext db)
        {
            _db = db;
        }


        [HttpPost("Register")]
        public IActionResult Register([FromForm] UserRequestDTO addUser)
        {
            var check = _db.Users.Where(u => u.Email == addUser.Email).FirstOrDefault();

            if (check != null) {

                return BadRequest("User already exist!");
            }
            User newUser = new User()
            {
                Name = addUser.Name,
                Email = addUser.Email,
                Password = addUser.Password,
            };


            _db.Users.Add(newUser); 
            _db.SaveChanges();  

            return Ok(newUser);
        }


        [HttpPost("Login")]
        public IActionResult Login([FromForm] UserRequestDTO userInfo)
        {
            var checkUser = _db.Users.Where(u => u.Email ==userInfo.Email && u.Password == userInfo.Password).FirstOrDefault(); 
            
                if (checkUser == null) { 
                    return BadRequest("Email or Password wrong!");
            }

            return Ok(checkUser);
        }

    }
}
