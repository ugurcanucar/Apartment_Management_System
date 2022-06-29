using ApartmentManagementSystem.Entity.Base;
using System.Collections.Generic;

#nullable disable

namespace ApartmentManagementSystem.Entity.Models
{
    public class AccountType:EntityBase
    {
        public AccountType()
        {
            Users = new HashSet<User>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<User> Users { get; set; }
    }
}
