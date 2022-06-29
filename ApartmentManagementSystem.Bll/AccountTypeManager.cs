using ApartmentManagementSystem.Entity.Dto;
using ApartmentManagementSystem.Entity.Models;
using ApartmentManagementSystem.Interface;
using System;

namespace ApartmentManagementSystem.Bll
{
    public class AccountTypeManager : GenericManager<AccountType, DtoAccountType>, IAccountTypeService
    {
        public AccountTypeManager(IServiceProvider service) : base(service)
        {

        }
    }
}
