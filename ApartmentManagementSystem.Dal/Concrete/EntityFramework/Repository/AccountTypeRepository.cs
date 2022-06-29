using ApartmentManagementSystem.Dal.Abstract;
using ApartmentManagementSystem.Entity.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace ApartmentManagementSystem.Dal.Concrete.EntityFramework.Repository
{
    public class AccountTypeRepository : GenericRepository<AccountType>, IAccountTypeRepository
    {
        public AccountTypeRepository(DbContext context):base(context)
        {

        }
       
    }
}
