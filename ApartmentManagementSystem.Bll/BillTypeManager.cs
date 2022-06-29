using ApartmentManagementSystem.Entity.Dto;
using ApartmentManagementSystem.Entity.Models;
using ApartmentManagementSystem.Interface;
using System;

namespace ApartmentManagementSystem.Bll
{
    public class BillTypeManager : GenericManager<BillType, DtoBillType>, IBillTypeService
    {
        public BillTypeManager(IServiceProvider service) : base(service)
        {

        }
    }
}
