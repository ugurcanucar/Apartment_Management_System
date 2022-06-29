using ApartmentManagementSystem.Dal.Abstract;
using ApartmentManagementSystem.Entity.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace ApartmentManagementSystem.Dal.Concrete.EntityFramework.Repository
{
    public class BlockRepository : GenericRepository<Block>, IBlockRepository
    {
        public BlockRepository(DbContext context):base(context)
        {

        }
       
    }
}
