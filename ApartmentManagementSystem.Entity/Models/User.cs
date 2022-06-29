using ApartmentManagementSystem.Entity.Base;
using System.Collections.Generic;

#nullable disable

namespace ApartmentManagementSystem.Entity.Models
{
    public partial class User : EntityBase
    {
        public User()
        {
            Apartments = new HashSet<Apartment>();
            Bills = new HashSet<Bill>();
            MessageReceivers = new HashSet<Message>();
            MessageUsers = new HashSet<Message>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public int AccountTypeId { get; set; }
        public string IdNumber { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Phone { get; set; }
        public string VehiclePlate { get; set; }

        public virtual AccountType AccountType { get; set; }
        public virtual ICollection<Apartment> Apartments { get; set; }
        public virtual ICollection<Bill> Bills { get; set; }
        public virtual ICollection<Message> MessageReceivers { get; set; }
        public virtual ICollection<Message> MessageUsers { get; set; }
    }
}
