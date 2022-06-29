using ApartmentManagementSystem.Entity.Dto;
using ApartmentManagementSystem.Entity.Models;
using ApartmentManagementSystem.Interface;
using System;

namespace ApartmentManagementSystem.Bll
{
    public class ApartmentManager : GenericManager<Apartment, DtoApartment>, IApartmentService
    {
        public ApartmentManager(IServiceProvider service) : base(service)
        {

        }

    }
}
