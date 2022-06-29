using ApartmentManagementSystem.Dal.Abstract;
using ApartmentManagementSystem.Entity.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace ApartmentManagementSystem.Dal.Concrete.EntityFramework.Repository
{
    public class UserRepository : GenericRepository<User>, IUserRepository
    {
        public UserRepository(DbContext context):base(context)
        {

        }
        public IQueryable<User> GetTotalUsers()
        {
            return dbSet.AsQueryable<User>();
        }

        public User Login(User login)
        {
          var user=dbSet.Where(x=>x.Email==login.Email&&x.Password==login.Password).SingleOrDefault();
            
            return user; 
            

        }
    }
}
