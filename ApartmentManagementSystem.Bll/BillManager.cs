using ApartmentManagementSystem.Entity.Dto;
using ApartmentManagementSystem.Entity.Models;
using ApartmentManagementSystem.Interface;
using System;

namespace ApartmentManagementSystem.Bll
{
    public class BillManager : GenericManager<Bill, DtoBill>, IBillService
    {
        public BillManager(IServiceProvider service) : base(service)
        {

        }
    }
}
