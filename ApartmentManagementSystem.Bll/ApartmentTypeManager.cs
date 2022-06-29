using ApartmentManagementSystem.Entity.Dto;
using ApartmentManagementSystem.Entity.Models;
using ApartmentManagementSystem.Interface;
using System;

namespace ApartmentManagementSystem.Bll
{
    public class ApartmentTypeManager : GenericManager<ApartmentType, DtoApartmentType>, IApartmentTypeService
    {
        public ApartmentTypeManager(IServiceProvider service) : base(service)
        {

        }
    }
}
