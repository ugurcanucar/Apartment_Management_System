using ApartmentManagementSystem.Entity.Dto;
using ApartmentManagementSystem.Entity.Models;
using ApartmentManagementSystem.Interface;
using System;

namespace ApartmentManagementSystem.Bll
{
    public class BlockManager : GenericManager<Block,DtoBlock>, IBlockService
    {
        public BlockManager(IServiceProvider service) : base(service)
        {

        }
    }
}
