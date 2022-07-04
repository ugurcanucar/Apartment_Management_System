using ApartmentManagementSystem.Entity.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApartmentManagementSystem.Dal.Abstract
{
    public interface IUserRepository
    {
        IQueryable<User> GetTotalUsers();

        User Login(User login); 
    }
}
